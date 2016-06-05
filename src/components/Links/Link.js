import React, {PropTypes} from 'react';
import styles from './links.css';
import Icon from '../common/Icon';

const Link = ({url, title, glyph}) => {
	return (
		<li className={ styles.link }>
			<a className={ styles.iconLink } href={ url } title={ title }>
				<Icon glyph={ glyph } />
			</a>
		</li>
	);
};

Link.propTypes = {
	url: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	glyph: PropTypes.string.isRequired,
};

export default Link;
