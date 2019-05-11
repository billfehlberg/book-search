import React from "react";
import  { Container, Col, Row } from "react-bootstrap";

function Results() {
  return (
        <Container>
            <Row className="justify-content-center">
                <Col>
                <h2>Saved and Searched Results Go Here</h2>
                <p>Search for and Save Books of Interest</p>
                </Col>
            </Row>
        </Container>
      )
    }

export default Results;