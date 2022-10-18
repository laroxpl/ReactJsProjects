import React from "react";

class RenderowanieClock extends React.Component {
  constructor(props) {
    // 🔴 Jeszcze nie możesz używać `this`
    super(props);
    // ✅ Teraz już można
    this.state = { date: new Date() };
  }

  //raz na 1000ms (1 sekunde) odswieza zegar
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  tick = () => {
    this.setState({ date: new Date() });  //setState - odpowiada za renderowanie elementu na stronie (ma render w sobie)
  };
  componentWillUnmount() {clearInterval(this.timerID);}
  render() {
    return (
      <div>
        <h2>Aktualny czas: {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default RenderowanieClock;
