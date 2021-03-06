import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Underline, { activeStyle } from './underline'
import Img from 'gatsby-image'

export const List = styled.main`
  overflow: hidden;
  overflow-y: auto;
`;
export const ImageContainer = styled.div`
  flex-grow: 1;
  justify-content: center;
  padding: 50px;
  padding-bottom: 30px;


  @media (max-width: 800px) {
    padding: 2em;
  }

  > img {
    object-fit: contain;
    display: block;
    margin: 0 auto;
    max-width: 100%;
    max-height: calc(80vh - 50px);
  }
`;
export const Title = styled.h2`
  font-family: 'museo-sans', sans-serif;
  font-size: 30px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  text-decoration: none;
  line-height: 1.33;
  letter-spacing: 2px;
  margin: 0;
  
  display: block;
`;
export const Type = styled.h3`
  font-family: museo-sans, sans-serif;
  font-size: 15px;
  font-weight: 700;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.6;
  letter-spacing: 2px;
  margin: 0; padding: 0;
`;
export const Heading = styled.div`
  display: flex;
  padding: 20px 50px 40px;
  flex-direction: column-reverse;

  @media (max-width: 800px) {
    padding: 2em;
    padding-top: 0.5em;
  }
`;
export const ItemContainer = styled(Link)`
  max-width: 100%;
  position: relative;
  background-size: cover;
  background-position: center center;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  text-transform: uppercase;
  ${props => props.theme}

  &:hover ${Underline} {
    ${activeStyle}
  }
`;
export const Content = styled.div`
  position: relative;
  z-index: 1;
`;
export const ImgWithSize = styled(Img)`
  margin: 0 auto;
  ${({ original: { width } }) => `
    max-width: ${width}px;
  `}
`;
export const ImgWithAspectRatio = styled.div`
  margin: 0 auto;
  ${({ aspectRatio }) => `
    max-width: calc(80vh * ${aspectRatio} - 150px);
  `}

  @media (max-width: 800px) {
    max-width: 100%;
  }
`;
export const ImgAsBackground = styled(Img)`
  position: absolute !important;
  top: 0; left: 0; right: 0; bottom: 0;
`;
