var React = require('react');

var About = React.createClass({
    render() {
        return(
            <div>
                <h3>About</h3>
                <p>
                    This application uses the following technologies
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Browserify</li>
                        <li>Bootstrap</li>
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports = About;