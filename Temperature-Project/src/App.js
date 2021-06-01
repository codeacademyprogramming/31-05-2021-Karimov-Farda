import logo from './logo.svg';
import './App.css';
import * as React from 'react'
import { getTemperature } from './modules/temperature-app/actions';
import { useDispatch } from 'react-redux';
import { MainPage } from './modules/temperature-app/components/index'
function App() {
  const dispatch = useDispatch()
  React.useEffect(() => {
    getTemperature()(dispatch)
  },[dispatch])
  return (
    <MainPage />
  );
}

export default App;
