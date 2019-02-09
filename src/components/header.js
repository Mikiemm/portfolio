import React from 'react'
import styled from '@emotion/styled'
import { colors } from './theme'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Avatar = styled(Img)`
  border-radius: 100%;
  flex-shrink: 0;
`
const Header = styled('main')`
  background: ${colors.bg};
  padding: 0 72px 45px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: sticky;

  top: 0;
  height: 100vh;

  @media (max-width: 800px) {
    position: static;
    height: auto;
    padding: 144px 2em 2em;
    max-height: 80vh;
  }

`

const Name = styled.h1`
  font-size: 30px;
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
  &:after {
    display: block;
    content: "—";
  }
`

const Description = styled.p`
  font-size: 17px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.59;
  letter-spacing: 1px;
  color: ${colors.black};
  margin-top: -20px;
`

const Resume = styled.a`
  font-family: 'Asap Condensed', sans-serif;
  font-size: 17px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.59;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 3px;
  color: ${colors.grey};
  transition: color 0.3s;
  margin-bottom: 32px;
  display: inline-flex;
  align-items: center;

  & svg {
    margin-left: 3px;
  }
  
  &:hover {
    color: ${colors.black};
  }
`

export default () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "images/profile.jpg" }) {
          childImageSharp {
            fixed(width: 97) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={({ site, file }) => {
      return (
      <Header>
        <Avatar fixed={file.childImageSharp.fixed} />
        <Name>{site.siteMetadata.title}</Name>
        <Description>{site.siteMetadata.description}</Description>
        <Resume rel="noopener" href="https://drive.google.com/file/d/1Piw16es-cT4mugAfgZ6Sqffv5XAUwdNy/view" target="_blank">
          Résumé with contacts
          <svg xmlns='http://www.w3.org/2000/svg' width='13' height='13' viewBox='0 0 13 13'>
              <g fill='none' fillRule='evenodd'>
                  <path d='M-1-1h15v15H-1z' />
                  <path fill='currentColor' fillRule='nonzero' d='M10.875 10.875h-8.75v-8.75H6.5V.875H.875v11.25h11.25V6.5h-1.25v4.375zM7.75.875v1.25h2.244L3.85 8.269l.881.881 6.144-6.144V5.25h1.25V.875H7.75z'
                  />
              </g>
          </svg>
        </Resume>
      </Header>
    )}}
  />
)

