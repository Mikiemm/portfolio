import { React } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { css } from '@emotion/core'
import Underline from './underline'
import { ItemContainer, Content, ImageContainer, ImgWithAspectRatio, ImgWithSize, Heading, Title, Type, ImgAsBackground, List } from './list.style'

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
                        aspectRatio
                        src
                        srcSet
                        sizes
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
                        base64
                        aspectRatio
                        src
                        srcSet
                        sizes
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
