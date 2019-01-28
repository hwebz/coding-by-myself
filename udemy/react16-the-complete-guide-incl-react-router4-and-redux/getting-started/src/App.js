import React, { Component } from 'react';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Max", age: 23},
      {name: "Micheal", age: 43},
      {name: "John", age: 33}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchName = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 23},
        {name: "Micheal", age: 43},
        {name: 'Jack', age: 14}
      ],
      showPersons: !this.state.showPersons
    });
  }

  nameChangedHandler = (event, index) => {
    const persons = [...this.state.persons];
    persons[index].name = event.target.value;
    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  render() {
    const styles = {
      color: 'red',
      border: 'none'  
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            <Person key={index}
                    name={person.name} 
                    age={person.age} 
                    clicked={() => this.deletePersonHandler(index)}
                    changed={(event) => this.nameChangedHandler(event, index)}>My Name: {person.name}</Person>
          ))}
        </div>
      );
    }

    return (
      <div className="App">
        <button style={styles} onClick={() => this.switchName('You')}>Switch</button>
        {persons}
      </div>
    );
  }
}

export default App;
