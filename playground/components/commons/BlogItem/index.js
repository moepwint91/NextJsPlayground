import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BlogItem({ coverPhoto, blogTitle, blogContent, onClick }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={coverPhoto} />
      <Card.Body>
        <Card.Title>{blogTitle}</Card.Title>
        <Card.Text>{blogContent}</Card.Text>
        <Button variant="primary" onClick={onClick}>
          Go Detail
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BlogItem;
