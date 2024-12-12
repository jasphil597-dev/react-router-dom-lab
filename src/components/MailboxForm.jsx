import React, { useState } from 'react';

const MailboxForm = ({ addNewMailbox }) => {
	const [formData, setFormData] = useState({
		boxholder: '',
		boxSize: 'Small',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addNewMailbox(formData);
		setFormData({ boxholder: '', boxSize: 'Small' });
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Boxholder Name:
				<input
					type='text'
					name='boxholder'
					value={formData.boxholder}
					onChange={handleChange}
				/>
			</label>
			<label>
				Box Size:
				<select name='boxSize' value={formData.boxSize} onChange={handleChange}>
					<option value='Small'>Small</option>
					<option value='Medium'>Medium</option>
					<option value='Large'>Large</option>
				</select>
			</label>
			<button type='submit'>Submit</button>
		</form>
	);
};

export default MailboxForm;
