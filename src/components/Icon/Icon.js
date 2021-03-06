import React, {PropTypes} from 'react';
import styles from './icon.css';

const Icon = ({glyph}) => (
	<svg className={ styles.icon } role="img">
		<use xlinkHref={ glyph } />
	</svg>
);

Icon.propTypes = {
	glyph: PropTypes.string.isRequired,
};

export default Icon;
