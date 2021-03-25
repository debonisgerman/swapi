import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlanets = async () => {
      const result = await axios("https://swapi.dev/api/planets/");

      let parsedFields = result.data.results;

      for (let p = 0; p < parsedFields.length; p++) {
        let keys = Object.keys(parsedFields[p]);
        for (let i = 0; i < keys.length; i++) {
          parsedFields[p][keys[i]] = !isNaN(
            parseFloat(parsedFields[p][keys[i]])
          )
            ? parseFloat(parsedFields[p][keys[i]])
            : parsedFields[p][keys[i]];
        }
      }

      setPlanets(parsedFields.sort((a, b) => (a.name > b.name ? 1 : -1)));
      setLoading(false);
    };
    fetchPlanets();
  }, []);

  const sortPlanets = (e, col) => {
    const wasActive = e.target.classList.contains("active");
    let sort = "asc";
    if (wasActive) {
      if (e.target.classList.contains("asc")) {
        sort = "desc";
      }
    }
    let elems = document.querySelector(".table-head tr").children;
    for (let i = 0; i < elems.length; i++) {
      elems[i].className = elems[i].className
        .split("active")
        .join("")
        .split(" asc")
        .join("")
        .split(" desc")
        .join("");
      elems[i].innerText = elems[i].innerText
        .split(" ⬇️")
        .join("")
        .split(" ⬆️")
        .join("");
    }

    e.target.className = `active ${sort}`;
    const updatedPlanets =
      sort === "asc"
        ? [...planets.sort((a, b) => (a[col] > b[col] ? 1 : -1))]
        : [...planets.sort((a, b) => (a[col] > b[col] ? -1 : 1))];

    e.target.innerText = e.target.innerText + (sort === "asc" ? " ⬆️" : " ⬇️");

    setPlanets(updatedPlanets);
  };

  return (
    <>
      <h1>Star Wars Planets</h1>
      {loading ? (
        <h3>Fetching data...</h3>
      ) : (
        <table id="table" border="0" cellSpacing="0" cellPadding="0">
          <thead className="table-head">
            <tr>
              <th className="desktop" onClick={(e) => sortPlanets(e, "climate")}>Climate</th>
              <th onClick={(e) => sortPlanets(e, "diameter")}>Diameter</th>
              <th className="desktop" onClick={(e) => sortPlanets(e, "gravity")}>Gravity</th>
              <th
                className="active asc"
                onClick={(e) => sortPlanets(e, "name")}
              >
                Name ⬆️
              </th>
              <th className="desktop" onClick={(e) => sortPlanets(e, "orbital_period")}>
                Orbital Period
              </th>
              <th onClick={(e) => sortPlanets(e, "population")}>Population</th>
              <th className="desktop" onClick={(e) => sortPlanets(e, "rotation_period")}>
                Rotation Period
              </th>
              <th className="desktop" onClick={(e) => sortPlanets(e, "surface_water")}>
                Surface Water
              </th>
              <th onClick={(e) => sortPlanets(e, "terrain")}>Terrain</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {planets.map((planet) => (
              <tr key={planet.name}>
                <td className="desktop">{planet.climate}</td>
                <td>{planet.diameter}</td>
                <td className="desktop" >{planet.gravity}</td>
                <td>{planet.name}</td>
                <td className="desktop">{planet.orbital_period}</td>
                <td>{planet.population}</td>
                <td className="desktop">{planet.rotation_period}</td>
                <td className="desktop">{planet.surface_water}</td>
                <td>{planet.terrain}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default App;
