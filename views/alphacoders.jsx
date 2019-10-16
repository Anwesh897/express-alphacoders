import React from "react";

class Alphacoders extends React.Component {
  render() {
    const myStyle = {
      width: 1000,
      height: 850
    };
    return (
      <div>
        <img style={myStyle} src={this.props.data} alt="" />
      </div>
    );
  }
}

export default Alphacoders;
