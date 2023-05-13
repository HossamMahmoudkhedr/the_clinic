import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import CustomButton from './customButton';

const Info = ({ left, right }) => {
	return (
		<Stack
			className="info"
			direction={'row'}
			justifyContent="space-between"
			sx={{
				padding: '50px 4rem',
				backgroundColor: 'var(--dark)',
				color: 'var(--white)',
			}}>
			<Box
				className="left"
				sx={{ width: '41%' }}>
				<Typography variant="h3">{left}</Typography>
			</Box>
			<Stack
				className="right"
				alignItems="center"
				spacing={2}
				sx={{ width: '50%' }}>
				<Typography
					variant="body2"
					fontSize="1.5rem"
					color="var(--text-second-color)">
					{right}
				</Typography>
				<CustomButton text="Learn More"></CustomButton>
			</Stack>
		</Stack>
	);
};

export default Info;
