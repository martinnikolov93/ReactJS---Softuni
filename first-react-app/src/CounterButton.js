import React from 'react';
import styles from './CounterButton.module.css'

class CounterButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = { clicks: 0 }
  }

  increaseClicks = () => {
    this.setState({ clicks: this.state.clicks + 1 })
  }

  render() {
    return (
      <button className={styles.button} onClick={this.increaseClicks}>Clicks {this.state.clicks}</button>
    )
  }
}

export default CounterButton;
