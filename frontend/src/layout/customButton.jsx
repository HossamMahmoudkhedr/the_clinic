import React from 'react';
import { Button } from '@mui/material';
const CustomButton = ({ text, classes, type, resprops }) => {
	return (
		<Button
			className={classes}
			sx={{
				backgroundColor: 'var(--blue)',
				'&: hover': {
					backgroundColor: '#0053d0',
				},
			}}
			{...resprops}
			variant="contained">
			{text}
		</Button>
	);
};

export default CustomButton;
