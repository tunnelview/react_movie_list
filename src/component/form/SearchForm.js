import React, { useState } from "react";
// import React from "react";
import { fetchMovie } from "../../helpers/axiosHelper";
import { Button, Col, Form, Row } from "react-bootstrap";
import { CustomCard } from "../card/CustomCard";

export const SearchForm = () => {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState();

  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearch(value);
    // console.log(value);
  };

  const handleOnsubmit = async (e) => {
    e.preventDefault();
    // alert("got the search value, now go get movie from api");

    const movie = await fetchMovie(search);
    setMovie(movie.data);
    console.log(movie);
  };

  return (
    <>
      <Form onSubmit={handleOnsubmit}>
        <Row>
          <Col>
            <Form.Control
              placeholder="Search..."
              onChange={handleOnChange}
              required
            />

            <Button variant="warning" type="submit">
              Search{" "}
            </Button>
          </Col>
        </Row>
      </Form>
      <Row>
        <Col className="d-flex justify-content-center">
          {movie?.imdbID && <CustomCard movie={movie} />}
          {/* <CustomCard /> don't need this custom card*/}
        </Col>
      </Row>
    </>
  );
};
