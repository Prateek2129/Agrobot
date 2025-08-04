import React from 'react';
import { Card, Grid } from 'styled-components';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Overview = ({ data }) => {
  return (
    <div>
      <h1>Overview</h1>
      <Grid>
        <Card>
          <h3>Temperature</h3>
          <p>{data.temperature} °C</p>
        </Card>
        <Card>
          <h3>Battery Level</h3>
          <p>{data.battery_level} %</p>
        </Card>
        <Card>
          <h3>Signal Strength</h3>
          <p>{data.signal_strength}</p>
        </Card>
        <Card>
          <h3>Field Health</h3>
          <p>{data.field_health} %</p>
        </Card>
      </Grid>
      <div>
        <h2>Bot Position</h2>
        <p>{data.bot_position}</p>
      </div>

      <LineChart width={600} height={300} data={data.temperatureData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

const Grid = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const Card = styled.div`
  background: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  width: 200px;
`;

export default Overview;
