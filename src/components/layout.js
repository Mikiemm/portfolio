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
/* vietnamese */
@font-face {
  font-family: 'Asap Condensed';
  font-style: normal;
  font-display: swap;
  font-weight: 500;
  src: local('Asap Condensed Medium'), local('AsapCondensed-Medium'), url(https://fonts.gstatic.com/s/asapcondensed/v3/pxieypY1o9NHyXh3WvSbGSggdO9_S1lMimuQpw.woff2) format('woff2');
  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;
}
/* latin-ext */
@font-face {
  font-family: 'Asap Condensed';
  font-style: normal;
  font-display: swap;
  font-weight: 500;
  src: local('Asap Condensed Medium'), local('AsapCondensed-Medium'), url(https://fonts.gstatic.com/s/asapcondensed/v3/pxieypY1o9NHyXh3WvSbGSggdO9_S1lNimuQpw.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Asap Condensed';
  font-style: normal;
  font-display: swap;
  font-weight: 500;
  src: local('Asap Condensed Medium'), local('AsapCondensed-Medium'), url(https://fonts.gstatic.com/s/asapcondensed/v3/pxieypY1o9NHyXh3WvSbGSggdO9_S1lDims.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
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
      { color && <meta name="theme-color" content={color} /> }
    </Helmet>
    <Global
      styles={globalStyles}
    />
    {children}
  </Wrapper>
)