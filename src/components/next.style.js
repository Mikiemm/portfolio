import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { colors } from './theme';

export const Wrapper = styled.div`
  margin-top: 4em;
  padding: 4em 0;
  background: ${colors.lightgrey};
`
export const Content = styled.div`
  max-width: 800px;
  width: calc(100% - 4em);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const AllProjectsLink = styled(Link)`
  font-family: Poppins, sans-serif;
  font-size: 15px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.6;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  color: ${colors.grey};
  transition: color 0.3s;

  align-self: flex-end;

  &:hover, &:active {
    color: ${colors.black};
  }

  & svg {
    margin-right: 6px;
  }
`;

export const Header = styled.h2`
  font-size: 28px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin: 0;
  color: ${colors.black};
`

export const Projects = styled.div`
  display: grid;
  grid-template: 1fr / 1fr 1fr 1fr;
  margin: 3em 0;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const Title = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  text-decoration: none;
  line-height: 1.33;
  letter-spacing: 2px;
  margin: 1em;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  opacity: 0;
  transition: opacity 0.3s;

  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 1;

  color: ${colors.black};
`;

export const Background = styled.div`
  flex-grow: 1;
  justify-content: center;
  position: absolute;
  top: 1em;
  left: 1em;
  right: 1em;
  bottom: 1em;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s;
  filter: grayscale(0%);
`;


export const ImgSharp = styled(Img)`
  margin: 0 auto;
  position: absolute !important;
  top: 0; left: 0; right: 0; bottom: 0;
  ${({ original: { width } }) => `
    max-width: ${width}px;
  `}

  img {
    object-fit: contain !important;
  }
`;

export const ImgUrl = styled.img`
  object-fit: contain;
  object-position: center center;

  display: block;
  margin: 0 auto;

  position: absolute;
  width: 100%;
  height: 100%;
  top: 0; left: 0; right: 0; bottom: 0;
`


export const Item = styled(Link)`
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  
  &:before {
    padding-bottom: calc(100% / (4/3));
    width: 100%;
    content: "";
    display: block;
    height: 0;
  }

  &:hover ${Title} {
    opacity: 1;
  }

  &:hover ${Background} {
    opacity: 0.1;
    transform: scale(0.8);
    filter: grayscale(100%);
  }
`;
