import React from 'react'
import styled from '@emotion/styled'
import { colors } from './theme'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Avatar = styled(Img)`
  border-radius: 100%;
  flex-shrink: 0;
  margin-left: -3px;
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
  font-weight: 700;
  letter-spacing: 1px;
  color: ${colors.black};
  word-spacing: 100vw;
  padding-right: 70px;
  &:after {
    display: block;
    content: "—";
  }
`

const Description = styled.p`
  font-family: Poppins, sans-serif;  
  font-size: 16px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.59;
  letter-spacing: 1px;
  color: ${colors.grey};
  margin-top: -20px;
`

const Link = styled.a`
  font-family: Poppins, sans-serif;
  font-size: 15px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.6;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  color: ${colors.grey};
  transition: color 0.3s;
  display: inline-flex;
  align-items: center;

  margin-right: 1rem;

  & svg {
    margin-left: 3px;
  }
  
  &:hover {
    color: ${colors.black};
  }
`

const Links = styled.div`
  margin-bottom: 32px;
`

const Remote = styled(Link)`
  display: inline-block;
`
const Email = styled(Link)`
  display: block;
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
        <Links>
          <Remote rel="noopener" href="https://dribbble.com/svidma" target="_blank">
            Dribbble
          </Remote>
          <Remote rel="noopener" href="https://www.linkedin.com/in/svidma/" target="_blank">
            LinkedIn
          </Remote>
          <Remote rel="noopener" href="https://drive.google.com/file/d/1zQK2E4NaCtnDyNjtvBUZJOOl5GEpgihD/view" target="_blank">
            Resume
          </Remote>
          <Email rel="noopener" href="mailto:svid.marketa@gmail.com" target="_blank">
            svid.marketa@gmail.com
          </Email>
        </Links>
      </Header>
    )}}
  />
)

