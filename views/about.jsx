import React from "react";

class About extends React.Component {
  render() {
    const myStyle = {
      fontSize: 20,
      color: "#FF0000"
    };
    return (
      <div id="id">
        <h3 style={myStyle}>Dylan Thomas</h3>
        <h3>Do not go gentle into that good night</h3>
        <h3>Old age should burn and rave at close of day</h3>
        <h3>Rage Rage against the dying of the light</h3>
      </div>
    );
  }
}

export default About;
