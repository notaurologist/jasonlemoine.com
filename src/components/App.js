import React, {PropTypes} from 'react';

import styles from './app.css';
import LinkMenu from './Links/LinkMenu';

const links = [
	{
		url: '/contact',
		title: 'Contact Me',
		slug: 'envelope-o',
	},
	{
		url: 'https://www.github.com/notaurologist',
		title: 'GitHub',
		slug: 'github',
	},
	{
		url: 'https://www.linkedin.com/in/jlemoine',
		title: 'LinkedIn',
		slug: 'linkedin',
	},
	{
		url: 'https://www.twitter.com/notaurologist',
		title: 'Twitter',
		slug: 'twitter',
	},
];

const App = ({children}) => (
	<div className={ styles.container }>
		<LinkMenu links={ links } />
		{ children }
	</div>
);

App.propTypes = {
	children: PropTypes.element.isRequired,
};

export default App;
