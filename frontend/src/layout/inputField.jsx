import { TextField } from '@mui/material';
import React from 'react';

const InputField = ({ labelName, type, restProps, error }) => {
	return (
		<div>
			<TextField
				sx={{ maxWidth: '100%', width: 500 }}
				type={type}
				error={error}
				{...restProps}
				label={labelName}
			/>
		</div>
	);
};

export default InputField;
