/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { colors, containerWidth } from '../theme'

export const Header = () => {
  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        height: 100px;
        max-width: ${containerWidth};
        margin: 0 auto;
        font-family: Urbane, sans-serif;
      `}
    >
      <h1
        css={css`
          flex-grow: 1;
          font-size: 1em;
          font-weight: 600;
          color: ${colors.gray900};
        `}
      >
        Markéta Švidrnochová
      </h1>
      <nav
        css={css`
          a {
            font-weight: 500;
            margin-left: 3em;
            text-decoration: none;
            color: ${colors.gray900};
            text-transform: lowercase;
          }

          a:hover {
            color: ${colors.purple700};
          }
        `}
      >
        <a href="/">Work</a>
        <a href="/">About</a>
        <a href="mailto:hello@marketa.page">hello@marketa.page</a>
      </nav>
    </div>
  )
}
