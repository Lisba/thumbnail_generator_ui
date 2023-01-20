import styled from 'styled-components';

const StyleDragSection = styled.div`
  .image-upload-container {
    margin-bottom: 2em;
    position: relative;
    display: flex;
    justify-content: center;
    color: var(--button-main-border-hover-color);
    border: 4px dashed #d0d7de;
  }
  .image-upload-container:hover {
    background-color: transparent;
    border: 4px solid #d0d7de;
  }
  .file-upload-input-container {
    width: 100%;
    height: 100%;
    position: absolute;
    text-align: center;
  }
  .file-upload-input {
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
  .help-text-container {
    padding: 1rem;
    display: flex;
    justify-content: center;
  }
  .preview {
    margin-bottom: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .preview-image {
    max-width: 20rem;
    height: auto;
  }
`;

export default StyleDragSection;
