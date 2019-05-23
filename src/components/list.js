import { React } from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Underline, { activeStyle } from './underline'
import Img from 'gatsby-image'

const List = styled.main`
  overflow: hidden;
  overflow-y: auto;
`

const ImageContainer = styled.div`
  flex-grow: 1;
  justify-content: center;
  padding: 50px;
  padding-bottom: 30px;


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

const Title = styled.h2`
  font-family: Poppins;
  font-size: 30px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  text-decoration: none;
  line-height: 1.33;
  letter-spacing: 2px;
  margin: 0;
  
  display: block;
`

const Type = styled.h3`
  font-family: 'Asap Condensed', sans-serif;
  font-size: 15px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.59;
  letter-spacing: 3.2px;
  margin: 0; padding: 0;
`

const Heading = styled.div`
  display: flex;
  padding: 20px 50px 40px;
  flex-direction: column-reverse;

  @media (max-width: 800px) {
    padding: 2em;
    padding-top: 0.5em;
  }
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

  &:hover ${Underline} {
    ${activeStyle}
  }
`

const Content = styled.div`
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
const Item = ({ title, type, path, textColor, cover: { image, url }, background: { image: bgImage, color, url: bgUrl }}) => {
  return (
    <ItemContainer
      to={path}
      theme={css`
        color: ${textColor};
        background-color: ${color};
        ${bgUrl ? `background-image: url('${bgUrl}');` : ''}
      `}
    >
      <Content>
        <ImageContainer>
          { !!url ? <img src={url} alt={title} /> : (image && (
              <ImgWithAspectRatio aspectRatio={image.childImageSharp.fluid.aspectRatio}>
                <ImgWithSize original={image.childImageSharp.original} fluid={image.childImageSharp.fluid} />
              </ImgWithAspectRatio>
            )) || null }
        </ImageContainer>
        <Heading>
          <Title><Underline>{title}</Underline></Title>
          <Type>{type}</Type>
        </Heading>
      </Content>
      { bgImage && !bgUrl && <ImgAsBackground fluid={bgImage.childImageSharp.fluid} /> }
    </ItemContainer>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { fields: fileAbsolutePath, order: ASC }, filter: { fileAbsolutePath: { regex: "/projects/" } }) {
          edges {
            node {
              id
              frontmatter {
                title
                path
                type
                textColor
                cover {
                  url
                  image {
                    childImageSharp {
                      original {
                        width
                        height
                        src
                      }
                      fluid(quality: 95, srcSetBreakpoints: [200, 400, 600, 800], maxWidth: 9999999) {
                        ...GatsbyImageSharpFluid_noBase64
                      }
                    }
                  }
                }
                background {
                  url
                  color
                  image {
                    childImageSharp {
                      original {
                        src
                      }
                      fluid(quality: 95, srcSetBreakpoints: [200, 400, 600, 800], maxWidth: 9999999) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark: { edges }}) => (
      <List>
        {edges.map(({ node: { id, frontmatter } }) => (
          <Item key={id} {...frontmatter} />
        ))}
      </List>
    )}
  />
)
