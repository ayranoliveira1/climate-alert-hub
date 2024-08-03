"use client";

import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Dados das regiões de Moçambique com eventos climáticos extremos
const regionsMozambique = [
   [-25.9655, 32.5832, "Maputo"],
   [-19.8333, 34.85, "Beira"],
   [-16.156, 33.5862, "Tete"],
   [-23.8764, 35.3823, "Inhambane"],
   [-17.8749, 36.8855, "Quelimane"],
];

const MapComponentMozambique = () => {
   useEffect(() => {
      const map = L.map("map-mozambique").setView([-18.6657, 35.5296], 5);

      L.tileLayer(
         "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
         {
            attribution:
               '© <a href="https://carto.com/attributions">CARTO</a> | © <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
         },
      ).addTo(map);

      regionsMozambique.forEach(([lat, lng, name]) => {
         L.circle([Number(lat), Number(lng)], {
            color: "red",
            fillColor: "#f03",
            fillOpacity: 0.5,
            radius: 90000,
            weight: 3,
         })
            .addTo(map)
            .bindPopup(String(name));
      });

      regionsMozambique.forEach(([lat, lng, name]) => {
         L.marker([Number(lat), Number(lng)], {
            icon: L.divIcon({
               className: "region-label",
               html: `<div>${name}</div>`,
               iconSize: [100, 40],
               iconAnchor: [50, 20],
            }),
         })
            .addTo(map)
            .bindTooltip(
               `
            <div style="text-align: center;">
              <h3>${name}</h3>
              <p>Conhecida por eventos climáticos extremos.</p>
            </div>
          `,
            );
      });

      L.control
         .zoom({
            position: "topright",
         })
         .addTo(map);

      return () => {
         map.remove();
      };
   }, []);

   return (
      <div
         id="map-mozambique"
         style={{ height: "383px", width: "100%", borderRadius: "10px" }}
      />
   );
};

export default MapComponentMozambique;
