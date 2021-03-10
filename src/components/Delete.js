import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Delete = () => {
	const history = useHistory();
	const [randomKey, setRandomKey] = useState('');
	const [password, setPassword] = useState('');
	const [canNotFetch, setCanNotFetch] = useState(false);
	const getRandomKey = (e) => {
		setRandomKey(e.target.value);
	};
	const getPassword = (e) => {
		setPassword(e.target.value);
	};
	const deleteData = async (e) => {
		let data = {
			secretKey: randomKey,
			password: password,
		};
		console.log(data);
		// let req = await fetch('http://localhost:3000/delete-message', {
		let req = await fetch('https://secret-message-service-app.herokuapp.com/delete-message', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		let res = await req.json();
		console.log(res);
		setCanNotFetch(res);
		// console.log()
		history.replace('/');
	};
	return (
		<div className='deletePage'>
			<div className='heading container'>
				<i className='fas fa-key'></i>
				<h1 className='h1'>Delete Message Here!!</h1>
			</div>
			<div className='card-component container mt-5'>
				<div className='row'>
					<div className='col col-sm-8 col-lg-6  offset-lg-3 offset-sm-2'>
						<div className='card'>
							<div className='card-body'>
								<div className='form-group'>
									<label htmlFor='randomKey'>Random Key :</label>
									<input
										type='randomKey'
										className='form-control'
										id='randomKey'
										name='randomKey'
										placeholder='secret Key'
										onChange={getRandomKey}
										value={randomKey}
										required
									/>
								</div>
								<div className='form-group'>
									<label htmlFor='randomKey'>Password :</label>
									<input
										type='password'
										className='form-control'
										id='password'
										name='password'
										placeholder='Password'
										onChange={getPassword}
										value={password}
										required
									/>
								</div>
								<button type='button' className='btn btn-block deleteBtn' onClick={deleteData}>
									Delete Message
								</button>
								{/* <p>{randomKey}</p>
								<p>{password}</p> */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Delete;
