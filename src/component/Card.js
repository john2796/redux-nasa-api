import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const NasaCard = ({ nasa }) => {
  return (
    <>
      <Card>
        <CardImg top width="100%" src={nasa.url} alt={nasa.title} />
        <CardBody>
          <CardTitle>{nasa.title}</CardTitle>
          <CardSubtitle>{nasa.copyright}</CardSubtitle>
          <CardText>{nasa.explanation}</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </>
  );
};

export default NasaCard;
