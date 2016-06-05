import React, {PropTypes} from 'react';
import styles from './links.css';
import Link from './Link';

const LinkMenu = ({links}) => (
	<nav>
		<ul className={ styles.links }>
			{ links.map((link) => {
				const glyph = require(`../../helpers/${link.slug}.svg`);
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

LinkMenu.propTypes = {
	links: PropTypes.arrayOf(PropTypes.shape({
		url: PropTypes.string,
		title: PropTypes.string,
		slug: PropTypes.string,
	})).isRequired,
};

export default LinkMenu;
