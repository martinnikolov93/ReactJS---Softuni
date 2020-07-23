import React from 'react';

class TextInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: "" }
  }

  changeText = (event) => {
    this.setState({ text: event.target.value })
  }

  render() {
    return (
      <div>
        <span>Enter text: </span>
        <input type="text" onChange={this.changeText}></input>
        <span> Text from input: {this.state.text}</span>
      </div>
    )
  }
}

export default TextInput;
