import styled from 'styled-components';
import bgImg from '../../../assets/landing-background-wide.png';
export const Container = styled.div`
  ${({ theme }) => theme.flex('row', 'center', 'center')}

  width: 100%;
  height: 100vh;

  background-image: url(${bgImg});
  background-position: center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  div#font-picker {
    /* background-color: transparent; */
    button {
      background-color: transparent;
      p.dropdown-font-family {
        font-family: 'Tangerine';
        font-size: 2rem;
      }
    }
  }

  /* border: 1px solid white; */
`;

export const HeaderContainer = styled.div`
  ${({ theme }) => theme.flex('column', 'center', 'flex-end')}

  width: 50%;
  height: 100vh;

  /* border: 1px solid white; */

  h1 {
    margin-right: 35px;
    font-size: 12rem;
    color: #f3e1d0;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.75);
    text-align: center;
  }
`;

export const FormContainer = styled.div`
  ${({ theme }) => theme.flex('column', 'center', 'flex-start')}
  width: 50%;
  height: 100vh;

  background: radial-gradient(
    500px at 50% 50%,
    rgba(0, 0, 0, 0.88) 0%,
    rgba(0, 0, 0, 0) 100%
  );

  /* border: 1px solid white; */
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => theme.flex('column', 'center', 'center')}

  margin-left: 260px;

  button {
    border: none;
    outline: none;

    color: #f3e1d0;
    font-size: 8rem;
    font-family: 'Tangerine';
    font-weight: 700;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.75);

    background-color: transparent;

    cursor: pointer;
  }
`;
