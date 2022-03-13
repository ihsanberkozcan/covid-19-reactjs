import { Circle, Popup } from "react-leaflet";
export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country) => (
    <Circle
    key={country.country}
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color="#FF0000"
      fillColor="#FF0000"
      fillOpacity={0.4}
      radius={Math.sqrt(country[casesType]) * 100}
    >
      <Popup>
        <div>
          <div
            style={{
              backgroundImage: `url(${country.countryInfo.flag})`,
              display: "block",
              width: "260px",
              height: "200px",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="info-name" style={{ fontSize: "20px" }}>
            {country.country}
          </div>
          <div className="info-confirmed" style={{ fontSize: "16px" }}>
            <b>Cases:</b> {country.cases}
          </div>
          <div className="info-recovered" style={{ fontSize: "16px" }}>
            <b>Recovered:</b> {country.recovered}
          </div>
          <div className="info-deaths" style={{ fontSize: "16px" }}>
            <b>Deaths:</b> {country.deaths}
          </div>
        </div>
      </Popup>
    </Circle>
  ));
