import { css } from "@emotion/core"

export const colors = {
  white: "#FFFFFF",
  gray100: "#FBFBFB",
  gray700: "#404040",
  gray900: "#1A1A1A",
  purple700: "#323CB7",
  purple900: "#060E66",
  lus700: "#005AB5",
  lus900: "#004DA6",
}

export const containerWidth = "1040px"

export const fonts = {
  nimbus: css`
    font-family: "nimbus-sans", sans-serif;
  `,
  urbane: css`
    font-family: Urbane, sans-serif;
  `,
}

export const grid = css`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
`

export const typography = {
  h1: css`
    ${fonts.urbane}
    font-style: normal;
    font-weight: bold;
    font-size: 3.25rem;
    line-height: 110%;
    color: ${colors.gray900};
  `,
  h2: css`
    ${fonts.urbane}
    font-style: normal;
    font-weight: 500;
    font-size: 1.625rem;
    line-height: 150%;
    color: ${colors.gray900};
  `,
  title: css`
    ${fonts.nimbus}
    font-style: normal;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 150%;

    letter-spacing: 0.08rem;
    text-transform: uppercase;
    color: ${colors.gray700};
  `,
  p: css`
    ${fonts.nimbus}
    font-style: normal;
    font-size: 1.125rem;
    line-height: 170%;
    color: ${colors.gray700};
  `
}
