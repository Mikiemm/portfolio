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

@import url("https://p.typekit.net/p.css?s=1&k=uap5ddp&ht=tk&f=27989.27998.28016.28024.28028.28056&a=2848023&app=typekit&e=css");

@font-face {
font-family:"paralucent";
src:url("https://use.typekit.net/af/64403b/00000000000000003b9ad9cd/27/l?primer=9534f20d24153432f138f14be19fe00ed05018076afc824dd1a6f6ca76bae7c7&fvd=i2&v=3") format("woff2"),url("https://use.typekit.net/af/64403b/00000000000000003b9ad9cd/27/d?primer=9534f20d24153432f138f14be19fe00ed05018076afc824dd1a6f6ca76bae7c7&fvd=i2&v=3") format("woff"),url("https://use.typekit.net/af/64403b/00000000000000003b9ad9cd/27/a?primer=9534f20d24153432f138f14be19fe00ed05018076afc824dd1a6f6ca76bae7c7&fvd=i2&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:200;
}

@font-face {
font-family:"paralucent";
src:url("https://use.typekit.net/af/357d2a/00000000000000003b9ad9d6/27/l?primer=9534f20d24153432f138f14be19fe00ed05018076afc824dd1a6f6ca76bae7c7&fvd=i4&v=3") format("woff2"),url("https://use.typekit.net/af/357d2a/00000000000000003b9ad9d6/27/d?primer=9534f20d24153432f138f14be19fe00ed05018076afc824dd1a6f6ca76bae7c7&fvd=i4&v=3") format("woff"),url("https://use.typekit.net/af/357d2a/00000000000000003b9ad9d6/27/a?primer=9534f20d24153432f138f14be19fe00ed05018076afc824dd1a6f6ca76bae7c7&fvd=i4&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:400;
}

@font-face {
font-family:"paralucent";
src:url("https://use.typekit.net/af/ed2089/00000000000000003b9ad9e8/27/l?primer=9534f20d24153432f138f14be19fe00ed05018076afc824dd1a6f6ca76bae7c7&fvd=n6&v=3") format("woff2"),url("https://use.typekit.net/af/ed2089/00000000000000003b9ad9e8/27/d?primer=9534f20d24153432f138f14be19fe00ed05018076afc824dd1a6f6ca76bae7c7&fvd=n6&v=3") format("woff"),url("https://use.typekit.net/af/ed2089/00000000000000003b9ad9e8/27/a?primer=9534f20d24153432f138f14be19fe00ed05018076afc824dd1a6f6ca76bae7c7&fvd=n6&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:600;
}

@font-face {
font-family:"paralucent";
src:url("https://use.typekit.net/af/1b90bd/00000000000000003b9ad9f0/27/l?primer=9534f20d24153432f138f14be19fe00ed05018076afc824dd1a6f6ca76bae7c7&fvd=i6&v=3") format("woff2"),url("https://use.typekit.net/af/1b90bd/00000000000000003b9ad9f0/27/d?primer=9534f20d24153432f138f14be19fe00ed05018076afc824dd1a6f6ca76bae7c7&fvd=i6&v=3") format("woff"),url("https://use.typekit.net/af/1b90bd/00000000000000003b9ad9f0/27/a?primer=9534f20d24153432f138f14be19fe00ed05018076afc824dd1a6f6ca76bae7c7&fvd=i6&v=3") format("opentype");
font-display:auto;font-style:italic;font-weight:600;
}

@font-face {
font-family:"paralucent";
src:url("https://use.typekit.net/af/f09897/00000000000000003b9ad9f4/27/l?primer=9534f20d24153432f138f14be19fe00ed05018076afc824dd1a6f6ca76bae7c7&fvd=n2&v=3") format("woff2"),url("https://use.typekit.net/af/f09897/00000000000000003b9ad9f4/27/d?primer=9534f20d24153432f138f14be19fe00ed05018076afc824dd1a6f6ca76bae7c7&fvd=n2&v=3") format("woff"),url("https://use.typekit.net/af/f09897/00000000000000003b9ad9f4/27/a?primer=9534f20d24153432f138f14be19fe00ed05018076afc824dd1a6f6ca76bae7c7&fvd=n2&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:200;
}

@font-face {
font-family:"paralucent";
src:url("https://use.typekit.net/af/26af32/00000000000000003b9ada10/27/l?primer=9534f20d24153432f138f14be19fe00ed05018076afc824dd1a6f6ca76bae7c7&fvd=n4&v=3") format("woff2"),url("https://use.typekit.net/af/26af32/00000000000000003b9ada10/27/d?primer=9534f20d24153432f138f14be19fe00ed05018076afc824dd1a6f6ca76bae7c7&fvd=n4&v=3") format("woff"),url("https://use.typekit.net/af/26af32/00000000000000003b9ada10/27/a?primer=9534f20d24153432f138f14be19fe00ed05018076afc824dd1a6f6ca76bae7c7&fvd=n4&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:400;
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
