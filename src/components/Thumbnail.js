import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const Thumbnail = function (props) {
  const {
    link, image, title, description,
  } = props;
  return (
    <Card className="project-card">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <a href={link}><Button variant="primary">Learn more</Button></a>
      </Card.Body>
    </Card>
  );
};

Thumbnail.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Thumbnail;
