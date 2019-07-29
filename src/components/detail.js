import React from 'react'
import rehypeReact from 'rehype-react'
import { graphql, StaticQuery } from 'gatsby'

import Next from './next'
import { FullWidth, NoHorizontalScroll, Header, Name, HeaderLink, Detail, Content, BackLink } from './detail.style'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'full-width': FullWidth,
  }
}).Compiler

export default ({ htmlAst, next }) => {
  return (
    <NoHorizontalScroll>
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata { title }
            }
          }
        `}
        render={({ site: { siteMetadata: { title }}}) => (
          <Header to="/">
            <Name>{title}</Name>
            <HeaderLink to="/">
              <svg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 11 11'>
                <g fill='none' fillRule='evenodd'>
                  <path d='M-2-3h15v15H-2z' />
                  <path fill='currentColor' d='M10.5 4.875H2.894l3.493-3.494L5.5.5l-5 5 5 5 .881-.881-3.487-3.494H10.5z' />
                </g>
              </svg>
              show all projects
            </HeaderLink>
          </Header>
        )}
      />
      <Detail>
        <Content>
          { renderAst(htmlAst) }
          { (!next || next.length === 0) && <BackLink to="/">Show all projects</BackLink> }
        </Content>
      </Detail>
      <Next next={next} />
    </NoHorizontalScroll>
  )
}