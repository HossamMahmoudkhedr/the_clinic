import React, { useState } from 'react';
import {
	Box,
	FormControlLabel,
	FormLabel,
	Grid,
	Radio,
	RadioGroup,
	Typography,
} from '@mui/material';
import './login.css';
import InputField from '../../layout/inputField';
import CustomButton from '../../layout/customButton';

const LoginPage = () => {
	const [value, setValue] = useState('');
	const [nameError, setNameError] = useState(false);
	const [userHelper, setUserHelper] = useState('');
	const [passError, setPassError] = useState(false);
	const [passHelper, setPassHelper] = useState('');
	// const [nameError, setNameError] = useState();

	const handleChangee = (event) => {
		setValue(event.target.value);
	};

	const [formData, setFormData] = useState({
		name: '',
		password: '',
		message: '',
	});

	const handleSubmit = (event) => {
		event.preventDefault();

		fetch('backend/log.php', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formData),
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.error(error));
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};
	return (
		<Box className="login">
			<Typography
				variant="h2"
				color={'var(--blue)'}>
				Login
			</Typography>
			<form
<<<<<<< HEAD
				action=""
=======
				onSubmit={handleSubmit}
				action=""
>>>>>>> c56af2244b717fa148fa02025a84405b28dce0b7
				method="POST">
				<Grid
					container
					spacing={4}>
					<Grid
						item
						xs={12}>
						<InputField
							type={'text'}
							error={nameError}
							labelName={'User Name'}
							restProps={{
								name: 'user_name',
								helperText: userHelper,
								onchange: handleChange,
							}}
						/>
					</Grid>
					<Grid
						item
						xs={12}>
						<InputField
							error={passError}
							type={'password'}
							labelName={'Password'}
							restProps={{
								name: 'password',
								helperText: passHelper,
								onchange: handleChange,
							}}
						/>
					</Grid>
					<Grid
						item
						xs={12}>
						<RadioGroup
							aria-labelledby="demo-controlled-radio-buttons-group"
							sx={{ flexDirection: 'row' }}
							dir="row"
							name="type"
							value={value}
							onChange={handleChangee}>
							<FormControlLabel
								value="patient"
								control={<Radio />}
								label="Patient"
							/>
							<FormControlLabel
								value="doctor"
								control={<Radio />}
								label="Doctor"
							/>
						</RadioGroup>
					</Grid>
					<Grid
						item
						xs={12}>
						<CustomButton
							classes={'loginBtn'}
							resprops={{ type: 'submit', value: 'send' }}
							text={'Submit'}></CustomButton>
					</Grid>
				</Grid>
			</form>
		</Box>
	);
};

export default LoginPage;
