import styled from 'styled-components';

const StyledDiv = styled.div`
  .webcam-container {
    position: relative;
  }
  .capture-button-logo {
    position: absolute;
    top: 45%;
    left: 45%;
    max-width: 15%;
    filter: invert(86%) sepia(37%) saturate(2959%) hue-rotate(114deg) brightness(100%) contrast(91%)
      opacity(35%);
  }
  .capture-button {
    margin-bottom: 10%;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

export default StyledDiv;
