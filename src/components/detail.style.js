import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { colors } from './theme';

export const FullWidth = styled.span`
  display: block;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin: 40px -50vw;

  ${({ color }) => color ? `background-color: ${color};` : ''}

  & .gatsby-resp-image-image {
    box-shadow: none !important;
  }

  & p {
    margin: 0;
    padding: 0;
  }
`;
export const BackLink = styled(Link)`
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

  &:hover, &:active {
    color: ${colors.black};
  }

  & svg {
    margin-right: 6px;
  }
`;
export const HeaderLink = styled.span`
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

  & svg {
    margin-right: 6px;
  }

  &:hover, &:active {
    color: ${colors.black};
  }
`;
export const Content = styled.main`
  max-width: 720px;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.7;
  margin: 32px auto 0;
  letter-spacing: 0.4px;
  color: ${colors.black};

  h1 {
    font-family: Poppins, sans-serif;
    text-transform: uppercase;
    font-size: 44px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2em;
    letter-spacing: 2px;
    text-align: center;
    color: ${colors.black};

    &:after {
      margin: 0em 0 0;
      display: block;
      content: "—";
      line-height: 0.89em;
    }
  }

  h2 {
    font-family: Poppins, sans-serif;
    font-size: 40px;
    font-weight: 700;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.33;
    letter-spacing: 0.1px;
    margin: 0;
    padding: 50px 0 10px;
    color: ${colors.black};

    &:before {
      margin: 0em 0 0;
      display: block;
      content: "—";
      line-height: 0.8em;
    }
  }

  h3 {
    font-family: Poppins, sans-serif;
    font-size: 24px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.35;
    letter-spacing: 0.5px;
    margin: 0;
    padding: 20px 0 2px;
    color: ${colors.black};
  }

  h4 {
    margin-top: 15px;
    margin-bottom: -5px;
  }

  img {
    max-width: 100%;
    box-shadow: none !important;
  }

  p {
    font-family: Poppins, sans-serif;
    font-size: 16px;
    font-weight: 300;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: 0.1px;
    margin: 0;
    padding: 10px 0 10px;
    color: ${colors.grey};
  }

  ul {
    margin: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    color: ${colors.grey};
    list-style: none;
    padding-left: 2.5em;
    letter-spacing: 0.1px;
  }

  li::before {
    content: "—";
    display: inline-block;
    width: 1.5em;
    margin-left: -1.5em;
  }

  ol {
    margin: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #757575;
    letter-spacing: 0.1px;
  }

  b {
    font-weight: 500;
  }

  .iframe_mobile {
    margin: 0 auto;
    display: block;
  }

  .column {
    float: left;
    width: 33.33%;
    padding-right: 15px;
  }

  .row:after {
    content: "";
    display: table;
    clear: both;
  }

  @media screen and (max-width: 600px) {
    .column {
      width: 100%;
    }
  }

  ${BackLink} {
    display: block;
    text-align: center;
    margin-top: 64px;
  }
`;
export const Detail = styled.div`
  max-width: 1200px;
  width: calc(100% - 4em);
  margin: 60px auto 32px;

  @media (max-width: 800px) {
    margin-top: 2em;
  }
`;
export const NoHorizontalScroll = styled.div`
  overflow-x: hidden;
`;
export const Header = styled(Link)`
  font-size: 1em;
  margin-right: 72px;
  margin-left: 72px;
  margin-top: 80px;
  margin-bottom: 0;
  display: block;
  text-decoration: none;

  @media (max-width: 800px) {
    margin: 2em;
    margin-bottom: 4em;
  }
`;
export const Name = styled.p`
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: ${colors.black};
  word-spacing: 100vw;
  margin-bottom: 10px;
`;
