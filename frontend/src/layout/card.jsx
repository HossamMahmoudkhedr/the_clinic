import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const CustomCard = ({ icons, head, content }) => {
	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent>
				<Typography
					sx={{ fontSize: 14 }}
					color="text.secondary"
					gutterBottom>
					{icons}
				</Typography>
				<Typography
					variant="h5"
					component="div">
					{head}
				</Typography>
				<Typography variant="body2">
					{content}
					<br />
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Learn More</Button>
			</CardActions>
		</Card>
	);
};

export default CustomCard;
