import React from 'react';
import styles from './about.css';

const About = () => (
	<main className={ styles.intro }>
		<img src="/images/profile-240.jpg" width="240" height="240" alt="Ruby and me at the Skaha Bluffs." />
		<p>
			Hi there. My name is Jason LeMoine, and I'm a web developer living on beautiful Bainbridge Island just across the Puget Sound from Seattle. I am not a urologist. Sorry, that's the other guy. While I'm not any help in that “area,” if you need some web work done, we may be able to work something out. I prefer to focus on <b>JavaScript</b> and the <b>front-end</b>, but I've also done <b>full-stack</b>. Check out my <a href="https://www.linkedin.com/in/jlemoine" title="LinkedIn">LinkedIn</a> and <a href="https://www.github.com/notaurologist" title="GitHub">GitHub</a> profiles for more info.
		</p>
		<p>
			When I'm not working, I'm usually trying to climb or hike or do other outdoorsy things with my gorgeous and talented wife and our dog Ruby—they're both amazing. That's Ruby and me at the Skaha Bluffs in Penticton, BC. It's a very gneiss place to climb.
		</p>
	</main>
);

export default About;
