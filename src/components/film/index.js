import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
function Film({ film }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <ListGroup.Item className="py-2 d-flex justify-content-between">
      <h4>
        <strong>{film.title}</strong> - {film.release_date.slice(0, 4)}
      </h4>
      <Button variant="secondary" onClick={handleShow}>
        View More
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{film.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>Episode: {film.episode_id}</ListGroup.Item>
            <ListGroup.Item>Director: {film.director}</ListGroup.Item>
            <ListGroup.Item>Producer: {film.producer}</ListGroup.Item>
          </ListGroup>
        </Modal.Body>
      </Modal>
    </ListGroup.Item>
  );
}
export default Film;
