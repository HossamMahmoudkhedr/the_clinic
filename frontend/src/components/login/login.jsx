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

	const handleChange = (event) => {
		setValue(event.target.value);
	};
	return (
		<Box className="login">
			<Typography
				variant="h2"
				color={'var(--blue)'}>
				Login
			</Typography>
			<form
				action="../../../../backend/log.php"
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
							restProps={{ name: 'user_name', helperText: userHelper }}
						/>
					</Grid>
					<Grid
						item
						xs={12}>
						<InputField
							error={passError}
							type={'password'}
							labelName={'Password'}
							restProps={{ name: 'password', helperText: passHelper }}
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
							onChange={handleChange}>
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
