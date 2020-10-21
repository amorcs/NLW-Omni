import React from "react";
// import libriry
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { Map } from 'react-leaflet';
import { TileLayer } from "react-leaflet";

import 'leaflet/dist/leaflet.css';
// import internal
import mapMarkerImg from "../images/map-marker.svg";

// import css
import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />
          <h2>Escolha um Orfanato no mapa</h2>
          <p>Muitas crianças estão esperando você</p>
        </header>
        <footer>
            <strong>Belém</strong>
            <span>Pará</span>
        </footer>
      </aside>
      <Map className="map"
        center={[-1.3769462,-48.4373472]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
          <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </Map>
      <Link to="/" className="create-orphanage">
          <FiPlus size={32} color="#FFF"/>
      </Link>
    </div>
  );
}
export default OrphanagesMap;
