
import React from 'react';

export interface TributeItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export interface GalleryImageItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
}
