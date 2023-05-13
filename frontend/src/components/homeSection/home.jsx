import React from 'react';
import './home.css';
import { Stack, Typography, Box } from '@mui/material';
import CustomButton from '../../layout/customButton';
const Home = () => {
	return (
		<div
			className="home com"
			id="home">
			<Stack
				spacing={4}
				mt={10}
				mb={15}
				direction="row"
				alignItems="center
            ">
				<Stack
					spacing={6}
					paddingTop={6}
					className="left"
					sx={{ width: '40%' }}>
					<Stack
						spacing={3}
						className="text">
						<Typography
							variant="h2"
							sx={{
								fontSize: '3rem',
								fontWeight: '600',
								color: 'var(--text-main-color)',
							}}>
							Healthcare Solutions for a Better Life
						</Typography>
						<Typography
							variant="body1"
							lineHeight={1.8}>
							<span className="logoText">The clinic</span> provides parctical
							solutions and resources to help individuals improve their health
							and well-being. <span className="logoText">The clinic</span> also
							offer information and guidance on how to make positive changes in
							various aspectes of life
						</Typography>
					</Stack>
					<Box className="request">
						<CustomButton
							text="Request an Appointment"
							classes="requestBtn"
						/>
						<Typography
							variant="subtitle1"
							sx={{ color: 'var(--gray)' }}>
							Request an Appointment with our professional doctors.
						</Typography>
					</Box>
				</Stack>
				<Stack
					className="right"
					sx={{ width: '60%' }}>
					<img
						src="https://img.freepik.com/free-photo/happy-doctor-holding-clipboard-with-patients_1098-2176.jpg?w=1060&t=st=1683933537~exp=1683934137~hmac=ea9e1a2aa0f6cf5f18c4daf2ef5743839171d6386551ee6d5322bae3f566c7b5"
						alt="Doctor and patients"
					/>
				</Stack>
			</Stack>
		</div>
	);
};

export default Home;
