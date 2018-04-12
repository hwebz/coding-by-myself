import React, {Component} from 'react';

import Stars from './Stars.js';
import Button from './Button.js';
import Answer from './Answer.js';
import Numbers from './Numbers.js';

class Game extends Component {

	state = {
		selectedNumbers: [],
		numberOfStars: Math.floor(Math.random() * 9) + 1,
		usedNumbers: [],
		answerIsCorrect: null
	};

	selectNumber = (clickedNumber) => {
		if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) return;

		this.setState(prevState => ({
			selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
		}));
	}

	unselectNumber = (clickedNumber) => {
		debugger;
		console.log(this.state);
		this.setState(prevState => ({
			selectedNumbers: prevState.selectedNumbers.filter(number => number !== clickedNumber),
			answerIsCorrect: null
		}));
	}
	
	checkAnswer = () => {
		this.setState(prevState => ({
			answerIsCorrect: prevState.numberOfStars === prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
		}));
	}

	render() {
		const {selectedNumbers, numberOfStars, answerIsCorrect} = this.state;
		return(
			<div className="row text-center">
				<Stars numberOfStars={numberOfStars} />
				<Button selectedNumbers={selectedNumbers} checkAnswer={this.checkAnswer} answerIsCorrect={answerIsCorrect} />
				<Answer selectedNumbers={selectedNumbers} unselectNumber={this.unselectNumber} />
				<Numbers selectedNumbers={selectedNumbers} onNumberClicked={this.selectNumber} />
			</div>
		);
	}
}

export default Game;