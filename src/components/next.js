import React from 'react'
import { Item, Background, ImgSharp, ImgUrl, Title, Header, Wrapper, Content, Projects, AllProjectsLink } from './next.style'

export default ({ next }) => {
  if (!next || next.length === 0) return null
  return (
    <Wrapper>


      <Content>
        <Header>Next projects</Header>
        <Projects>
          {next.map(({ node: { id, frontmatter: { title, path, cover: { image, url } } } }) => (
            <Item key={id} to={path}>
              <Background>
                { url && <ImgUrl src={url} alt={title} /> }
                { !url && image && <ImgSharp original={image.childImageSharp.original} fluid={image.childImageSharp.fluid} /> }
              </Background>
              <Title>{title}</Title>
            </Item>
          ))}
        </Projects>
        <AllProjectsLink to="/">
          <svg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 11 11'>
            <g fill='none' fillRule='evenodd'>
              <path d='M-2-3h15v15H-2z' />
              <path fill='currentColor' d='M10.5 4.875H2.894l3.493-3.494L5.5.5l-5 5 5 5 .881-.881-3.487-3.494H10.5z' />
            </g>
          </svg>
          Show all projects
        </AllProjectsLink>
      </Content>
    </Wrapper>
  )
}