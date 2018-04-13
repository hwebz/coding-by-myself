import React, {Component} from 'react';

import Stars from './Stars.js';
import Button from './Button.js';
import Answer from './Answer.js';
import Numbers from './Numbers.js';

class Game extends Component {
	state = {
		numberOfStars: Math.floor(Math.random() * 9) + 1,
		selectedNumbers: [],
		answerIsCorrect: null,
		usedNumbers: [],
		redraws: 5
	};

	selectNumber = (number) => {
		if (this.state.selectedNumbers.indexOf(number) >= 0) return;
		this.setState({
			answerIsCorrect: null,
			selectedNumbers: this.state.selectedNumbers.concat(number)
		});
	};

	unselectNumber = (number) => {
		this.setState({
			answerIsCorrect: null,
			selectedNumbers: this.state.selectedNumbers.filter(num => num !== number)
		})
	};

	checkAnswer = () => {
		this.setState({
			answerIsCorrect: this.state.numberOfStars === this.state.selectedNumbers.reduce((acc, n) => acc + n, 0)
		})
	};

	acceptAnswer = () => {
		this.setState({
			usedNumbers: this.state.usedNumbers.concat(this.state.selectedNumbers),
			selectedNumbers: [],
			answerIsCorrect: null,
			numberOfStars: Math.floor(Math.random() * 9) + 1
		});
	};

	redraw = () => {
		if (this.state.redraws === 0) return;
		this.setState({
			numberOfStars: Math.floor(Math.random() * 9) + 1,
			answerIsCorrect: null,
			selectedNumbers: [],
			redraws: this.state.redraws - 1,
			usedNumbers: []
		})
	};

	render() {

		let {numberOfStars, selectedNumbers, answerIsCorrect, usedNumbers, redraws} = this.state;

		return(
			<div className="row">
				<Stars numberOfStars={numberOfStars} />
				<Button selectedNumbers={selectedNumbers} 
						redraws={redraws}
						checkAnswer={this.checkAnswer}
						acceptAnswer={this.acceptAnswer}
						redraw={this.redraw}
						answerIsCorrect={answerIsCorrect} />
				<Answer selectedNumbers={selectedNumbers}
						unselectNumber={this.unselectNumber} />
				<Numbers selectedNumbers={selectedNumbers}
						selectNumber={this.selectNumber}
						usedNumbers={usedNumbers} />
			</div>
		);
	}
}

export default Game;