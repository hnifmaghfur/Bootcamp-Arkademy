import React, { Component } from "react";

class Home extends Component {
  state = {
    nama: "Hanif",
  };
  render() {
    const changeName = (param) => {
      this.setState({ nama: param });
    };
    return (
      <>
        <div> halo : {this.state.nama}</div>
        <button onClick={() => changeName("Maghfur")}>nama</button>
      </>
    );
  }
}

export default Home;
