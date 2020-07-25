import React from 'react'

class DataIterator extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => response.json())
            .then((myJson) => this.setState({ data: myJson }))
            .catch((myErr) => console.error(myErr));
    }

    render() {
        return (
            <div>
                {
                    this.state.data.slice(0, 10).map(
                        function (item) {
                            return ([
                                <div key={item.id + '-title'}>{item.title}</div>,
                                <img key={item.id + '-image'} src={item.url} alt={item.title} />
                            ])
                        }
                    )
                }
            </div>
        )
    }
}

export default DataIterator