import { Map as LeafletMap, TileLayer } from "react-leaflet";
import "../styles/Map.css";
import { MapData } from "./MapData";

export const CovidMap = ({ countries, casesType, mapCenter, zoom }) => {
  return (
    <>
      <div className="map">
        <LeafletMap center={mapCenter} zoom={zoom}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <MapData countries={countries}/>
        </LeafletMap>
      </div>
    </>
  );
};
