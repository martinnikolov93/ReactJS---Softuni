import React from 'react';
import AppContext from './AppContext';
import styles from './ConditionalRenderer.module.css'

class ConditionalRenderer extends React.Component {

  static contextType = AppContext

  constructor(props) {
    super(props)
    this.state = { showContent: true, buttonText: "Hide" }
  }

  changeVisibility = () => {
    this.setState({ showContent: !this.state.showContent })

    if (this.state.showContent){
      this.setState({ buttonText: "Show" })
    } else {
      this.setState({ buttonText: "Hide" })
    }
  }

  render() {

    return (
      <div>
        <button className={styles.button} onClick={this.changeVisibility}>{this.state.buttonText}</button>
        {this.state.showContent && 
          <div>
            Text will be hidden if above button is clicked
            <div>{this.context} - this value is coming from context without usage of props</div>
          </div>   
        }
      </div>
    )

  }
}

export default ConditionalRenderer;
