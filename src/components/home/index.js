import React, { useState, useEffect } from "react";
import Film from "../film";
import Chart from "../chart/index.js";
import SpinnerPage from "../loader";

import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  const [filmsData, setFilmsData] = useState(null);

  useEffect(() => {
    let url = `https://swapi.dev/api/films`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        return setFilmsData(data);
      })

      .catch(() => console.log("api error"));
  }, []);

  return (
    <Container fluid>
      {!filmsData ? (
        <SpinnerPage />
      ) : (
        <div>
          <h2 className="my-5">Total movies: {filmsData.count}</h2>
          <Row className="justify-content-md-center">
            <Col lg="7">
              <Card className="p-1 mb-5" style={{ width: "100%" }}>
                <ListGroup variant="flush">
                  {filmsData.results.map((film) => (
                    <Film key={film.episode_id} film={film} />
                  ))}
                </ListGroup>
              </Card>
            </Col>
          </Row>

          <Row className="justify-content-md-center">
            <Col lg="8">
              <Chart data={filmsData} />
            </Col>
          </Row>
        </div>
      )}
    </Container>
  );
}

export default Home;
