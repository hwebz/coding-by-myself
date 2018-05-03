var React = require('react');

var Home = React.createClass({
    getInitialState() {
        return {
            message: 'React'
        };  
    },
    handleClick() {
        var self = this;
        this.setState({
            message: self.state.message === 'React' ? 'React clicked!!!!' : 'React'
        });
    },
    render() {
        return(
            <div>
                <div className="jumbotron">
                    <h3 className="display-4">Management System</h3>
                    <p className="lead">React, React Router, and Flux for ultra-responsive web apps.</p>
                </div>
            </div>
        );
    }
});

module.exports = Home;