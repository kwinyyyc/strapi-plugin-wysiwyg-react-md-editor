import React from "react";
import prefixFileUrlWithBackendUrl from "../utils/prefixFileUrlWithBackendUrl";
import { useStrapiApp } from "@strapi/strapi/admin";
import type { Schema } from "@strapi/types";

const MediaLibComponent: React.FC<any> = ({
  isOpen = false,
  onChange,
  onToggle,
  allowedTypes,
}) => {
  const components = useStrapiApp("ImageDialog", (state) => state.components);
  if (!components || !isOpen) return null;

  const MediaLibraryDialog: any = components[
    "media-library"
  ] as React.ComponentType<{
    allowedTypes?: Schema.Attribute.MediaKind[]; // 'images' | 'videos' | 'files' | 'audios'
    onClose: () => void;
    onSelectAssets: (_images: Schema.Attribute.MediaValue<true>) => void;
  }>;

  const handleSelectAssets = (assets: Schema.Attribute.MediaValue<true>) => {
    const formattedFiles = assets.map((f) => ({
      alt: f.alternativeText || f.name,
      url: prefixFileUrlWithBackendUrl(f.url),
      mime: f.mime,
      //width: f.width,
      //height: f.height,
      //size: f.size,
      //formats:f.formats,
    }));
    onChange(formattedFiles);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <MediaLibraryDialog
      allowedTypes={allowedTypes}
      onClose={onToggle}
      onSelectAssets={handleSelectAssets}
    />
  );
};

export default MediaLibComponent;
