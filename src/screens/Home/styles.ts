import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const StyledPreviwContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  .help-text {
    color: var(--primary-color);
    font-size: larger;
    text-align: center;
  }

  .preview-url {
    color: var(--secondary-color);
    font-size: x-small;
    text-align: center;
  }

  .image-element {
    max-width: 20rem;
    height: auto;
  }

  .create-another-thumnail {
    color: var(--primary-color);
    text-decoration: underline;
    font-size: smaller;
    cursor: pointer;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const StyledDivLogoutButton = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 15%;
`;
