import React from "react";
class ObslugaZdarzen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // Poniższe wiązanie jest niezbędne do prawidłowego przekazania `this` przy wywołaniu funkcji
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
  // ? = lepszy if bo mniej kodu. lewo true - prawo false
}

export default ObslugaZdarzen;
