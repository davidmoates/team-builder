import React, { useState } from 'react';
import './App.css';
import Forms from './Forms';
import Cards from './Cards';

function App() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    role:""
  });
  return(<Forms formValues={formValues} setFormValues={setFormValues} />, <Cards formValues={formValues}/>)
}

export default App;
