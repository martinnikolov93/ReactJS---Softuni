import React from 'react'

import buttonStyles from './buttons.module.css'
import formStyles from './forms.module.css'

class ControlledForm extends React.Component {
    state = {
        email: '',
        emailErrors: false,
        password: '',
        passwordErrors: false,
        rePassword: '',
        rePasswordErrors: false
    }

    isEmptyObject = (obj) => {
        return !!obj && Object.keys(obj).length === 0 && obj.constructor === Object;
    }

    passwordValidator = (password) => {
        let passwordErrors = {}

        if (!password) {
            passwordErrors.required = 'Password is required.';
        }

        if (password.length < 5) {
            passwordErrors.length = 'Password must be at least 5 characters.';
        }

        if (this.isEmptyObject(passwordErrors)) {
            return false
        }

        return passwordErrors
    }

    emailValidator = (email) => {
        let emailErrors = {}

        if (!email) {
            emailErrors.required = 'Email is required.';
        }

        if (this.isEmptyObject(emailErrors)) {
            return false
        }

        return emailErrors
    }

    rePasswordValidator = (rePassword) => {
        const password = this.state.password

        let rePasswordErrors = {}

        if (password !== rePassword) {
            rePasswordErrors.doesNotMatch = 'Passwords does not match.';
        }

        if (this.isEmptyObject(rePasswordErrors)) {
            return false
        }

        return rePasswordErrors
    }

    submitHandler = (event) => {
        event.preventDefault()

        let { email, password, rePassword } = this.state

        const emailErrors = this.emailValidator(email)
        const passwordErrors = this.passwordValidator(password)
        const rePasswordErrors = this.rePasswordValidator(rePassword)

        this.setState({emailErrors, passwordErrors, rePasswordErrors})

        if (emailErrors || passwordErrors || rePasswordErrors){
            console.log('form wont be submited')
            return
        }

        // some ajax request

        console.log('form was submited')
    }

    changeHandlerEmail = (event) => {
        const email = event.target.value
        const emailErrors = this.emailValidator(email)
        this.setState({ email: event.target.value, emailErrors: emailErrors })
    }

    changeHandlerPassword = (event) => {
        const password = event.target.value
        const passwordErrors = this.passwordValidator(password)
        this.setState({ password: password, passwordErrors: passwordErrors })
    }


    changeHandlerRePassword = (event) => {
        const rePassword = event.target.value
        const rePasswordErrors = this.rePasswordValidator(rePassword)
        this.setState({ rePassword: rePassword, rePasswordErrors: rePasswordErrors })
    }

    render() {
        let { email, emailErrors, password, passwordErrors, rePassword, rePasswordErrors } = this.state

        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label htmlFor='emailCon'>Email: </label>
                        <input className={emailErrors ? formStyles.error : ""} id='emailCon' type="email" value={email} onChange={this.changeHandlerEmail} />
                        <div className={formStyles.errorText}>{emailErrors ? Object.values(emailErrors)[0] : null}</div>
                    </div>
                    <div>
                        <label htmlFor='passwordCon'>Password: </label>
                        <input className={passwordErrors ? formStyles.error : ""} id='passwordCon' type="password" value={password} onChange={this.changeHandlerPassword} />
                        <div className={formStyles.errorText}>{passwordErrors ? Object.values(passwordErrors)[0] : null}</div>
                    </div>
                    <div>
                        <label htmlFor='rePasswordCon'>Re-Password: </label>
                        <input className={rePasswordErrors ? formStyles.error : ""} id='rePasswordCon' type="password" value={rePassword} onChange={this.changeHandlerRePassword} />
                        <div className={formStyles.errorText}>{rePasswordErrors ? Object.values(rePasswordErrors)[0] : null}</div>
                    </div>
                    <button className={buttonStyles.button}>Submit</button>
                </form>
            </div>
        )
    }
}

export default ControlledForm