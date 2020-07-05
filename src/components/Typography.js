import styled from "@emotion/styled"
import { applyTheme } from "utils/styled"

export const Typography = {
  H1: styled.h1(
    applyTheme({
      font: "h1",
    })
  ),
  H2: styled.h2(
    applyTheme({
      font: "h2",
    })
  ),
  H3: styled.h3(
    applyTheme({
      font: "h3",
    })
  ),
  Paragraph: styled.p(
    applyTheme({
      font: "p",
    })
  ),
  Secondary: styled.p(
    applyTheme({
      font: "secondary",
    })
  ),
  Menu: styled.span(
    applyTheme({
      font: "menu",
    })
  ),
}
