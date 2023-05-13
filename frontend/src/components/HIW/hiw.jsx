import { Box, Card, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import './hiw.css';
import CustomButton from '../../layout/customButton';
import CustomCard from '../../layout/card';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import PsychologyIcon from '@mui/icons-material/Psychology';
const HIW = () => {
	return (
		<>
			<Stack
				className="hiw com"
				direction={'row'}
				justifyContent="space-between"
				sx={{
					padding: '50px 4rem',
					backgroundColor: 'var(--white)',
				}}>
				<Box
					className="left"
					sx={{ width: '41%' }}>
					<Typography variant="h3">
						You can know your Healthcare any were and any time.
					</Typography>
				</Box>
				<Stack
					className="right"
					alignItems={'flex-start'}
					spacing={2}
					sx={{ width: '50%' }}>
					<Typography
						variant="body2"
						fontSize="1.5rem"
						color="var(--text-second-color)">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
						pariatur ducimus a libero, voluptatibus dolorem. Placeat labore
						cumque laudantium repellat nulla, tenetur, quae necessitatibus
						consequatur laborum fuga exercitationem quod commodi!
					</Typography>
					<CustomButton text="Learn More"></CustomButton>
				</Stack>
			</Stack>
			<div
				className="container"
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(2, 1fr)',
					padding: '2rem 5rem',
					gap: '2rem',
				}}>
				<CustomCard
					icons={<VolunteerActivismIcon />}
					head={'Primary Care'}
					content={
						'Lorem ipsum dolor sit amet consectetur adipisicing elit.asdkmf klsad'
					}
				/>
				<CustomCard
					icons={<FavoriteIcon />}
					head={'Heart Care'}
					content={
						'Lorem ipsum dolor sit amet consectetur adipisicing elit.asdkmf klsad'
					}
				/>
				<CustomCard
					icons={<BloodtypeIcon />}
					head="surgery"
					content={
						'Lorem ipsum dolor sit amet consectetur adipisicing elit.asdkmf klsad'
					}
				/>
				<CustomCard
					icons={<PsychologyIcon />}
					head="Mental Health"
					content={
						'Lorem ipsum dolor sit amet consectetur adipisicing elit.asdkmf klsad'
					}
				/>
			</div>
		</>
	);
};

export default HIW;
