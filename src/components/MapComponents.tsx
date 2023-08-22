import React, { useState } from 'react';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet';
import L, { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { createCustomIcon } from './UI/Marker';
import { Map } from '../interfaces/Interface';

interface MapComponentsProps extends Map {
  onUpdateCoordinates?: (coordinates: LatLngTuple) => void;
}

const MapComponents: React.FC<MapComponentsProps> = ({
  center,
  title,
  edit,
  onUpdateCoordinates,
}) => {
  const customIcon = createCustomIcon();
  const [clickLocation, setClickLocation] = useState<LatLngTuple>(center);

  const handleMapClick = (e: L.LeafletMouseEvent) => {
    const { lat, lng } = e.latlng;
    const newCoordinates: LatLngTuple = [lat, lng];
    setClickLocation(newCoordinates);

    // Call onUpdateCoordinates if it's defined
    if (onUpdateCoordinates) {
      onUpdateCoordinates(newCoordinates);
    }
  };

  const ClickEventComponent: React.FC = () => {
    useMapEvents({
      click: handleMapClick,
    });
    return null;
  };

  return (
    <MapContainer
      className="z-10 mx-auto my-5 h-100 w-full "
      center={center}
      zoom={17}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {clickLocation && (
        <Marker position={clickLocation} icon={customIcon}>
          <Popup offset={[0, -25]}>{title}</Popup>
        </Marker>
      )}

      {edit && <ClickEventComponent />}
    </MapContainer>
  );
};

export default MapComponents;
