// src/components/MyComponent.js
import React, { useEffect, useState } from 'react';
import mockService from './MockService';

const MyComponent = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    mockService.getData().then(response => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="my-component">
      <h1>My React App</h1>
      <p>Data from mock service: {data}</p>
    </div>
  );
};

export default MyComponent;