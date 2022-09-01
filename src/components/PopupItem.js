import { Popup } from "react-leaflet";
import numeral from "numeral";
import { Typography } from "antd";
const { Title } = Typography;
export const PopupItem = ({ country }) => {
  return (
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
        <Title level={4}>
         {country.country}
        </Title>
        <div style={{ fontSize: "16px" }}>
          <b>Cases:</b> {numeral(country.cases).format("0,0")}
        </div>
        <div style={{ fontSize: "16px" }}>
          <b>Active Cases:</b> {numeral(country.active).format("0,0")}
        </div>
        <div style={{ fontSize: "16px" }}>
          <b>Recovered:</b> {numeral(country.recovered).format("0,0")}
        </div>
        <div style={{ fontSize: "16px" }}>
          <b>Deaths:</b> {numeral(country.deaths).format("0,0")}
        </div>
      </div>
    </Popup>
  )
}