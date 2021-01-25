import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is a multiple relationship?',
			answerOptions: [
				{ answerText: 'Working with two clients at the same time', isCorrect: false },
				{ answerText: 'Working with two different clients', isCorrect: false },
				{ answerText: 'Having two different relationships with one clients', isCorrect: true },
				{ answerText: 'Working with a client in the community and clinic settings', isCorrect: false },
			],
		},
		{
			questionText: 'A client gives you a bottle opener from their birthday party. What does the ethical code say you should do?',
			answerOptions: [
				{ answerText: 'Refuse the gift and send a letter home that forbids future gifting.', isCorrect: false },
				{ answerText: 'Politely decline and explain to them/ their parents the nature of your professional relationship.', isCorrect: true },
				{ answerText: 'Accept and use in front of them to make them feel good.', isCorrect: false },
				{ answerText: 'Throw it away immediately.', isCorrect: false },
			],
		},
		{
			questionText: 'What should you do if you are arrested for a minor marijuana charge?',
			answerOptions: [
				{ answerText: 'Report to BACB within 30 days', isCorrect: true },
				{ answerText: 'Provide 2 weeks notice to employer', isCorrect: false },
				{ answerText: 'Do not report; this is not a fireable offense and your credential with remain in tact', isCorrect: false },
				{ answerText: 'Report to BACB within 24 hours', isCorrect: false },
			],
		},
		{
			questionText: 'Which of the following is part of the RBT ethical code?',
			answerOptions: [
				{ answerText: 'Be compassionate for the less fortunate', isCorrect: false },
				{ answerText: 'Resolve all issues formally', isCorrect: false },
				{ answerText: 'If there is an issue, file a formal complaint immediately', isCorrect: false },
				{ answerText: 'Be truthful and honest', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
