import React, { useEffect, useState } from "react";

import { Layout } from "antd";
import axios from "axios";

import { Logo } from "./components/Logo";
import { Search } from "./components/Search";
import { InfoBox } from "./components/InfoBox";
import { CovidMap } from "./components/CovidMap";
import { CountryName } from "./components/CountryName";

import "antd/dist/antd.css";
import "leaflet/dist/leaflet.css";
import "./styles/App.css";

const { Header, Content, Footer } = Layout;

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("Worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [vaccine, setVaccine] = useState();
  const [mapCenter, setMapCenter] = useState({
    lat: 40.54549273743365,
    lng: 34.95624090368961,
  });
  const [mapZoom, setMapZoom] = useState(4);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");

  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.data)
      .then((data) => {
        const countries = data.map((country) => ({
          name: country.country,
          value: country.countryInfo.iso2,
        }));
        setMapCountries(data);
        setCountries(countries);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("https://disease.sh/v3/covid-19/all")
      .then((response) => response.data)
      .then((data) => {
        setCountryInfo(data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=1")
      .then((response) => response.data)
      .then((data) => {
        setVaccine(Object.values(data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const update = async (search) => {
    let req;
    if (search == "Worldwide") {
      req = await fetch(`https://disease.sh/v3/covid-19/all`);
      axios
        .get("https://disease.sh/v3/covid-19/vaccine/coverage?lastdays=1")
        .then((response) => response.data)
        .then((data) => {
          setVaccine(Object.values(data));
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      req = await fetch(`https://disease.sh/v3/covid-19/countries/${search}`);
    }
    const data = await req.json();
    const reqVaccine = await fetch(
      `https://disease.sh/v3/covid-19/vaccine/coverage/countries/${search}?lastdays=1`
    );
    const dataVaccine = await reqVaccine.json();

    setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
    setMapZoom(4);
    setCountry(search);
    setCountryInfo(data);
    setVaccine(Object.values(dataVaccine.timeline));
  };

  return (
    <>
      <Layout>
        <Header className="header">
          <Logo />
        </Header>
        <Content>
          <Search update={update} />
          <CountryName country={country} />
          <InfoBox countryInfo={countryInfo} vaccine={vaccine} />
          <CovidMap
            country={country}
            countries={mapCountries}
            casesType={casesType}
            mapCenter={mapCenter}
            zoom={mapZoom}
          />
        </Content>
        <Footer></Footer>
      </Layout>
    </>
  );
}

export default App;
