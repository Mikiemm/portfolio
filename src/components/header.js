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
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1.5C4.41563 1.5 1.5 4.41563 1.5 8C1.5 11.5844 4.41563 14.5 8 14.5C11.5844 14.5 14.5 11.5844 14.5 8C14.5 4.41563 11.5844 1.5 8 1.5ZM12.2984 4.49687C13.0719 5.44219 13.5406 6.64531 13.5516 7.95625C13.3687 7.91719 11.5328 7.54531 9.68594 7.77812C9.64688 7.68281 9.60781 7.5875 9.56719 7.49219C9.45156 7.22188 9.32813 6.95156 9.19844 6.6875C11.25 5.84844 12.1812 4.65625 12.2984 4.49687ZM8 2.45625C9.41094 2.45625 10.7 2.98594 11.6797 3.85469C11.5797 3.99687 10.7437 5.12031 8.77031 5.86094C7.86094 4.18906 6.85313 2.81719 6.69844 2.61094C7.125 2.50781 7.56094 2.45625 8 2.45625V2.45625ZM5.63906 2.98438C5.78594 3.18438 6.77813 4.56094 7.69688 6.19531C5.1 6.88437 2.8125 6.875 2.56406 6.87187C2.925 5.14844 4.08594 3.71719 5.63906 2.98438ZM2.44844 8.00781C2.44844 7.95156 2.45 7.89375 2.45156 7.8375C2.69375 7.84219 5.38437 7.87656 8.15781 7.04688C8.31719 7.35781 8.46875 7.67344 8.60781 7.98906C8.53438 8.00937 8.46094 8.03125 8.38906 8.05469C5.525 8.98281 4.00156 11.5062 3.875 11.7203C2.98906 10.7359 2.44844 9.43438 2.44844 8.00781ZM8 13.5594C6.71563 13.5594 5.53281 13.1219 4.59219 12.3875C4.69219 12.1828 5.81562 10.0125 8.94687 8.92031L8.98281 8.90781C9.7625 10.9328 10.0844 12.6312 10.1672 13.1187C9.48228 13.4115 8.74484 13.5614 8 13.5594V13.5594ZM11.1016 12.6109C11.0453 12.2734 10.75 10.6484 10.0234 8.65312C11.7641 8.375 13.2922 8.83125 13.4812 8.89062C13.2344 10.4344 12.3484 11.7687 11.1016 12.6109V12.6109Z" fill="#455664"/>
            </svg>
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

