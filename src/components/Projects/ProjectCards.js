import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import replit from '../../Assets/Replit.svg'
const ProjectCards = ({ title, description, links }) => {
  return (
    <Card className="project-card-view">
      {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" /> */}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>
        {links.map(link => <Button variant="primary" href={link?.link} target="_blank">
          <img src={replit} alt="replit logo"/> &nbsp;
          {link?.title}
        </Button>)}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
