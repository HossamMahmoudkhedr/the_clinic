import { Stack, Typography } from '@mui/material';
import React from 'react';
import './footer.css';
const Footer = () => {
	return (
		<footer>
			<Stack
				spacing={5}
				direction={'row'}
				justifyContent={'space-between'}>
				<div className="logo">
					<Typography
						variant="h1"
						fontSize={'2.5rem'}
						color="var(--blue)"
						fontWeight={'bold'}>
						<a href="/">The Clinic</a>
					</Typography>
				</div>
				<div className="links">
					<Typography
						variant="h5"
						fontWeight={'bold'}
						gutterBottom={4}>
						<a href="/">Navigate</a>
					</Typography>
					<ul>
						<li>Home</li>
						<li>How it works</li>
						<li>Solutions</li>
						<li>Contact</li>
					</ul>
				</div>
				<div className="links">
					<Typography
						variant="h5"
						fontWeight={'bold'}
						gutterBottom={4}>
						<a href="/">Support Us</a>
					</Typography>
					<ul>
						<li>FAQ</li>
						<li>Support center</li>
						<li>Contact</li>
					</ul>
				</div>
				<div className="links">
					<Typography
						variant="h5"
						fontWeight={'bold'}
						gutterBottom={4}>
						<a href="/">Partner</a>
					</Typography>
					<ul>
						<li>Our Partner</li>
						<li>Subscribe</li>
					</ul>
				</div>
			</Stack>
			<br />
		</footer>
	);
};

export default Footer;
