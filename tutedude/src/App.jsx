import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

import ClassCounter from './tasks/ClassCounter';
import FunctionalCounter from './tasks/FunctionalCounter';
import TodoApp from './tasks/TodoApp';
import TodoAppRefined from './tasks/TodoAppRefined';

import Home from './tasks/pages/Home'; // This will now be used at /home
const FormPage = lazy(() => import('./tasks/pages/FormPage'));
const About = lazy(() => import('./tasks/pages/About'));

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <Navbar bg="primary" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/home">React Projects</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/class">Class Counter</Nav.Link>
                <Nav.Link as={Link} to="/functional">Functional Counter</Nav.Link>
                <Nav.Link as={Link} to="/todo">Todo</Nav.Link>
                <Nav.Link as={Link} to="/todo-refined">Todo Refined</Nav.Link>

                <NavDropdown title="Router Functionality" id="router-dropdown">
                  <NavDropdown.Item as={Link} to="/home">Home</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/form">Form</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/about">About</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Main Content */}
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
          <div className="card shadow p-4" style={{ width: '100%', maxWidth: '500px' }}>
            <Suspense fallback={<div className="text-center">Loading...</div>}>
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/form" element={<FormPage />} />
                <Route path="/about" element={<About />} />

                <Route path="/class" element={<ClassCounter />} />
                <Route path="/functional" element={<FunctionalCounter />} />
                <Route path="/todo" element={<TodoApp />} />
                <Route path="/todo-refined" element={<TodoAppRefined />} />

                {/* Catch-all fallback route */}
                <Route
                  path="*"
                  element={
                    <div>
                      <h5 className="text-center mb-4">Welcome! Choose a project:</h5>
                      <ul className="list-group">
                        <li className="list-group-item">
                          <Link to="/class" className="text-decoration-none">Class Counter</Link>
                        </li>
                        <li className="list-group-item">
                          <Link to="/functional" className="text-decoration-none">Functional Counter</Link>
                        </li>
                        <li className="list-group-item">
                          <Link to="/todo" className="text-decoration-none">To-Do App</Link>
                        </li>
                        <li className="list-group-item">
                          <Link to="/todo-refined" className="text-decoration-none">To-Do Refined</Link>
                        </li>
                        <li className="list-group-item">
                          <Link to="/home" className="text-decoration-none">Home Page</Link>
                        </li>
                      </ul>
                    </div>
                  }
                />
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
