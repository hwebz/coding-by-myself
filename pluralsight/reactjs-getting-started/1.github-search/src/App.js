import React, { Component } from 'react';
import data from './data.js';

import Card from './Card.js';
import Form from './Form.js'

class App extends Component {

  state = {
    cards: [
      {
        name: "Paul O'shannessy",
        avatar_url: "https://avatars.githubusercontent.com/u/8445?v=3",
        company: "Facebook"
      },
      {
        name: "Ben Alpert",
        avatar_url: "https://avatars.githubusercontent.com/u/6820?v=3",
        company: "Facebook"
      }
    ]
  }

  addNewCard = (cardInfo) => {
    this.setState({
      cards: this.state.cards.concat(cardInfo)
    })
  };

  render() {

    const cards = this.state.cards.map((user, index) => (
        <Card user={user} key={index} />
    ));

    return (
      <div className="container">
        <Form onSubmit={this.addNewCard} />
        <ul className="list-unstyled mt-3">
          {cards}
        </ul>
      </div>
    );
  }
}

export default App;
