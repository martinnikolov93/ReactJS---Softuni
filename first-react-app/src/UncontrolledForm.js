import React from 'react'

import styles from './buttons.module.css'

class UncontrolledForm extends React.Component {
    constructor(props) {
        super(props)

        this.emailInput = React.createRef()
        this.passwordInput = React.createRef()
        this.rePasswordInput = React.createRef()
    }

    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.emailInput.current.value)
        // some ajax request
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label htmlFor='emailUncon'>Email: </label>
                        <input id='emailUncon' type="email" ref={this.emailInput} />
                    </div>
                    <div>
                        <label htmlFor='passwordUncon'>Password: </label>
                        <input id='passwordUncon' type="password" ref={this.passwordInput} />
                    </div>
                    <div>
                        <label htmlFor='rePasswordUncon'>Re-Password: </label>
                        <input id='rePasswordUncon' type="password" ref={this.rePasswordInput} />
                    </div>

                    <button className={styles.button}>Submit</button>
                </form>
            </div>
        )
    }
}

export default UncontrolledForm