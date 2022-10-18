import React from "react";
import WerdyktGotowania from "./WerdyktGotowania";
import TemperaturaInput from "./TemperaturaInput";

class PrzekazywanieDanychKalkulator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: "", scale: "c" };
  }

  handleCelsiusChange = (temperature) => {
    //przekazywanie danych w gore miesce 3 z 3
    this.setState({ scale: "c", temperature });
  };

  handleFahrenheitChange = (temperature) => {
    this.setState({ scale: "f", temperature });
  };

  render() {
    function toCelsius(fahrenheit) {
      return ((fahrenheit - 32) * 5) / 9;
    }

    function toFahrenheit(celsius) {
      return (celsius * 9) / 5 + 32;
    }

    function tryConvert(temperature, convert) {
      const input = parseFloat(temperature);
      if (Number.isNaN(input)) {
        return "";
      }
      const output = convert(input);
      const rounded = Math.round(output * 1000) / 1000;
      return rounded.toString();
    }
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperaturaInput
          scale="c"//przekazywanie danych w dol
          temperature={celsius}//przekazywanie danych w dol
          onTemperatureChange={this.handleCelsiusChange}//przekazywanie danych w gore miejsce 2 z 3
        />
        <TemperaturaInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <WerdyktGotowania celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
export default PrzekazywanieDanychKalkulator;