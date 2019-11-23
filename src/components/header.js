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
            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.0953 5.76078C6.0953 6.50313 5.49166 7.10482 4.75127 7.10482C4.00697 7.10482 3.40528 6.50313 3.40723 5.76078C3.40723 5.58428 3.442 5.40951 3.50954 5.24644C3.57708 5.08338 3.67608 4.93521 3.80089 4.81041C3.9257 4.6856 4.07386 4.5866 4.23693 4.51906C4.39999 4.45151 4.57477 4.41675 4.75127 4.41675C4.92777 4.41675 5.10254 4.45151 5.26561 4.51906C5.42868 4.5866 5.57684 4.6856 5.70165 4.81041C5.82645 4.93521 5.92545 5.08338 5.993 5.24644C6.06054 5.40951 6.0953 5.58428 6.0953 5.76078Z" fill='currentColor' fillRule='nonzero'/>
              <path d="M5.90972 8.12457H3.59086V15.5832H5.90972V8.12457Z" fill='currentColor' fillRule='nonzero'/>
              <path d="M9.68005 11.893C9.68005 10.9201 9.86564 9.97848 11.071 9.97848C12.2587 9.97848 12.2763 11.09 12.2763 11.9555V15.5832H14.5932V11.4925C14.5932 9.48424 14.1595 7.93898 11.8133 7.93898C10.6861 7.93898 9.93011 8.55826 9.6195 9.14432H9.58824V8.12457H7.36315V15.5832H9.68005V11.893Z" fill='currentColor' fillRule='nonzero'/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.44675 1H16.5532C17.352 1 18 1.648 18 2.44675V17.5532C18 18.352 17.352 19 16.5532 19H1.44675C0.648 19 0 18.352 0 17.5532V2.44675C0 1.648 0.648 1 1.44675 1ZM1.44 17.5532C1.44 17.5532 6.47775 17.5577 16.5532 17.56C16.5532 17.56 16.5578 12.5222 16.56 2.44675C16.56 2.44675 11.5222 2.44225 1.44675 2.44C1.44675 2.44 1.44225 7.47775 1.44 17.5532Z" fill='currentColor' fillRule='nonzero'/>
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

