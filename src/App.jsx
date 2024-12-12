import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import MailboxDetails from './components/MailboxDetails';
import NavBar from './components/NavBar';

const App = () => {
	const [mailboxes, setMailboxes] = useState([]);

	const addBox = (formData) => {
		const newMailbox = {
			_id: mailboxes.length + 1,
			boxSize: formData.boxSize,
			boxholder: formData.boxholder,
		};
		setMailboxes([...mailboxes, newMailbox]);
	};

	return (
		<>
			<NavBar />
			<Routes>
				<Route
					path='/'
					element={
						<main>
							<h1>Post Office</h1>
						</main>
					}
				/>
				<Route
					path='/mailboxes'
					element={<MailboxList mailboxes={mailboxes} />}
				/>
				<Route
					path='/new-mailbox'
					element={<MailboxForm addNewMailbox={addBox} />}
				/>
				<Route
					path='/mailboxes/:mailboxId'
					element={<MailboxDetails mailboxes={mailboxes} />}
				/>
			</Routes>
		</>
	);
};

export default App;
