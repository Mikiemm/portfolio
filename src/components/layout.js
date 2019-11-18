import React from 'react'
import { Helmet } from "react-helmet"
import { Global, css } from '@emotion/core'
import styled from '@emotion/styled'
import { colors } from './theme'

const Wrapper = styled('div')`
  display: block;

  *, *:before, *:after {
    box-sizing: border-box;
  }
`

const globalStyles = css`

@import url("https://p.typekit.net/p.css?s=1&k=dix7jqw&ht=tk&f=2005.2006.2009.2010.2011.2012&a=2848023&app=typekit&e=css");

@font-face {
font-family:"museo-sans";
src:url("https://use.typekit.net/af/620bf8/00000000000000000000e7fe/27/l?primer=9534f20d24153432f138f14be19fe00ed05018076afc824dd1a6f6ca76bae7c7&fvd=n3&v=3") format("woff2"),url("https://use.typekit.net/af/620bf8/00000000000000000000e7fe/27/d?primer=9534f20d24153432f138f14be19fe00ed05018076afc824dd1a6f6ca76bae7c7&fvd=n3&v=3") format("woff"),url("https://use.typekit.net/af/620bf8/00000000000000000000e7fe/27/a?primer=9534f20d24153432f138f14be19fe00ed05018076afc824dd1a6f6ca76bae7c7&fvd=n3&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:300;
}

@font-face {
font-family:"museo-sans";
src:url("https://use.typekit.net/af/5cca6d/00000000000000000000e802/27/l?primer=9534f20d24153432f138f14be19fe00ed05018076afc824dd1a6f6ca76bae7c7&fvd=i3&v=3") format("woff2"),url("https://use.typekit.net/af/5cca6d/00000000000000000000e802/27/d?primer=9534f20d24153432f138f14be19fe00ed05018076afc824dd1a6f6ca76bae7c7&fvd=i3&v=3") format("woff"),url("https://use.typekit.net/af/5cca6d/00000000000000000000e802/27/a?primer=9534f20d24153432f138f14be19fe00ed05018076afc824dd1a6f6ca76bae7c7&fvd=i3&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:300;
}

@font-face {
font-family:"museo-sans";
src:url("https://use.typekit.net/af/e3ca36/00000000000000000000e805/27/l?primer=9534f20d24153432f138f14be19fe00ed05018076afc824dd1a6f6ca76bae7c7&fvd=n7&v=3") format("woff2"),url("https://use.typekit.net/af/e3ca36/00000000000000000000e805/27/d?primer=9534f20d24153432f138f14be19fe00ed05018076afc824dd1a6f6ca76bae7c7&fvd=n7&v=3") format("woff"),url("https://use.typekit.net/af/e3ca36/00000000000000000000e805/27/a?primer=9534f20d24153432f138f14be19fe00ed05018076afc824dd1a6f6ca76bae7c7&fvd=n7&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:700;
}

@font-face {
font-family:"museo-sans";
src:url("https://use.typekit.net/af/2841b6/00000000000000000000e806/27/l?primer=9534f20d24153432f138f14be19fe00ed05018076afc824dd1a6f6ca76bae7c7&fvd=i7&v=3") format("woff2"),url("https://use.typekit.net/af/2841b6/00000000000000000000e806/27/d?primer=9534f20d24153432f138f14be19fe00ed05018076afc824dd1a6f6ca76bae7c7&fvd=i7&v=3") format("woff"),url("https://use.typekit.net/af/2841b6/00000000000000000000e806/27/a?primer=9534f20d24153432f138f14be19fe00ed05018076afc824dd1a6f6ca76bae7c7&fvd=i7&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:700;
}

@font-face {
font-family:"museo-sans";
src:url("https://use.typekit.net/af/9cf49e/00000000000000000000e807/27/l?primer=9534f20d24153432f138f14be19fe00ed05018076afc824dd1a6f6ca76bae7c7&fvd=n9&v=3") format("woff2"),url("https://use.typekit.net/af/9cf49e/00000000000000000000e807/27/d?primer=9534f20d24153432f138f14be19fe00ed05018076afc824dd1a6f6ca76bae7c7&fvd=n9&v=3") format("woff"),url("https://use.typekit.net/af/9cf49e/00000000000000000000e807/27/a?primer=9534f20d24153432f138f14be19fe00ed05018076afc824dd1a6f6ca76bae7c7&fvd=n9&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:900;
}

@font-face {
font-family:"museo-sans";
src:url("https://use.typekit.net/af/27c143/00000000000000000000e808/27/l?primer=9534f20d24153432f138f14be19fe00ed05018076afc824dd1a6f6ca76bae7c7&fvd=i9&v=3") format("woff2"),url("https://use.typekit.net/af/27c143/00000000000000000000e808/27/d?primer=9534f20d24153432f138f14be19fe00ed05018076afc824dd1a6f6ca76bae7c7&fvd=i9&v=3") format("woff"),url("https://use.typekit.net/af/27c143/00000000000000000000e808/27/a?primer=9534f20d24153432f138f14be19fe00ed05018076afc824dd1a6f6ca76bae7c7&fvd=i9&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:900;
}

/* devanagari */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-display: fallback;
  src: local('Poppins Light'), local('Poppins-Light'), url(https://fonts.gstatic.com/s/poppins/v5/pxiByp8kv8JHgFVrLDz8Z11lFc-K.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-display: fallback;
  src: local('Poppins Light'), local('Poppins-Light'), url(https://fonts.gstatic.com/s/poppins/v5/pxiByp8kv8JHgFVrLDz8Z1JlFc-K.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-display: fallback;
  src: local('Poppins Light'), local('Poppins-Light'), url(https://fonts.gstatic.com/s/poppins/v5/pxiByp8kv8JHgFVrLDz8Z1xlFQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: local('Poppins Medium'), local('Poppins-Medium'), url(https://fonts.gstatic.com/s/poppins/v5/pxiByp8kv8JHgFVrLGT9Z11lFc-K.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: local('Poppins Medium'), local('Poppins-Medium'), url(https://fonts.gstatic.com/s/poppins/v5/pxiByp8kv8JHgFVrLGT9Z1JlFc-K.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: local('Poppins Medium'), local('Poppins-Medium'), url(https://fonts.gstatic.com/s/poppins/v5/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Poppins Bold'), local('Poppins-Bold'), url(https://fonts.gstatic.com/s/poppins/v5/pxiByp8kv8JHgFVrLCz7Z11lFc-K.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Poppins Bold'), local('Poppins-Bold'), url(https://fonts.gstatic.com/s/poppins/v5/pxiByp8kv8JHgFVrLCz7Z1JlFc-K.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local('Poppins Bold'), local('Poppins-Bold'), url(https://fonts.gstatic.com/s/poppins/v5/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin: 0;
  padding: 0;
  background-color: ${colors.bg};
}
`

export default ({ title, children, description, color }) => (
  <Wrapper>
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="theme-color" content={color || colors.bg} />
      <link ref="shortcut icon" href="/favicon.ico" />
    </Helmet>
    <Global
      styles={globalStyles}
    />
    {children}
  </Wrapper>
)
