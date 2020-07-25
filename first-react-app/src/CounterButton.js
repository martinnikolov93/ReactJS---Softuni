import React from 'react';
//import styles from './CounterButton.module.css'
import Button from '@material-ui/core/Button';

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
      <div>
        <Button onClick={this.increaseClicks} variant="contained" color="primary">
          Clicks {this.state.clicks}
        </Button>
        {/* <button className={styles.button} onClick={this.increaseClicks}>Clicks {this.state.clicks}</button> */}
      </div>
    )
  }
}

export default CounterButton;
