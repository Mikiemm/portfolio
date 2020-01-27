/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { colors, containerWidth, fonts, grid, typography } from "../theme"

export const NextProject = ({ name, desc, link }) => {
  return (
    <a
      href={link}
      css={css`
        height: 240px;
        display: block;
        text-decoration: none;
        position: relative;
        background: ${colors.purple900};
      `}
    >
      <img
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        `}
        src="https://unsplash.it/800/200"
      />
      <span
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: ${colors.purple900};
          opacity: 0.9;
        `}
      />
      <div
        css={css`
          ${grid}
          height: 100%;
          max-width: ${containerWidth};
          margin: 0 auto;
          position: relative;
        `}
      >
        <span
          css={css`
            ${typography.h2}
            grid-column-start: 1;
            grid-column-end: span 6;

            margin: 0;
            padding: 0;

            align-self: center;
            color: ${colors.white};
          `}
        >
          Next Project
        </span>
        <div
          css={css`
            grid-column-start: 7;
            grid-column-end: span 6;
            display: flex;
            align-self: center;
            align-items: center;
          `}
        >
          <div
            css={css`
              flex-grow: 1;
            `}
          >
            <p
              css={css`
                ${typography.h1}
                color: ${colors.white};
                margin: 0;
              `}
            >
              {name}
            </p>
            <span
              css={css`
                ${typography.title}
                display: block;
                margin-top: 24px;
                color: ${colors.white};
              `}
            >
              {desc}
            </span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="68"
            height="68"
            fill="none"
            viewBox="0 0 68 68"
            css={css`
              display: block;
            `}
          >
            <path
              fill="#fff"
              d="M24.338 46.977L37.315 34 24.338 20.995 28.333 17l17 17-17 17-3.995-4.023z"
            />
          </svg>
        </div>
      </div>
    </a>
  )
}
