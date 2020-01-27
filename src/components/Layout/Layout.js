/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { grid, containerWidth, typography } from "../theme"

export const Container = ({ styles, children }) => (
  <div
    css={css`
      max-width: ${containerWidth};
      margin: 0 auto;

      ${styles}
    `}
  >
    {children}
  </div>
)
export const Grid = ({ styles, children }) => (
  <div
    css={css`
      ${grid}
      ${styles}
    `}
  >{children}</div>
)

export const Box = ({ start, width, styles, children }) => (
  <div
    css={css`
      grid-column-end: span ${width};
      grid-column-start: ${start ?? 'initial'};
      ${styles}
    `}
  >{children}</div>
)
