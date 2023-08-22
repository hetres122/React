import { LatLngTuple } from 'leaflet';
import React from 'react';

interface MediaItem {
  idbucket: number;
  url: string;
  urlpicture: string;
}

export interface Item {
  room_id: number;
  snippet: string;
  idbucket: number;
  message: string;
  description: string;
  title: string;
  lon: number;
  lat: number;
  bucketname: string;
  typeplace: number;
  json: string;
  media: MediaItem[];
  hits: Item[];
}
export interface ComponentItem {
  pointList: Item[];
}
export interface ComponentProfile {
  userData: GuideData;
}
export interface ComponentDetails {
  urlSound?: string;
  title?: string;
  description: string;
  position?: LatLngTuple;
}
export interface ResponseReset {
  status: string;
  code: number;
}

export interface GuideData {
  description: string;
  facebook: string;
  formalName: string;
  formalSurname: string;
  id: number;
  idOrganizer: number | null;
  instagram: string;
  phone1: string;
  phone2: string;
  publicEmail: string;
  publicName: string;
  urlPicture: string;
  youtube: string;
}

export interface Map {
  center: LatLngTuple;
  title: string;
  edit: boolean;
}

export interface PointContainerProps {
  children: React.ReactNode;
  id: number;
}
