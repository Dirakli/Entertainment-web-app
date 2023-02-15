import styled from 'styled-components';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { createGlobalStyle } from 'styled-components';
import { useState } from 'react';
import Home from './components/Home';
import myData from './data.json';

function App() {
	const [data, setData] = useState(myData);
	const [click, setClick] = useState<boolean>(false);
	const [openHome, setOpenHome] = useState<any>(false);


	function handler() {
		setClick(!click);
		console.log(click)
	}

	function homeFunc() {
		setOpenHome(true);
		console.log(openHome)
	}

	return (
		<div>
			<GlobalStyles />
			{openHome ? <Home data={data} setData={setData} /> : ""}
			{!click && !openHome ? <Login openHome={openHome} homeFunc={homeFunc} click={click} setClick={setClick} handler={handler} /> : ""}
			{click && !openHome ? <SignUp click={click} setClick={setClick} handler={handler} /> : ""}
		</div>

	)
}

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300&display=swap');

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a {
  text-decoration: none;
}
* {
  box-sizing: border-box;
}
textarea {
  resize: none;
}
`



export default App;
