import React from 'react'
import { graphql } from 'gatsby'


export const frontmatter = {
  name: 'test',
}

export default ({ data, images }) => {
  return (
    <div>
      <h1>Hello world</h1>
    </div>
  )
}

