import React from 'react'
import styled from '@emotion/styled'
import rehypeReact from 'rehype-react'
import { Link, graphql, StaticQuery } from 'gatsby'
import { colors } from './theme'


const FullWidth = styled.span`
  display: block;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin: 40px -50vw;

  ${({ color }) => color ? `background-color: ${color};` : ''}

  & .gatsby-resp-image-image {
    box-shadow: none !important;
  }

  & p {
    margin: 0;
    padding: 0;
  }
`

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'full-width': FullWidth,
  }
}).Compiler

const BackLink = styled(Link)`
  font-family: 'Asap Condensed', sans-serif;
  font-size: 17px;
  font-weight: 500;
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

const HeaderLink = styled.span`
  font-family: 'Asap Condensed', sans-serif;
  font-size: 17px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.59;
  letter-spacing: 3px;
  text-transform: uppercase;
  text-decoration: none;
  color: ${colors.grey};
  transition: color 0.3s;

  & svg {
    margin-right: 6px;
  }

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
    font-family: Poppins, sans-serif;
    text-transform: uppercase;
    
    font-size: 45px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2em;
    letter-spacing: 3px;
    text-align: center;
    color: ${colors.black};

    &:after {
      margin: .3em 0 0;
      display: block;
      content: "—";
      line-height: 0.89em;
    }
  }

  h2 {
    font-family: Poppins, sans-serif;
    font-size: 30px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.33;
    letter-spacing: 1px;
    margin: 0;
    padding: 50px 0 10px;
    color: ${colors.black};
  }

  h3 {
    font-family: 'Asap Condensed', sans-serif;
    font-size: 20px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.35;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin: 0;
    padding: 20px 0 2px;
    color: ${colors.black};
  }

  img {
    max-width: 100%;
    box-shadow: none !important;
  }

  p {
    font-family: Poppins, sans-serif;
    font-size: 17px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.59;
    letter-spacing: 0.75px;
    margin: 0;
    padding: 10px 100px 10px 0;
    color: ${colors.black};
  }

  ul {
    margin: 0;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  ol {
    margin: 0;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  b {
    font-weight: 400;
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

const Header = styled(Link)`
  font-size: 1em;
  margin: 72px;
  margin-bottom: 0;
  display: block;
  text-decoration: none;

  @media (max-width: 800px) {
    margin: 2em;
    margin-bottom: 4em;
  }
`

const Name = styled.p`
  font-size: 1em;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 4px;
  color: ${colors.black};
  word-spacing: 100vw;
`

export default ({ htmlAst, next }) => (
  <NoHorizontalScroll>
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata { title }
          }
        }
      `}
      render={({ site: { siteMetadata: { title }}}) => (
        <Header to="/">
          <Name>{title}</Name>
          <HeaderLink to="/">
            <svg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 11 11'>
              <g fill='none' fillRule='evenodd'>
                <path d='M-2-3h15v15H-2z' />
                <path fill='currentColor' d='M10.5 4.875H2.894l3.493-3.494L5.5.5l-5 5 5 5 .881-.881-3.487-3.494H10.5z' />
              </g>
            </svg>
            show all projects
          </HeaderLink>
        </Header>
      )}
    />
    <Detail>
      <Content>
        { renderAst(htmlAst) }
        { next && <BackLink to={next}>Next project</BackLink> }
        { !next && <BackLink to="/">Show all projects</BackLink> }
      </Content>
    </Detail>
  </NoHorizontalScroll>
)
