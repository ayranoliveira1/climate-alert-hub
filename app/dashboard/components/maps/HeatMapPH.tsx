"use client";

import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Dados das regiões das Filipinas com eventos climáticos extremos
const regionsPhilippines = [
   [14.5995, 120.9842, "Manila"],
   [10.3157, 123.8854, "Cebu City"],
   [8.228, 124.2452, "Cagayan de Oro"],
   [7.1907, 125.4553, "Davao City"],
   [16.4023, 120.596, "Baguio City"],
];

const MapComponentPhilippines = () => {
   useEffect(() => {
      // Inicializa o mapa centrado nas Filipinas
      const map = L.map("map-philippines").setView([12.8797, 121.774], 5);

      // Adiciona o tile layer do CartoDB Positron
      L.tileLayer(
         "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
         {
            attribution:
               '© <a href="https://carto.com/attributions">CARTO</a> | © <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
         },
      ).addTo(map);

      regionsPhilippines.forEach(([lat, lng, name]) => {
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

      regionsPhilippines.forEach(([lat, lng, name]) => {
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
         id="map-philippines"
         style={{ height: "383px", width: "100%", borderRadius: "10px" }}
         className="z-20"
      />
   );
};

export default MapComponentPhilippines;
