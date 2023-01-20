import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import WebCamera from '../WebCamera';
import StyleDragSection from './styles';
import { FILES_SUPORTED } from './constants';

function DragSection({ setImageToSend, useCamera }) {
  const [imageSelected, setImageSelected] = useState<string | ArrayBuffer | null>(null);
  const { t } = useTranslation('home');

  const onChangeHandler = (event) => {
    if (event.target.files[0] !== undefined) {
      setImageToSend(event.target.files[0]);
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        event.preventDefault();
        if (event.target) {
          setImageSelected(event.target.result);
        }
      };
    }
  };

  return (
    <StyleDragSection>
      <WebCamera useCamera={useCamera} setImageSelected={setImageSelected} />
      <div className='image-upload-container'>
        <div className='file-upload-input-container'>
          <input
            className='file-upload-input'
            type='file'
            accept={FILES_SUPORTED}
            multiple
            onChange={(event) => {
              onChangeHandler(event);
            }}
          />
        </div>
        <div className='help-text-container'>
          <h3>{t('HELP_TEXT')}</h3>
        </div>
      </div>

      {imageSelected ? (
        <div className='preview'>
          <img className='preview-image' src={`${imageSelected}`} alt='preview image' />
        </div>
      ) : null}
    </StyleDragSection>
  );
}

export default DragSection;
