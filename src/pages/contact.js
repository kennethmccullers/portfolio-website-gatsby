import React from 'react';
import Link from 'gatsby-link';
import "../styles/layout-override.css";
import "./css/fontawesome.css";
import "./css/brands.css";

const ContactPage = () => (
	<div style={{ textAlign: 'center' }}>
	<h1 style={{ color: 'black' }}> Contact Me </h1>
	<p className="lead-text" style={{ color: 'gray' }}> Message me for questions. </p>
	<form
	name="contact"
	method="post"
	>
	<input name="name" placeholder="Your Name" type="text"/>
	< br />
	<input name="email" placeholder="Your Email" type="email"/>
	< br/>
	<textarea name="message" placeholder="Your Message" />
	<br />
	<button className="button2">Submit</button>
	</form>
	</div>

	)

export default ContactPage