import {renderToString} from "react-dom/server";
import {FaMapMarkerAlt} from "react-icons/fa";
import L from "leaflet";
import React from "react";

export const createCustomIcon = () =>  {
    const iconUrl = `data:image/svg+xml;base64,${btoa(
        renderToString(<FaMapMarkerAlt color="#6f2729" />),
    )}`;

    return L.icon({
        iconUrl,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
    });
}