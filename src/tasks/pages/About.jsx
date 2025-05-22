import React from 'react';
import { Card } from 'react-bootstrap';

const About = () => (
  <Card>
    <Card.Body>
      <Card.Title>About This App</Card.Title>
      <Card.Text>
        This is a simple React Single Page Application (SPA) using React Router and Bootstrap.
        It includes lazy loading, routing, and form validation.
      </Card.Text>
    </Card.Body>
  </Card>
);

export default About;
