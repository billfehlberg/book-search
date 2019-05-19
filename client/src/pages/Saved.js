import React, { Component } from "react";
import { List, ListItem } from "../components/List";
import Title from "../components/Title";
import API from "../utils/API";
import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import DeleteBtn from "../components/DeleteBtn";

import "./Saved.css";

class Saved extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    description: "",
    image: "",
    link: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", authors: "", description: "", image: "", link: "" })
      )
      .catch(err => console.log(err));
  };


  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Title></Title>
          </Col>
        <Row>
          <Col>
          {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title}
                      </strong>
                    </Link>
                    <p>by {book.authors}</p>
                    <p>{book.description}</p>
                    <img
                src={book.image}
                alt={book.title}
                className="book-list__thumbnail img-thumbnail img-fluid w-100"
              />
                    <p>{book.link}</p>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}

          </Col>
        </Row>
        </Row>
      </Container>
    );
  }
}

export default Saved;

