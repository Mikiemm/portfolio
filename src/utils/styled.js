import { css } from "@emotion/core"

export const applyTheme = (defaultProps) => (userProps) => {
  const props = { ...defaultProps, ...userProps }
  const theme = props.theme ?? {}

  let result = {}
  for (const key in theme) {
    if (props[key]) {
      const value = theme[key][props[key]] ?? props[key]
      let style = null

      if (typeof value === "string") {
        style = { [key]: value }
      } else if (typeof value === "function") {
        style = value(props)
      }

      result = css`
        ${result}
        ${style}
      `
    }
  }

  return result
}
