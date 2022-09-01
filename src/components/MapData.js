import { Circle } from "react-leaflet";
import { PopupItem } from "./PopupItem";
export const MapData = ({countries}) => {
  const casesType = "cases";
  console.log(countries);
  return (<>
    {
      countries.map((country) => (
        <Circle
          key={country.country}
          center={[country.countryInfo.lat, country.countryInfo.long]}
          color="#FF0000"
          fillColor="#FF0000"
          fillOpacity={0.4}
          radius={Math.sqrt(country[casesType]) * 100}><PopupItem country={country}/></Circle>))
    }
  </>
  )
}
