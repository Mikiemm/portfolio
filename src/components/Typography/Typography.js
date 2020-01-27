/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { typography } from "../theme"

export const Title = ({ styles, children }) => (
  <h3
    css={css`
      ${typography.title}
      margin: 0;
      margin-bottom: 20px;
      padding: 0;
      ${styles}
    `}
  >
    {children}
  </h3>
)

export const Heading = ({ styles, children }) => (
  <p
    css={css`
      ${typography.h2}
      margin: 0;
      margin-bottom: 48px;
      padding: 0;
      ${styles}
    `}
  >
    {children}
  </p>
)

export const Text = ({ styles, children }) => (
  <p
    css={css`
      ${typography.p}
      margin: 0;
      margin-bottom: 20px;
      padding: 0;
      ${styles}
    `}
  >
    {children}
  </p>
)

export const RoleText = ({ styles, children }) => (
  <Text
    styles={css`
      font-weight: 700;
      line-height: 120%;
      ${styles}
    `}
  >
    {children}
  </Text>
)
