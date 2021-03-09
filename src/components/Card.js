import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Card = () => {
	// states
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState('');
	const [isSending, setIsSending] = useState(false);
	const [Default, setDefault] = useState(false);
	const [randomKey, setRandomKey] = useState(
		Math.random().toString(32).toUpperCase().split('.')[1]
	);

	// let randomKey = Math.random().toString(32).toUpperCase().split('.')[1];

	// functions
	const getEmail = (e) => {
		setEmail(e.target.value);
	};
	const getPassword = (e) => {
		setPassword(e.target.value);
	};
	const getMessage = (e) => {
		setMessage(e.target.value);
	};

	const getEntireData = async (e) => {
		e.preventDefault();
		setIsSending(true);
		setDefault(true);

		// frontend url
		// let targetUrl = 'http://localhost:3001/target';
		// let targetUrl = 'http://localhost:3001/target';
		let targetUrl = 'https://visshnnu-secret-message-service-app.netlify.app/target';
		console.log(randomKey);
		console.log(targetUrl);
		let data = {
			password,
			mailMessage: message,
			targetMail: email,
			randomKey,
			targetUrl,
		};
		console.log(data);
		// await fetch('http://localhost:3000/create-message', {
		await fetch('https://secret-message-service-app.herokuapp.com/create-message', {
			// await fetch('https://secret-message-service-app.herokuapp.com/create-message', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}).then((res) => {
			console.log('Message Sent!!');
			setIsSending(false);
			setTimeout(() => {
				setDefault(false);
			}, 3000);
		});
	};
	return (
		<div className='card-component container'>
			<div className='row'>
				<div className='col col-sm-8 col-lg-6  offset-lg-3 offset-sm-2'>
					<div className='card'>
						<div className='card-body'>
							<form action='' onSubmit={getEntireData}>
								<div className='row'>
									<div className='col col-6'>
										<div className='form-group'>
											<label htmlFor='targetMail'>Target Email:</label>
											<input
												type='email'
												className='form-control'
												id='targetMail'
												name='targetMail'
												placeholder='To Email Id'
												value={email}
												onChange={getEmail}
												required
											/>
										</div>
									</div>
									<div className='col col-6'>
										<div className='form-group'>
											<label htmlFor='password'>Password:</label>
											<input
												type='password'
												className='form-control'
												id='password'
												name='password'
												placeholder='password'
												onChange={getPassword}
												required
											/>
										</div>
									</div>
								</div>
								<div className='form-group'>
									<label htmlFor='randomKey'>Secret Key:</label>
									<input
										type='text'
										className='form-control'
										id='randomKey'
										name='randomKey'
										value={randomKey}
										readOnly
									/>
									<small className='smallTag'>Copy random key to delete the secret message *</small>
								</div>

								<div className='form-group'>
									<label htmlFor='mailMessage'>Secret Message:</label>
									<textarea
										className='form-control'
										name='mailMessage'
										id='mailMessage'
										rows='4'
										placeholder='Your Secret Message'
										onChange={getMessage}
									></textarea>
								</div>
								<div className='row'>
									<div className='col col-6'>
										<Link to='./delete'>
											<button type='button' className='btn btn-block deleteBtn'>
												Delete Message
											</button>
										</Link>
									</div>
									<div className='col col-6'>
										<button type='submit' className='btn submitBtn btn-block '>
											{isSending ? 'Sending' : Default ? 'Message Sent' : 'Send Message'}
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
