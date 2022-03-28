import React from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { CustomCard } from "../card/CustomCard";

export const Movielist = () => {
  return (
    <Row>
      <Col>
        <div className="filter d-flex justify-content-between py-3">
          <ButtonGroup aria-label="Basic example">
            <Button variant="warning">ALL</Button>
            <Button variant="secondary">HAPPY</Button>
            <Button variant="danger">SAD</Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Basic example">
            <Button variant="primary">GRID</Button>
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
