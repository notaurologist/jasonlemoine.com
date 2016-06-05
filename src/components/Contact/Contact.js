import React from 'react';
import styles from './contact.css';

const Contact = () => (
	<main className={ styles.contact }>
		<form action="https://formspree.io/site@lemoine.io" method="POST">
			<input type="hidden" name="_next" value="http://www.jasonlemoine.com/contact/thanks" />
			<input type="text" name="_gotcha" style={ {display:'none'} } />
			<input type="text" role="textbox" aria-label="name" name="name" placeholder="Name" tabIndex="1" required />
			<input type="email" role="textbox" aria-label="_replyto" name="_replyto" placeholder="Email" tabIndex="2" required />
			<textarea aria-label="message" role="textbox" aria-multiline="true" name="message" placeholder="Message" tabIndex="3" required></textarea>
			<button tabIndex="4">Send</button>
		</form>
	</main>
);

export default Contact;
