import React from "react";
import LineChartComponent from './components/LineChartComponent';
import BarcharComponent from './components/BarChartComponent';
import './styles/styles.css';

function App() {
  return (
    <div className="App">
      <h1>Visualización de Datos Gráficos</h1>
      <div className="recharts-wrapper">
        <h2>Gráfico de Líneas</h2>
        <LineChartComponent />
      </div>
      <div className='recharts-wrapper'>
        <h2>Gráfico de barras</h2>
        <BarcharComponent />
      </div>
    </div>
  );
};

export default App;
