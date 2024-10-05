import {FC as FunctionComponent} from 'react';

import {useStrapiApp} from '@strapi/admin/strapi-admin';
import type {Schema} from '@strapi/types';


const prefixFileUrlWithBackendUrl = (fileURL: string) => {
  return !!fileURL &&
    fileURL.startsWith('/') &&
    'strapi' in window &&
    window.strapi instanceof Object &&
    'backendURL' in window.strapi &&
    window.strapi.backendURL ?
    `${window.strapi.backendURL}${fileURL}` :
    fileURL;
};

interface MediaLibComponentProps {
  isOpen: boolean,
  onChange: (files: Schema.Attribute.MediaValue<true>) => void,
  onToggle: () => void,
}

const MediaLib: FunctionComponent<MediaLibComponentProps> = ({
  isOpen,
  onChange,
  onToggle,
}) => {
  const components = useStrapiApp('ImageDialog', (state) => state.components);
  if (!components || !isOpen) return null;

  const MediaLibraryDialog = components['media-library'] as FunctionComponent<{
    onClose: () => void,
    onSelectAssets: (_images: Schema.Attribute.MediaValue<true>) => void,
  }>;

  const handleSelectAssets = (files: Schema.Attribute.MediaValue<true>) => {
    const formattedFiles = files.map((f) => ({
      alt: f.alternativeText || f.name,
      url: prefixFileUrlWithBackendUrl(f.url),
      mime: f.mime,
    }));

    onChange(formattedFiles);
  };

  return (
    <MediaLibraryDialog
      onClose={onToggle}
      onSelectAssets={handleSelectAssets}
    />
  );
};

MediaLib.defaultProps = {
  isOpen: false,
  onChange: (_files: Schema.Attribute.MediaValue<true>) => {},
  onToggle: () => {},
};

export {MediaLib};
