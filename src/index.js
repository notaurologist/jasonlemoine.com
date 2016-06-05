import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRedirect, hashHistory} from 'react-router';
import App from './components/App';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Thanks from './components/Contact/Thanks';

ReactDOM.render(
	<Router history={ hashHistory }>
		<Route path="/" component={ App }>
			<IndexRedirect to="/about" />
			<Route path="about" component={ About } />
			<Route path="contact" component={ Contact } />
			<Route path="contact/thanks" component={ Thanks } />
		</Route>
	</Router>,
	document.getElementById('app')
);
