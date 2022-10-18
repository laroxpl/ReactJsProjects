import React from "react";
import PrzekazywanieDanychKalkulator from "./PrzekazywanieDanychKalkulator";
class TemperaturaInput extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    this.props.onTemperatureChange(e.target.value);//przekazywanie danych w gore miejsce 1 z 3
  };

  render() {
    const scaleNames = {
      c: "Celsius",
      f: "Fahrenheit",
    };
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Podaj temperature w {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default TemperaturaInput;
