// GlobalStyles.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

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


/* CSS Variables*/
:root{
  --color-text: hsl(0deg,0%,0%); //black
  --color-background: hsl(0deg,0%,100%); //white
  --font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-bold: 700;
  --color-primary: blue;

  // Typography scale is from https://material.io/design/typography/the-type-system.html#type-scale
  --font-size-1: 6rem;
  --font-size-2: 3.75rem;
  --font-size-3: 3rem;
  --font-size-4: 2.125rem;
  --font-size-5: 1.5rem;
  --font-size-6: 1.25rem;

  --shadow: 2px 2px 10px hsl(0deg,0%,0%,0.3);
}


/* Global Styles */
*, *::before, *::after {
    box-sizing: border-box;
    line-height: 1.45;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
  }

  html, body{
    height: 100%;
  }

  #__next{
    isolation: isolate;
  }

  body{
    color: var(--color-text);
    background: var(--color-background);
  }

  a:focus{
    outline: 5px auto var(--color-primary);
  }

  body,input,button,select,option{
    font-family: var(--font-family);
    font-weight: var(--font-weight-light);
  }

  h1, h2, h3, h4, h5, h6, p {
    text-rendering: optimizeLegibility;
  }

  p{
    margin-bottom: 1.5em;
    font-size: 1.125rem;
    letter-spacing: 0.5px;
  }

  strong{
    font-weight: var(----font-weight-bold);
  }

  em{
    font-style: italic;
  }

  // Typography Scale- https://material.io/design/typography/the-type-system.html#type-scale
  h1{
    font-size: var(--font-size-1);
    font-weight: var(----font-weight-light);
    letter-spacing: -1.5px;
  }

  h2{
    font-size: var(--font-size-2);
    font-weight: var(----font-weight-light);
    letter-spacing: -0.5px;
  }

  h3{
    font-size: var(--font-size-3);
    font-weight: var(----font-weight-regular);
    letter-spacing: 0px;
  }

  h4{
    font-size: var(--font-size-4);
    font-weight: var(----font-weight-regular);
    letter-spacing: 0.25px;
  }

  h5{
    font-size: var(--font-size-5);
    font-weight: var(----font-weight-regular);
    letter-spacing: 0px;
  }

  h6{
    font-size: var(--font-size-6);
    font-weight: var(----font-weight-medium);
    letter-spacing: 0.15px;
  }

  

`;
