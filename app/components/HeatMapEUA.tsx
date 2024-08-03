"use client";

import { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Dados simulados das cidades
const cities = [
   [27.7663, -81.6868, "Florida"], // Centro da Florida
   [31.9686, -99.9018, "Texas"], // Centro do Texas
   [36.7783, -119.4179, "California"], // Centro da Califórnia
   [35.4676, -97.5164, "Oklahoma"], // Centro de Oklahoma
   [30.9843, -91.9623, "Louisiana"], // Centro da Louisiana
];

const EuaMap = () => {
   useEffect(() => {
      // Inicializa o mapa centrado no Brasil
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
            radius: 90000, // Define o raio dos círculos
            weight: 3,
         })
            .addTo(map)
            .bindPopup(String(name)); // Exibe o nome da cidade no popup
      });

      cities.forEach(([lat, lng, name]) => {
         L.marker([Number(lat), Number(lng)], {
            icon: L.divIcon({
               className: "city-label", // Classe CSS personalizada
               html: `<div>${name}</div>`, // HTML para o conteúdo do marcador
               iconSize: [100, 40], // Tamanho do ícone
               iconAnchor: [50, 20], // Ponto de ancoragem do ícone
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

      // Adiciona um controle de zoom
      L.control
         .zoom({
            position: "topright",
         })
         .addTo(map);

      // Cleanup map on component unmount
      return () => {
         map.remove();
      };
   }, []);

   return (
      <div
         id="map"
         style={{ height: "383px", width: "100%", borderRadius: "10px" }}
      />
   );
};

export default EuaMap;
