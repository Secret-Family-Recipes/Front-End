import styled from 'styled-components';

export const Form = styled.form`
  ${({ theme }) => theme.flex('column', 'center', 'center')}

  width: 500px;
  height: 500px;

  margin-left: 115px;

  /* border: 1px solid white; */

  input {
    width: 80%;
    background-color: transparent;
    border: none;
    outline: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightBrown};

    color: ${({ theme }) => theme.colors.lightBrown};
    font-size: 4rem;
    font-family: 'Tangerine', sans-serif;

    margin-bottom: 20px;

    ::placeholder {
      color: ${({ theme }) => theme.colors.lightBrown};
    }

    :focus::placeholder {
      color: transparent;
    }
  }
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => theme.flex('row', 'space-between', 'center')}

  width: 70%;
  margin-top: 10px;

  button {
    border: none;
    outline: none;

    color: #f3e1d0;
    font-size: 3rem;
    font-family: 'Tangerine';
    font-weight: 700;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.75);

    background-color: transparent;

    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;
