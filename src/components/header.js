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
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.81875 7.13125C3.09687 5.80625 3.9875 4.70312 5.18437 4.14062C5.29687 4.29375 6.05938 5.35312 6.76875 6.60938C4.76875 7.14062 3.00937 7.13437 2.81875 7.13125V7.13125ZM9.83125 4.8125C8.78125 3.88125 7.35312 3.52813 6 3.85625C6.11875 4.01563 6.89375 5.07187 7.59375 6.35625C9.1125 5.78437 9.75313 4.92188 9.83125 4.8125ZM4.37813 11.375C5.64375 12.3625 7.29375 12.5219 8.66875 11.9375C8.60625 11.5625 8.35625 10.2562 7.75625 8.7C6.03437 9.2875 4.825 10.4625 4.37813 11.375ZM7.46562 7.99375C7.35937 7.75 7.24063 7.50938 7.11875 7.26875C4.9875 7.90625 2.91875 7.88125 2.73125 7.875C2.73125 7.91875 2.72813 7.9625 2.72813 8.00625C2.72813 9.10313 3.14375 10.1031 3.825 10.8625C4.51875 9.67813 5.92187 8.42813 7.46562 7.99375V7.99375ZM8.55625 8.50313C9.11562 10.0375 9.34062 11.2875 9.38437 11.5469C10.3437 10.9 11.025 9.87187 11.2156 8.68437C11.0719 8.6375 9.89375 8.2875 8.55625 8.50313V8.50313ZM7.92188 6.99062C8.07188 7.29687 8.18125 7.54688 8.29688 7.82812C9.71875 7.65 11.1313 7.93437 11.2719 7.96562C11.2625 6.95625 10.9031 6.03125 10.3062 5.30625C10.2156 5.42813 9.5 6.34375 7.92188 6.99062V6.99062ZM14 2.5V13.5C14 14.3281 13.3281 15 12.5 15H1.5C0.671875 15 0 14.3281 0 13.5V2.5C0 1.67188 0.671875 1 1.5 1H12.5C13.3281 1 14 1.67188 14 2.5ZM12 8C12 5.24375 9.75625 3 7 3C4.24375 3 2 5.24375 2 8C2 10.7562 4.24375 13 7 13C9.75625 13 12 10.7562 12 8Z" fill='currentColor' fillRule='nonzero'/>
            </svg>
          </Remote>
          <Remote rel="noopener" href="https://www.linkedin.com/in/marketa-svid" target="_blank">
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 1H0.996875C0.446875 1 0 1.45313 0 2.00938V13.9906C0 14.5469 0.446875 15 0.996875 15H13C13.55 15 14 14.5469 14 13.9906V2.00938C14 1.45313 13.55 1 13 1ZM4.23125 13H2.15625V6.31875H4.23438V13H4.23125ZM3.19375 5.40625C2.52812 5.40625 1.99063 4.86563 1.99063 4.20312C1.99063 3.54062 2.52812 3 3.19375 3C3.85625 3 4.39687 3.54062 4.39687 4.20312C4.39687 4.86875 3.85937 5.40625 3.19375 5.40625V5.40625ZM12.0094 13H9.93437V9.75C9.93437 8.975 9.91875 7.97813 8.85625 7.97813C7.775 7.97813 7.60938 8.82188 7.60938 9.69375V13H5.53438V6.31875H7.525V7.23125H7.55312C7.83125 6.70625 8.50938 6.15312 9.51875 6.15312C11.6188 6.15312 12.0094 7.5375 12.0094 9.3375V13V13Z" fill='currentColor' fillRule='nonzero'/>
            </svg>
          </Remote>
        </Links>
      </Header>
    )}}
  />
)

