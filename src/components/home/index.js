import React, { useState, useEffect } from "react";
import Film from "../film";

import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

function Home() {
  const [filmsData, setFilmsData] = useState(null);

  useEffect(() => {
    let url = `https://swapi.dev/api/films`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        return setFilmsData(data);
      })

      .catch(() => console.log("api error"));
  }, []);

  return (
    <div>
      <h2 className="my-5">Total movies: {filmsData ? filmsData.count : ""}</h2>
      <Card className="p-1" style={{ width: "40rem" }}>
        <ListGroup variant="flush">
          {filmsData &&
            filmsData.results.map((film) => (
              <Film key={film.episode_id} film={film} />
            ))}
        </ListGroup>
      </Card>
    </div>
  );
}

export default Home;
