import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const Thumbnail = function (props) {
  const {
    link, image, title, description,
  } = props;
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Card className="project-card">
        {image && <Card.Img variant="top" src={image} />}
        <Card.Body>
          <Card.Title className="card-title">{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
};

Thumbnail.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string,
};

Thumbnail.defaultProps = {
  image: '',
};

export default Thumbnail;
