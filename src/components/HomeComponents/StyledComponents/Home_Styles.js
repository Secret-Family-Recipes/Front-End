import styled from 'styled-components';
import bgImg from '../../../assets/main-background-wide.png';

export const Container = styled.div`
  ${({ theme }) => theme.flex('row')}
  width: 100%;
  height: 100vh;

  background-image: url(${bgImg});
  background-position: center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export const LeftPage = styled.div`
  ${({ theme }) => theme.flex('column', 'flex-start', 'flex-end')}

  width: 51%;
  height: 100vh;

  /* border: 1px solid white; */

  div {
    ${({ theme }) => theme.flex('column', 'flex-start', 'center')}
    width: 630px;
    height: 830px;

    padding: 20px 10px;

    /* border: 1px solid white; */

    margin-top: 40px;
    margin-right: 20px;

    h2 {
      border-bottom: 2px solid black;
    }

    nav {
      ${({ theme }) => theme.flex('column', 'flex-start', 'flex-start')}

      width: 100%;

      /* border: 1px solid white; */

      padding-top: 20px;

      a {
        margin-bottom: 10px;

        color: black;
        text-decoration: none;
        font-size: ${({ theme }) => theme.fontSizing.m};
        font-weight: 400;

        span:hover {
          border-bottom: 2px solid black;
        }
      }
    }
  }
`;

export const RightPage = styled.div`
  ${({ theme }) => theme.flex('column', 'flex-start', 'flex-start')}
  width: 49%;
  height: 100vh;

  /* border: 1px solid white; */

  div {
    ${({ theme }) => theme.flex('column', 'flex-start', 'center')}
    width: 600px;
    height: 830px;

    padding: 20px 10px;

    border: 1px solid white;

    margin-top: 40px;
    margin-left: 20px;
  }
`;
