import React, {PropTypes} from 'react';

import styles from './app.css';
import LinkMenu from './Links/LinkMenu';
import links from '../helpers/links';

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
