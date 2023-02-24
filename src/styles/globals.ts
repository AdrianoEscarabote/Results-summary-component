import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* Box sizing rules */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}
/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul {
  list-style: none;
}
/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}
/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}
/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}
/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}
/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
.sr-only {
  position: absolute;
  width: 0.0625rem;
  height: 0.0625rem;
  padding: 0;
  margin: -0.0625rem;
  overflow: hidden;
  clip: rect(0,0,0,0);
  border: 0;
}
body {
  text-rendering: optimizeSpeed;
  font-family: 'Hanken Grotesk', sans-serif;
  background: #ECF2FF;
  display: flex;
  align-items: center;
  justify-content: center;
}
main {
  animation: mainAnimation 1s ease-in-out;
}
@media (min-width: 50rem) and (min-height: 520px) {
  body {
    overflow: hidden;
  }
}
@media (max-width: 800px) {
  body {
    background: #fff;
    align-items: flex-start;
  }
}
@media(min-width: 43.75rem) {
  @keyframes mainAnimation {
    from {
      opacity: 0;
      transform: translateY(-10%);
    } to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
}`