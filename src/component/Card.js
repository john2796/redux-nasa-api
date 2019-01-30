import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

const NasaCard = ({ nasa }) => {
  return (
    <>
      <Card>
        <CardImg
          top
          width="100%"
          src={nasa && nasa.url}
          alt={nasa && nasa.title}
        />
        <CardBody>
          <CardTitle>{nasa && nasa.title}</CardTitle>
          <CardSubtitle>{nasa && nasa.copyright}</CardSubtitle>
          <CardText>{nasa && nasa.explanation}</CardText>
        </CardBody>
      </Card>
    </>
  );
};

export default NasaCard;
