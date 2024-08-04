"use client";

import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Dados simulados das cidades
const cities = [
   [27.7663, -81.6868, "Florida"],
   [31.9686, -99.9018, "Texas"],
   [36.7783, -119.4179, "California"],
   [35.4676, -97.5164, "Oklahoma"],
   [30.9843, -91.9623, "Louisiana"],
];

const EuaMap = () => {
   useEffect(() => {
      // Inicializa o mapa centrado no EUA
      const map = L.map("map").setView([37.0902, -95.7129], 3);

      // Adiciona o tile layer do CartoDB Positron
      L.tileLayer(
         "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
         {
            attribution:
               '© <a href="https://carto.com/attributions">CARTO</a> | © <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
         },
      ).addTo(map);

      cities.forEach(([lat, lng, name]) => {
         return L.circle([Number(lat), Number(lng)], {
            color: "red",
            fillColor: "#f03",
            fillOpacity: 0.5,
            radius: 90000,
            weight: 3,
         })
            .addTo(map)
            .bindPopup(String(name));
      });

      cities.forEach(([lat, lng, name]) => {
         L.marker([Number(lat), Number(lng)], {
            icon: L.divIcon({
               className: "city-label",
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
           <p>Informações adicionais</p>
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
         id="map"
         style={{ height: "383px", width: "100%", borderRadius: "10px" }}
         className="z-20"
      />
   );
};

export default EuaMap;
