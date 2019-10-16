import React from "react";

class Alphacoders extends React.Component {
  render() {
    const myStyle = {
      width: 250,
      height: 200,
      cursor: "pointer"
    };
    return (
      <div>
        <img style={myStyle} src={this.props.data[1]} alt="alt" />
        <h3>{this.props.data[0]}</h3>
      </div>
    );
  }
}

export default Alphacoders;
