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
    font-size: larger;
  }

  .preview-url {
    font-size: x-small;
  }

  .image-element {
    max-width: 20rem;
    height: auto;
  }
`;
