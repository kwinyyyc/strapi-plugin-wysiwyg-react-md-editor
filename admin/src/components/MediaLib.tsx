import React from 'react';
import PropTypes from 'prop-types';
import { useStrapiApp } from '@strapi/strapi/admin';

const prefixFileUrlWithBackendUrl = (fileURL: string) => {
  return !!fileURL &&
    fileURL.startsWith("/") &&
    "strapi" in window &&
    window.strapi instanceof Object &&
    "backendURL" in window.strapi &&
    window.strapi.backendURL
    ? `${window.strapi.backendURL}${fileURL}`
    : fileURL;
};

const MediaLib = ( { isOpen = false, onChange = () => {}, onToggle = () => {} } ) => {
  const { components } = useStrapiApp( 'library', app => app );
  const MediaLibraryDialog = components[ 'media-library' ];

  const handleSelectAssets = files => {
    const formattedFiles = files.map(f => ( {
      alt: f.alternativeText || f.name,
      url: prefixFileUrlWithBackendUrl( f.url ),
      mime: f.mime,
    } ) );

    onChange( formattedFiles );
  };

  if ( !isOpen ) {
    return null
  };

  return(
    <MediaLibraryDialog onClose={ onToggle } onSelectAssets={ handleSelectAssets } />
  );
};

MediaLib.propTypes = {
  isOpen: PropTypes.bool,
  onChange: PropTypes.func,
  onToggle: PropTypes.func,
};

export default MediaLib;
