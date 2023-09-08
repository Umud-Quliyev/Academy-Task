import React, { useEffect, useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";

function Detail() {
  const { userId } = useParams();

  const [userDetails, setUserDetails] = useState([]);
  const [userComments, setUserComments] = useState([]);
  const [commentsVisible, setCommentsVisible] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
      .then((res) => res.json())
      .then((data) => setUserDetails(data));

    fetch(`https://jsonplaceholder.typicode.com/posts/${userId}/comments`)
      .then((res) => res.json())
      .then((data) => setUserComments(data));
  }, [userId]);

  const toggleComments = () => {
    setCommentsVisible(!commentsVisible);
  };

  return (
    <>
      <Header />
      <Container className="mt-5 d-flex justify-content-center">
        <Row className="justify-content-center">
          <Col xs={12} md={3}>
            <Card>
              <Card.Img
                variant="top"
                src="https://cdn-icons-png.flaticon.com/512/219/219983.png"
              />
              <Card.Body>
                <Card.Title>{userDetails.title}</Card.Title>
                <Card.Text>{userDetails.body}</Card.Text>
                <Button variant="primary" onClick={toggleComments}>
                  {commentsVisible ? "Hide Comments" : "Show Comments"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {commentsVisible && (
        <Container className="mt-4 d-flex">
          {userComments.map((comment) => (
            <Card key={comment.id} className="m-2" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{comment.name}</Card.Title>
                <Card.Text>{comment.body}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Container>
      )}
    </>
  );
}

export default Detail;
