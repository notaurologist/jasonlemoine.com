import React from 'react';
import styles from './links.css';
import Link from './Link';

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

const LinkMenu = () => (
	<nav>
		<ul className={ styles.links }>
			{ links.map((link) => {
				const glyph = require(`static/images/${link.slug}.svg`);
				return (
					<Link
						key={ link.slug }
						url={ link.url }
						title={ link.title }
						glyph={ glyph } />
			)}) }
		</ul>
	</nav>
);

export default LinkMenu;
