import React from 'react';
import ReactDOM from 'react-dom';
import {install} from 'offline-plugin/runtime';
install();
import {Router, Route, IndexRedirect, Redirect, browserHistory} from 'react-router';
import App from './components/App';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Thanks from './components/Contact/Thanks';

ReactDOM.render(
	<Router history={ browserHistory }>
		<Route path="/" component={ App }>
			<IndexRedirect to="/about" />
			<Route path="about" component={ About } />
			<Route path="contact" component={ Contact } />
			<Route path="contact/thanks" component={ Thanks } />
			<Redirect from='*' to='/' />
		</Route>
	</Router>,
	document.getElementById('app')
);
