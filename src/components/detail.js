import React from 'react'
import styled from '@emotion/styled'
import rehypeReact from 'rehype-react'
import { Link, graphql, StaticQuery } from 'gatsby'
import { css } from '@emotion/core'
import { colors } from './theme'
import Img from 'gatsby-image'

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
  font-family: Poppins, sans-serif;
  font-size: 15px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.6;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  color: ${colors.grey};
  transition: color 0.3s;

  &:hover, &:active {
    color: ${colors.black};
  }

  & svg {
    margin-right: 6px;
  }
`

const HeaderLink = styled.span`
  font-family: Poppins, sans-serif;
  font-size: 15px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.6;
  letter-spacing: 2px;
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
  max-width: 600px;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.7;
  margin: 32px auto 0;
  letter-spacing: 0.4px;
  color: ${colors.black};

  h1 {
    font-family: Poppins, sans-serif;
    text-transform: uppercase;
    font-size: 44px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2em;
    letter-spacing: 2px;
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
    font-size: 40px;
    font-weight: 700;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.33;
    letter-spacing: 0.1px;
    margin: 0;
    padding: 50px 0 10px;
    color: ${colors.black};
  }

  h3 {
    font-family: Poppins, sans-serif;
    font-size: 24px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.35;
    letter-spacing: 0.5px;
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
    font-size: 16px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: 0.1px;
    margin: 0;
    padding: 10px 0 10px;
    color: ${colors.grey};
  }

  ul {
    margin: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    color: ${colors.grey};
    list-style: none;
    padding-left: 2.5em;
    letter-spacing: 0.1px;
  }

  li::before {
    content: "—";
    display: inline-block;
    width: 1.5em;
    margin-left: -1.5em;
  }

  ol {
    margin: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #757575;
    letter-spacing: 0.1px;
  }

  b {
    font-weight: 500;
  }

  .iframe_mobile {
    margin: 0 auto;
    display: block;
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
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${colors.black};
  word-spacing: 100vw;
  margin-bottom: 10px;
`

const Navigation = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 18px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.33;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    letter-spacing: 0.5px;
    color: ${colors.black};
    margin-bottom: 10px;
  }

  ${BackLink} {
    align-self: flex-end;
  }
`

const NavigationLinks = styled.div`
  display: grid;
  grid-template: 1fr / 1fr 1fr 1fr;
  grid-gap: 1em;
`


const ImageContainer = styled.div`
  flex-grow: 1;
  justify-content: center;
  padding: 30px;


  @media (max-width: 800px) {
    padding: 2em;
  }

  > img {
    object-fit: contain;
    display: block;
    margin: 0 auto;
    max-width: 100%;
    max-height: calc(80vh - 50px);
  }
`

const LinkTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 30px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  text-decoration: none;
  line-height: 1.33;
  letter-spacing: 2px;
  margin: 0;

  padding: 1em;
  
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(255, 255, 255, 0.9);

  opacity: 0;
  transition: opacity 0.3s;
  
`

const ItemContainer = styled(Link)`
  max-width: 100%;
  position: relative;
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  text-transform: uppercase;
  ${props => props.theme}

  &:hover ${LinkTitle} {
    opacity: 1;
  }
`

const LinkContent = styled.div`
  position: relative;
  z-index: 1;
`


const ImgWithSize = styled(Img)`
  margin: 0 auto;
  ${({ original: { width } }) => `
    max-width: ${width}px;
  `}
`

const ImgWithAspectRatio = styled.div`
  margin: 0 auto;
  ${({ aspectRatio }) => `
    max-width: calc(80vh * ${aspectRatio} - 150px);
  `}

  @media (max-width: 800px) {
    max-width: 100%;
  }
`

const ImgAsBackground = styled(Img) `
  position: absolute !important;
  top: 0; left: 0; right: 0; bottom: 0;
`

const LinkItem = ({ title, path, textColor, cover: { image, url }, background: { image: bgImage, color, url: bgUrl }}) => {
  return (
    <ItemContainer
      to={path}
      theme={css`
        color: ${textColor};
        background-color: ${color};
        ${bgUrl ? `background-image: url('${bgUrl}');` : ''}
      `}
    >
      <LinkContent>
        <ImageContainer>
          { !!url ? <img src={url} alt={title} /> : (image && (
              <ImgWithAspectRatio aspectRatio={image.childImageSharp.fluid.aspectRatio}>
                <ImgWithSize original={image.childImageSharp.original} fluid={image.childImageSharp.fluid} />
              </ImgWithAspectRatio>
            )) || null }
        </ImageContainer>
        <LinkTitle>{title}</LinkTitle>
      </LinkContent>
      { bgImage && !bgUrl && <ImgAsBackground fluid={bgImage.childImageSharp.fluid} /> }
    </ItemContainer>
  )
}

export default ({ htmlAst, next }) => {
  console.log(next)
  return (
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
          { (!next || next.length === 0) && <BackLink to="/">Show all projects</BackLink> }
        </Content>
        { next && next.length > 0 && (
          <Navigation>
            <h2>Next projects</h2>
            <NavigationLinks>
              {next.map(({ node: { id, frontmatter } }, index) => (
                <LinkItem key={id} {...frontmatter} />
              ))}
            </NavigationLinks>
            <BackLink to="/">
              <svg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 11 11'>
                <g fill='none' fillRule='evenodd'>
                  <path d='M-2-3h15v15H-2z' />
                  <path fill='currentColor' d='M10.5 4.875H2.894l3.493-3.494L5.5.5l-5 5 5 5 .881-.881-3.487-3.494H10.5z' />
                </g>
              </svg>
              Show all projects
            </BackLink>
          </Navigation>
        ) }
      </Detail>
    </NoHorizontalScroll>
  )
}