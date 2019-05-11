import React from "react";
import  { Container, Col, Row } from "react-bootstrap";

function Title() {
  return (
        <Container>
            <Row className="justify-content-center">
                <Col>
                <h2>(React) Google Book Search</h2>
                <p>Search for and Save Books of Interest</p>
                </Col>
            </Row>
        </Container>
      )
    }

export default Title;