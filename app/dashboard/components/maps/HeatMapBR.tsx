"use client";

import { useEffect } from "react";
import L, { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

interface City {
   name: string;
   lat: number;
   lon: number;
   temperature: number;
}

const positions: {
   brazil: {
      coor: LatLngExpression;
      zoom: number;
   };
   unitedStates: {
      coor: LatLngExpression;
      zoom: number;
   };
   mocambique: {
      coor: LatLngExpression;
      zoom: number;
   };
   philladelphia: {
      coor: LatLngExpression;
      zoom: number;
   };
   russia: {
      coor: LatLngExpression;
      zoom: number;
   };
} = {
   brazil: {
      coor: [-14.235, -51.9253],
      zoom: 3,
   },
   unitedStates: {
      coor: [37.0902, -95.7129],
      zoom: 3,
   },
   mocambique: {
      coor: [-18.6657, 35.5296],
      zoom: 5,
   },
   philladelphia: {
      coor: [12.8797, 121.774],
      zoom: 5,
   },
   russia: {
      coor: [55.7558, 37.6173],
      zoom: 3,
   },
};

function getColors(temperature: number) {
   if (temperature > 35) {
      return {
         color: "red",
         fillColor: "#f03",
      };
   } else if (temperature > 30) {
      return {
         color: "orange",
         fillColor: "#ff7b00",
      };
   } else if (temperature > 25) {
      return {
         color: "#c9ff04",
         fillColor: "#c9ff04",
      };
   } else if (temperature > 15) {
      return {
         color: "#04ff81",
         fillColor: "#04ffaf",
      };
   } else if (temperature < 15) {
      return {
         color: "#04a7ff",
         fillColor: "#047aff",
      };
   }
}
// LatLngExpression
// Dados simulados das cidades

const MapComponent = ({
   citiesArray,
   country,
}: {
   citiesArray: City[];
   country:
      | "brazil"
      | "unitedStates"
      | "philladelphia"
      | "russia"
      | "mocambique";
}) => {
   const cities = [citiesArray.map((city) => [city.lat, city.lon, city.name])];
   const { coor, zoom } = positions[country];
   useEffect(() => {
      // Inicializa o mapa centrado no Brasil
      const map = L.map("map").setView(coor, zoom);

      // Adiciona o tile layer do CartoDB Positron
      L.tileLayer(
         "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
         {
            attribution:
               '© <a href="https://carto.com/attributions">CARTO</a> | © <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
         },
      ).addTo(map);

      citiesArray.forEach(({ lat, lon, name, temperature }) => {
         return L.circle([lat, lon], {
            ...getColors(temperature),
            fillOpacity: 0.5,
            radius: 90000,
            weight: 3,
         })
            .addTo(map)
            .bindPopup(String(name));
      });

      citiesArray.forEach(({ lat, lon, name }) => {
         return L.marker([lat, lon], {
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

export default MapComponent;
