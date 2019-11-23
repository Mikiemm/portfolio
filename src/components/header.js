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
          <Remote rel="noopener" href="https://www.linkedin.com/in/marketa-svid" target="_blank">
            <svg width="18" height="20" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 1H0.996875C0.446875 1 0 1.45313 0 2.00938V13.9906C0 14.5469 0.446875 15 0.996875 15H13C13.55 15 14 14.5469 14 13.9906V2.00938C14 1.45313 13.55 1 13 1ZM4.23125 13H2.15625V6.31875H4.23438V13H4.23125ZM3.19375 5.40625C2.52812 5.40625 1.99063 4.86563 1.99063 4.20312C1.99063 3.54062 2.52812 3 3.19375 3C3.85625 3 4.39687 3.54062 4.39687 4.20312C4.39687 4.86875 3.85937 5.40625 3.19375 5.40625V5.40625ZM12.0094 13H9.93437V9.75C9.93437 8.975 9.91875 7.97813 8.85625 7.97813C7.775 7.97813 7.60938 8.82188 7.60938 9.69375V13H5.53438V6.31875H7.525V7.23125H7.55312C7.83125 6.70625 8.50938 6.15312 9.51875 6.15312C11.6188 6.15312 12.0094 7.5375 12.0094 9.3375V13V13Z" fill='currentColor' fillRule='nonzero'/>
            </svg>
          </Remote>
          <Remote rel="noopener" href="https://dribbble.com/marketa" target="_blank">
            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0.25C3.72662 0.25 0.25 3.72662 0.25 8C0.25 12.2734 3.72662 15.75 8 15.75C12.2734 15.75 15.75 12.2734 15.75 8C15.75 3.72662 12.2734 0.25 8 0.25ZM13.1241 3.82394C14.046 4.95037 14.6043 6.38509 14.6189 7.94753C14.4007 7.90137 12.2121 7.45747 10.0095 7.73447C9.82972 7.29569 9.66006 6.90969 9.42769 6.43403C11.8752 5.43475 12.9845 4.01272 13.1241 3.82394V3.82394ZM12.3882 3.05844C12.2691 3.22803 11.2726 4.56738 8.91875 5.44966C7.834 3.45666 6.63172 1.81941 6.44875 1.57441C8.548 1.06837 10.7602 1.61409 12.3882 3.05844V3.05844ZM5.18566 2.01938C5.36019 2.25872 6.54309 3.898 7.63994 5.84778C4.54347 6.67006 1.81619 6.65822 1.52013 6.65431C1.94938 4.60016 3.33369 2.89291 5.18566 2.01938ZM1.38031 8.01009C1.38031 7.94241 1.38166 7.87503 1.38369 7.80781C1.67331 7.81375 4.88119 7.85509 8.187 6.86575C8.3765 7.23662 8.55753 7.61309 8.72369 7.98916C6.32997 8.66338 4.15513 10.5994 3.08209 12.4362C2.02481 11.2627 1.38031 9.71031 1.38031 8.01009ZM3.93678 13.2324C4.62825 11.8188 6.50484 9.99419 9.17362 9.08375C10.103 11.4988 10.4873 13.5229 10.5858 14.1037C8.45728 15.0103 5.89781 14.7616 3.93678 13.2324V13.2324ZM11.6987 13.4977C11.6308 13.095 11.2785 11.1571 10.4127 8.77787C12.487 8.44581 14.3095 8.98937 14.536 9.06084C14.2409 10.9027 13.1837 12.4935 11.6987 13.4977Z" fill='currentColor' fillRule='nonzero'/>
            </svg>
          </Remote>
        </Links>
      </Header>
    )}}
  />
)

