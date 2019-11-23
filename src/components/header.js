import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Header, Avatar, Name, Description, Links, Remote, Email } from './header.style'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "images/header/profile.jpg" }) {
          childImageSharp {
            fixed(width: 97, quality: 100) {
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
          <Remote rel="noopener" href="./project/iw" target="_blank">
            About me
          </Remote>
          <Remote rel="noopener" href="https://drive.google.com/file/d/1zQK2E4NaCtnDyNjtvBUZJOOl5GEpgihD/view" target="_blank">
            Resume
          </Remote>
          <Remote rel="noopener" href="https://dribbble.com/marketa" target="_blank">
            <svg xmlns='images/header/icn_dribbble.svg' width='16' height='16' viewBox='0 0 16 16'>
              <g fill='none' fillRule='evenodd'>
                <path d='M-1-1h15v15H-1z' />
                <path fill='currentColor' fillRule='nonzero' d='M10.875 10.875h-8.75v-8.75H6.5V.875H.875v11.25h11.25V6.5h-1.25v4.375zM7.75.875v1.25h2.244L3.85 8.269l.881.881 6.144-6.144V5.25h1.25V.875H7.75z'
                />
              </g>
            </svg>
          </Remote>
          <Remote rel="noopener" href="https://www.linkedin.com/in/marketa-svid" target="_blank">
            L
          </Remote>
        </Links>
      </Header>
    )}}
  />
)

