import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .img-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .title {
    color: var(--primary-color);
    text-align: center;
  }

  .logo-green {
    max-width: 50%;
    filter: invert(86%) sepia(37%) saturate(2959%) hue-rotate(114deg) brightness(100%) contrast(91%);
  }

  .logo-purple {
    max-width: 50%;
    filter: invert(33%) sepia(69%) saturate(1652%) hue-rotate(218deg) brightness(101%) contrast(99%);
  }
`;
