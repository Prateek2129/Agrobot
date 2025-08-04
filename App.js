import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Overview from './components/Overview';
import Sensors from './components/Sensors';
import AiDetection from './components/AiDetection';
import FieldMap from './components/FieldMap';
import styled from 'styled-components';

function App() {
  const [data, setData] = useState({});

  // Mock data for bot stats and field health
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('data.json'); // Or fetch data from an API
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <Router>
      <Container>
        <Navbar>
          <Link to="/">Overview</Link>
          <Link to="/sensors">Sensors</Link>
          <Link to="/ai-detection">AI Detection</Link>
          <Link to="/field-map">Field Map</Link>
        </Navbar>

        <MainContent>
          <Switch>
            <Route path="/" exact>
              <Overview data={data} />
            </Route>
            <Route path="/sensors">
              <Sensors />
            </Route>
            <Route path="/ai-detection">
              <AiDetection />
            </Route>
            <Route path="/field-map">
              <FieldMap />
            </Route>
          </Switch>
        </MainContent>
      </Container>
    </Router>
  );
}

const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const Navbar = styled.nav`
  display: flex;
  background-color: #333;
  padding: 10px;
  a {
    color: white;
    margin-right: 20px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const MainContent = styled.div`
  padding: 20px;
`;

export default App;
