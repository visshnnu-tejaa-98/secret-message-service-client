import React, { useState } from 'react';

const Target = () => {
	const [secretMessage, setSecretMessage] = useState('');
	const [isMessagePresent, setIsMessagePresent] = useState(true);
	let getData = async () => {
		console.log(window.location.href);
		let url = window.location.href;
		let id = url.split('rs=')[1];
		console.log(id);
		// let response = await fetch(`http://localhost:3000/message-by-id/${id}`);
		let response = await fetch(
			`https://secret-message-service-app.herokuapp.com/message-by-id/${id}`
		);
		// let response = await fetch(
		// 	`https://secret-message-service-app.herokuapp.com/message-by-id/${id}`
		// );
		let data = await response.json();
		console.log(data.result);
		if (data.result === undefined) {
			setIsMessagePresent(false);
			console.log('unable to fetch');
		} else {
			setSecretMessage(data.result);
			setIsMessagePresent(true);
		}
	};
	getData();
	return (
		<div className='target container mt-5 '>
			<h1 className=''>
				Here is your <span>Secret!!!</span>
			</h1>
			<div className='d-flex justify-content-center'>
				<div className='card target-card mt-5'>
					<div className='card-body'>
						{secretMessage && isMessagePresent
							? secretMessage
							: secretMessage && !isMessagePresent
							? 'Unable to fetch'
							: 'Loading...'}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Target;
