import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

class HelloWorld extends Component {
    render() {
        return(
            <h1>Hello World!</h1>
        )
    }
}

export default hot(module)(HelloWorld)