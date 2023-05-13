import React from 'react';
import './header.css';
import { Stack, Typography } from '@mui/material';
import CustomButton from '../../layout/customButton';
const Header = () => {
	return (
		<header>
			<Stack
				direction="row"
				className="headerContent com"
				justifyContent="space-between"
				alignItems="center"
				paddingY={3}>
				<div className="logo">
					<Typography
						variant="h1"
						fontSize={'2.5rem'}
						fontWeight={'bold'}>
						<a href="/">The Clinic</a>
					</Typography>
				</div>
				<ul className="links">
					<li>
						<a href="#home">Home</a>
					</li>
					<li>
						<a href="/">How it works</a>
					</li>
					<li>
						<a href="/">Solution</a>
					</li>
					<li>
						<a href="/">Contact</a>
					</li>
				</ul>
				<Stack
					direction="row"
					spacing={2}
					className="loginSignup">
					<CustomButton text="Login" />
					<CustomButton text="Sign up" />
				</Stack>
			</Stack>
		</header>
	);
};

export default Header;
