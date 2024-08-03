"use client";

import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Dados das regiões da Rússia com eventos climáticos extremos
const regionsRussia = [
   [55.7558, 37.6173, "Moscou"],
   [60.0, 30.0, "São Petersburgo"],
   [56.3269, 44.0059, "Nizhny Novgorod"],
   [64.5393, 40.5182, "Arkhangelsk"],
   [43.5855, 39.7231, "Sochi"],
];

const MapComponentRussia = () => {
   useEffect(() => {
      // Inicializa o mapa centrado na Rússia
      const map = L.map("map-russia").setView([55.7558, 37.6173], 3);

      // Adiciona o tile layer do CartoDB Positron
      L.tileLayer(
         "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
         {
            attribution:
               '© <a href="https://carto.com/attributions">CARTO</a> | © <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
         },
      ).addTo(map);

      regionsRussia.forEach(([lat, lng, name]) => {
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

      regionsRussia.forEach(([lat, lng, name]) => {
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
         id="map-russia"
         style={{ height: "383px", width: "100%", borderRadius: "10px" }}
      />
   );
};

export default MapComponentRussia;
