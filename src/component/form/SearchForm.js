import React, { useState } from "react";
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { CustomCard } from "../card/CustomCard";

export const SearchForm = () => {
  const [search, setSearch] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;
    console.log(value);
  };

  const handleOnsubmit = (e) => {
    e.preventDefault();

    alert("got the search value, now go get movie from api");
  };

  return (
    <>
      <Form>
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
          <CustomCard />
        </Col>
      </Row>
    </>
  );
};
