import React from 'react'
import styled from '@emotion/styled'
import rehypeReact from 'rehype-react'
import { Link } from 'gatsby'
import { colors } from './theme'



const FullWidth = styled.span`
  display: block;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin: 15px 0;
  margin-left: -50vw;
  margin-right: -50vw;

  ${({ color }) => color ? `background-color: ${color};` : ''}

  & .gatsby-resp-image-image {
    box-shadow: none !important;
  }
`

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'full-width': FullWidth,
  }
}).Compiler

const BackLink = styled(Link)`
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-size: 17px;
  font-weight: 700;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.59;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: none;
  color: ${colors.grey};
  transition: color 0.3s;

  &:hover, &:active {
    color: ${colors.black};
  }
`

const Content = styled.main`
  max-width: 800px;
  font-family: Poppins;
  font-size: 17px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.59;
  margin: 32px auto 0;
  letter-spacing: 1px;
  color: ${colors.black};

  h1 {
    text-align: center;
    font-family: Poppins, sans-serif;
    text-transform: uppercase;
    font-size: 30px;
    font-weight: 700;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.33;
    letter-spacing: 4px;
    color: ${colors.black};

    &:after {
      display: block;
      content: "—";
    }
  }

  h2 {
    font-family: Poppins, sans-serif;
    font-size: 30px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.33;
    letter-spacing: 4px;
    color: ${colors.black};
  }

  h3 {
    font-family: 'IBM Plex Sans Condensed', sans-serif;
    font-size: 20px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.35;
    letter-spacing: 3.5px;
    text-transform: uppercase;
    color: ${colors.black};
  }

  img {
    max-width: 100%;
  }

  p {
    font-family: Poppins, sans-serif;
    font-size: 17px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.59;
    letter-spacing: 1px;
    color: ${colors.black};
  }

  ${BackLink} {
    display: block;
    text-align: center;
    margin-top: 64px;
  }
`

const Detail = styled.div`
  max-width: 1200px;
  width: calc(100% - 4em);
  margin: 64px auto 32px;

  @media (max-width: 800px) {
    margin-top: 2em;
  }
`
  
const NoHorizontalScroll = styled.div`
  overflow-x: hidden;
`

export default ({ htmlAst }) => (
  <NoHorizontalScroll>
    <Detail>
      <BackLink to="/">back to all</BackLink>
      <Content>
        { renderAst(htmlAst) }
        <BackLink to="/">show all projects</BackLink>
      </Content>
    </Detail>
  </NoHorizontalScroll>
)