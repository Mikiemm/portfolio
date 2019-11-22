import styled from '@emotion/styled'
import { colors } from './theme'
import Img from 'gatsby-image'

export const Avatar = styled(Img)`
  border-radius: 100%;
  flex-shrink: 0;
  margin-left: -3px;
`

export const Header = styled('main')`
  background: ${colors.bg};
  padding: 0 72px 45px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: sticky;

  top: 0;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);

  @media (max-width: 1024px) {
    position: static;
    height: auto;
    max-height: 80vh;
    padding: 144px 50px 50px;
  }

  @media (max-width: 800px) {
    position: static;
    height: auto;
    padding: 144px 2em 2em;
    max-height: 80vh;
  }

`

export const Name = styled.h1`
  font-size: 30px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  font-family: 'museo-sans', sans-serif;
  font-weight: 900;
  letter-spacing: 0.5px;
  color: ${colors.grey};
  word-spacing: 100vw;
  padding-right: 105px;
  &:after {
    display: block;
    content: "";
    width: 2em;
    height: 2px;
    background: currentColor;
    margin: 0.5em 0 0.6em;
  }
`

export const Description = styled.p`
  font-family: museo-sans, sans-serif;  
  font-size: 18px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.59;
  letter-spacing: 1px;
  color: ${colors.grey};
  margin-top: -20px;
`

const Link = styled.a`
  font-family: museo-sans, sans-serif;
  font-size: 15px;
  font-weight: 700;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.6;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  color: ${colors.grey};
  transition: color 0.3s;
  display: inline-flex;
  align-items: center;

  margin-right: 1rem;

  & svg {
    margin-left: 3px;
  }
  
  &:hover {
    color: ${colors.black};
  }
`

export const Links = styled.div`
  margin-bottom: 32px;
`

export const Remote = styled(Link)`
  display: inline-block;
`

export const Email = styled(Link)`
  display: block;
`
