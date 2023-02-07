import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: var(--backgroundColor);
    transition: background-color 0.1s ease;

    --primaryDarker: #1c1c1c;
    --primaryDark: #2f2f2f;
    --primary: #434343;
    --primaryLight: #575757;
    --primaryLighter: #727272;

    --secondaryDarkest: #593ba1;
    --secondaryDarker: #6f48c9;
    --secondaryDark: #6f48c9;
    --secondary: #8257e5;
    --secondaryLight: #9f75ff;
    --secondaryLighter: #b08fff;

    --white: #eee;

    --backgroundColor: #1d1d1d;
    --backgroundColorHigh: #2e2e2e;
    --backgroundColorHigher: #525252;

    --textColor: #eee;
    --textColorSecondary: #1c1c1c;
    --textColorSecondaryLight: #575757;
    --textColorSecondaryLighter: #727272;
    --textColorHighlight: #eee;

    color: var(--textColor);



    /* CSS Reset */
    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    p {
      margin: 0;
      font-weight: inherit;
      margin-block-start: 0;
      margin-block-end: 0;
    }

    a:-webkit-any-link {
      color: inherit;
      text-decoration: none;
    }

    ul {
      list-style-type: none;
      margin-block-start: 0;
      margin-block-end: 0;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      padding-inline-start: 0px;
    }
}
`;
