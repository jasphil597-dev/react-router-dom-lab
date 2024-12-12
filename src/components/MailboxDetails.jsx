import React from 'react';
import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes }) => {
	const { mailboxId } = useParams();
	const selectedMailbox = mailboxes.find(
		(mailbox) => mailbox._id === Number(mailboxId)
	);

	return (
		<div>
			{selectedMailbox ? (
				<div>
					<h2>Mailbox Details</h2>
					<p>Box Number: {selectedMailbox._id}</p>
					<p>Boxholder Name: {selectedMailbox.boxholder}</p>
					<p>Box Size: {selectedMailbox.boxSize}</p>
				</div>
			) : (
				<h2>Mailbox Not Found!</h2>
			)}
		</div>
	);
};

export default MailboxDetails;
