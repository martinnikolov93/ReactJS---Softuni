import React from 'react'

import ControlledForm from './ControlledForm'
import UncontrolledForm from './UncontrolledForm'

class Forms extends React.Component {
    render() {
        return (
            <div>
                <h2>Controlled form</h2>
                <ControlledForm />
                <h2>Uncontrolled form</h2>
                <UncontrolledForm />
            </div>
        )
    }
}

export default Forms