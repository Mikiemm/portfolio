/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { colors, containerWidth, fonts, grid, typography } from "../theme"

export const Footer = () => {
  return (
    <div
      css={css`
        ${grid}
        max-width: ${containerWidth};
        padding: 100px 0;
        margin: 0 auto;
      `}
    >
      <h2
        css={css`
          ${typography.h1}
          grid-column-start: 1;
          grid-column-end: span 6;
          margin: 0;
          padding: 0;
        `}
      >
        Get in touch
      </h2>
      <div
        css={css`
          grid-column-start: 7;
          grid-column-end: span 6;

          display: flex;
          flex-direction: column;
        `}
      >
        <p
          css={css`
            ${typography.p}
            color: #595959;
            margin: 0;
            margin-bottom: 40px;
          `}
        >
          Getting good at anything takes a long time and it's usually a{" "}
          <strong>pretty arduous process.</strong> Reddit founder Alexis Ohanian
          reminds us that no matter.
        </p>
        <nav
          css={css`
            a {
              ${typography.title}
              text-decoration: none;
              margin-right: 28px;

              color: ${colors.purple700};
            }
          `}
        >
          <a href="mailto:hello@marketa.page">hello@marketa.page</a>
          <a href="/">Resume</a>
          <a href="/">LinkedIn</a>
          <a href="/">Dribble</a>
        </nav>
      </div>
    </div>
  )
}
