import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Post from "../Post/Post";

import Form from "react-bootstrap/Form";
import styles from "./header.module.css";
import { Col, Nav, Navbar, Row } from "react-bootstrap";

import { useDebounce } from "usehooks-ts";

function Header(props) {
  const [data, setData] = useState([]);
  const [inputText, setInputText] = useState("");
  const debouncedInputText = useDebounce(inputText, 500);

  const inputHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?limit=100")
      .then((res) => res.json())
      .then((info) => setData(info));
  }, []);

  useEffect(() => {
    const filteredData = data.filter((el) => {
      if (debouncedInputText === "") {
        return true;
      }
      return (
        el.title.toLowerCase().includes(debouncedInputText) ||
        el.body.toLowerCase().includes(debouncedInputText)
      );
    });
    props.onSearch(filteredData);
  }, [debouncedInputText, data, props]);

  return (
    <div>
      <Navbar expand="lg" className={styles.background}>
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              width={"65px"}
              src="https://cdn-icons-png.flaticon.com/512/87/87937.png"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="" href="/">
                Home
              </Nav.Link>
              <Nav.Link href="post">Post</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <div className="search">
                <Form.Control
                  id="outlined-basic"
                  onChange={inputHandler}
                  type="text"
                  placeholder="Search"
                />
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
