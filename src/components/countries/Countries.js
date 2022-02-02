import "./Countries.scss";
import React, { useState } from "react";
import options from "../../api/api.js";
import total from "../../api/api.js";
import axios from "axios";

export default function Countries() {
  const [countries, setCountries] = useState([
    {
      name: "Usa",
    },
    {
      name: "Brazil",
    },
    {
      name: "India",
    },
    {
      name: "France",
    },
    {
      name: "Russia",
    },
    {
      name: "UK",
    },
  ]);

  window.onload = () => {
    countries.forEach((item) => {
      options.params.country = item.name;
      axios
        .request(options)
        .then((res) => {
          const respo = res.data.response[0];
          item.num = respo.cases.total;
          setCountries([...countries]);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };
  return (
    <div className="Countries mt-md-0 mt-5">
      <div className="result-card global">
        <div className="countary">Global</div>
        <div className="result">14 M</div>
      </div>
      <hr className="line" />
      <div className="row justify-content-between">
        {countries.map((el, n) => (
          <div className="col-lg-12 col-md-6 p-0" key={n}>
            <div className="result-card m-md-3">
              <div className="flag">
                <img src={`svg/${el.name}.svg`} width="100%" alt={el.name} />
              </div>
              <div className="countary">{el.name}</div>
              <div className="result">{el.num}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
