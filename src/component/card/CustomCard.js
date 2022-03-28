import React from "react";
import { Button, Card } from "react-bootstrap";

export const CustomCard = ({ movie }) => {
  return (
    <Card style={{ width: "18rem" }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Img variant="top" src={movie?.Poster} />
      <Card.Body>
        <Card.Title>{movie?.Title}</Card.Title>
        <Card.Title>Rating: {movie?.imdbRating}</Card.Title>

        {/* <Card.Text>
          This is my react project. This text is for sample purpose only
        </Card.Text> */}

        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};
