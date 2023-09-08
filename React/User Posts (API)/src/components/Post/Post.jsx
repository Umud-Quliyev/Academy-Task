import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { Button, Card, Col, Container, Pagination, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./post.module.css";

function Post() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 12;

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?limit=100")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  useEffect(() => {
    setSearchResults(posts);
  }, [posts]);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = searchResults.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (filteredData) => {
    setSearchResults(filteredData);
    setCurrentPage(1);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />

      <Container className="mt-5">
        <Row className="justify-content-center">
          {currentPost.map((info) => (
            <Col xs={3} key={info.id} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
                />
                <Card.Body>
                  <Card.Title>{info.title.slice(0, 20)}</Card.Title>
                  <Card.Text>{info.body.slice(0, 130)}</Card.Text>
                  <Link to={`/detail/${info.id}`}>
                    <Button variant="primary">User Detail</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <div className={styles.pagination}>
        <a href="#" onClick={() => paginate(currentPage - 1)}>
          &laquo;
        </a>
        {Array.from({ length: Math.ceil(posts.length / postPerPage) }).map(
          (_, index) => (
            <a
              href="#"
              key={index}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? "active" : ""}
            >
              {index + 1}
            </a>
          )
        )}
        <a href="#" onClick={() => paginate(currentPage + 1)}>
          &raquo;
        </a>
      </div>
    </div>
  );
}

export default Post;
