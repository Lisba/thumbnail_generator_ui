import styled from 'styled-components';

const StyleDragSection = styled.div`
  .image-upload-container {
    border: 4px dashed #d0d7de;
    position: relative;
    margin-bottom: 2em;
  }
  .image-upload-container:hover {
    background-color: transparent;
    border: 4px solid #d0d7de;
  }
  .file-upload-input-container {
    text-align: center;
    position: absolute;
    height: 100%;
  }
  .file-upload-input {
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
  .help-text-container {
    padding: 1rem;
  }
  .preview {
    margin-bottom: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default StyleDragSection;
