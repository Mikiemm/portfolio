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
    padding: 0 !important;
  }
`;
export const BackLink = styled(Link)`
  font-family: museo-sans, sans-serif;
  font-size: 15px;
  font-weight: 700;
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
  font-family: museo-sans, sans-serif;
  font-size: 15px;
  font-weight: 700;
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
  font-family: museo-sans, sans-serif;
  font-size: 16px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.7;
  margin: 32px auto 0;
  letter-spacing: 0.4px;
  color: ${colors.black};

  h1 {
    font-family: museo-sans, sans-serif;
    text-transform: uppercase;
    font-size: 44px;
    font-weight: 900;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2em;
    letter-spacing: 2px;
    text-align: center;
    color: ${colors.black};

    &:after {
      display: block;
      content: "";
      width: 2em;
      height: 3px;
      background: currentColor;
      margin: 0.6em auto;
    }
  }

  h2 {
    font-family: museo-sans, sans-serif;
    font-size: 40px;
    font-weight: 900;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.33;
    letter-spacing: 0.1px;
    margin: 0;
    padding: 50px 0 10px;
    color: ${colors.black};

    &:after {
      display: block;
      content: "";
      width: 2em;
      height: 3px;
      background: currentColor;
      margin: 0.5em 0;
    }
  }

  h3 {
    font-family: museo-sans, sans-serif;
    font-size: 24px;
    font-weight: 700;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.35;
    letter-spacing: 0.5px;
    margin: 0;
    padding: 20px 0 10px;
    color: ${colors.black};
  }

  h4 {
    margin-top: 15px;
    margin-bottom: -5px;
    color: ${colors.black};
    font-weight: 700;
    letter-spacing: 0px;
    font-size: 18px;
  }

  img {
    max-width: 100%;
    box-shadow: none !important;
  }

  p {
    font-family: museo-sans, sans-serif;
    font-size: 18px;
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
    padding-top: 6px;
    padding-bottom: 6px;
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

  strong {
    font-weight: 700;
  }

  .column_3 {
    float: left;
    width: 33.33%;
    padding-right: 15px;
  }

  .column_2 {
    float: left;
    width: 50%;
    padding-right: 40px;
  }

  .column_15 {
    float: left;
    width: 15%;
    padding-right: 40px;
  }

  .column_85 {
    float: left;
    width: 85%;
  }

  .row:after {
    content: "";
    display: table;
    clear: both;
  }

  .table {
    margin-top: 20px;
    margin-bottom: 50px;
  }

  .inside_bg {
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
    padding-bottom: 20px;
    width: calc(100% - 4em);
  }

  .inside_bg_inverted {
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
    padding-bottom: 20px;
    width: calc(100% - 4em);
  }

  .inside_bg_inverted h2 {
      color: white;
  }

  .inside_bg_inverted h3 {
      color: white;
  }

  .inside_bg_inverted h4 {
      color: white;
  }

  .inside_bg_inverted p {
      color: #eeeeee;
  }

  #container {
  width:  100%;
  height: auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  }

  @media screen and (max-width: 600px) {
    .column_2 {
      width: 100%;
    }

    .column_3 {
      width: 100%;
    }

    .column_15 {
      width: 35%;
    }

    .column_85 {
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
  font-family: 'museo-sans', sans-serif;
  font-weight: 900;
  letter-spacing: 0.5px;
  color: ${colors.black};
  word-spacing: 100vw;
  margin-bottom: 10px;
`;
