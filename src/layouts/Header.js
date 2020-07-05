import styled from "@emotion/styled"
import Link from "next/link"
import { Typography } from "../components/Typography"

const HeaderContainer = styled.header`
  margin: 0 auto;
  padding: 0 40px;
  height: 100px;

  display: flex;
  align-items: center;
`

const HeaderLogo = styled.div`
  flex-grow: 1;
`

const HeaderNav = styled.nav`
  display: flex;
  & > *:not(:last-child) {
    margin-right: 48px;
  }
`

const HeaderItem = styled(Typography.Menu)`
  color: ${({ theme }) => theme.color.gray700};
  text-decoration: none;
  flex-shrink: 0;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const HeaderNavItem = styled(HeaderItem)`
  text-transform: lowercase;
`

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <Link href="/" passHref>
          <HeaderItem>Markéta Švidrnochová</HeaderItem>
        </Link>
      </HeaderLogo>
      <HeaderNav>
        <Link href="/work" passHref>
          <HeaderNavItem>Work</HeaderNavItem>
        </Link>
        <Link href="/about" passHref>
          <HeaderNavItem>About</HeaderNavItem>
        </Link>
        <HeaderNavItem>hello@marketa.page</HeaderNavItem>
      </HeaderNav>
    </HeaderContainer>
  )
}
