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

  border: 1px solid white;

  form {
    ${({ theme }) => theme.flex('column', 'flex-start', 'flex-start')}
    width: 630px;
    height: 830px;

    padding: 20px 10px;

    border: 1px solid white;

    margin-top: 40px;
    margin-right: 20px;

    h2 {
      align-self: center;
      border-bottom: 2px solid black;
    }

    h4 {
      border-bottom: 2px solid black;
    }

    input {
      width: 100%;
      margin: 10px 0;
      padding: 0 2px;

      border: none;
      outline: none;
      border-bottom: 1px solid black;
      border-radius: 3px;

      font-family: 'Tangerine', sans-serif;
      font-size: 3rem;

      background: rgba(255, 255, 255, 0.25);

      ::placeholder {
        color: black;
      }

      :focus::placeholder {
        color: transparent;
      }
    }

    input.title {
      font-size: 3.5rem;
    }
    input.author {
      width: 40%;
    }

    input.image {
      width: 50%;
      height: 200px;
      align-self: flex-end;
    }
  }
`;

const NewIngredient = styled.div`
  ${({ theme }) => theme.flex('row', 'flex-start')}
  width: 50%;
`;

export const RightPage = styled.div`
  ${({ theme }) => theme.flex('column', 'flex-start', 'flex-start')}
  width: 49%;
  height: 100vh;

  border: 1px solid white;

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
