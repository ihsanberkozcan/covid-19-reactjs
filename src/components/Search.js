import React, { useState, useEffect } from "react";
import { Input, AutoComplete } from "antd";
import axios from "axios";
import { SearchOutlined } from "@ant-design/icons";
export const Search = ({ update }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.data)
      .then(function (data) {
        const countries = data.map((country) => ({
          value: country.country,
        }));
        let worldwide = { value: "Worldwide" };
        countries.unshift(worldwide);
        setCountries(countries);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleSearch = (value) => {
    update(value);
  };

  return (
    <AutoComplete
      allowClear
      style={{
        width: "100%",
        marginTop: "15px",
        marginBottom: "15px",
      }}
      size="large"
      options={countries}
      onSelect={handleSearch}
      placeholder=""
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
    >
      <Input size="large" placeholder="Search" prefix={<SearchOutlined />} />
    </AutoComplete>
  );
};
