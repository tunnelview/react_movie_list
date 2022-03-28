import React from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { CustomCard } from "../card/CustomCard";

export const Movielist = () => {
  return (
    <Row>
      <Col>
        <div className="filter">
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">ALL</Button>
            <Button variant="secondary">HAPPY</Button>
            <Button variant="secondary">SAD</Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary">GRID</Button>
            <Button variant="secondary">LIST</Button>
          </ButtonGroup>
        </div>
        <div className="d-flex justify-content-between flex-wrap"></div>
        <CustomCard />
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </Col>
    </Row>
  );
};
