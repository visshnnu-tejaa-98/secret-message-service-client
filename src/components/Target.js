import React, { useState } from 'react';
const Target = () => {
	const [secretMessage, setSecretMessage] = useState('');
	let getData = async () => {
		console.log(window.location.href);
		let url = window.location.href;
		let id = url.split('rs=')[1];
		let response = await fetch(`http://localhost:3000/message-by-id/${id}`);
		let data = await response.json();
		setSecretMessage(data.result);
	};
	getData();
	return (
		<div className='target container mt-5 '>
			<h1 className=''>
				Here is your <span>Secret!!!</span>
			</h1>
			<div className='d-flex justify-content-center'>
				<div className='card target-card mt-5'>
					<div className='card-body'>{secretMessage}</div>
				</div>
			</div>
		</div>
	);
};

export default Target;
