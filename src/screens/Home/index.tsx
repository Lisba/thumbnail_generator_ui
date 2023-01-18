import { useState } from 'react';
import { Button, DragSection, Spinner } from '@components';
import { uploadImage } from '@services';
import { useTranslation } from 'react-i18next';
import { StyledForm, StyledPreviwContainer } from './styles';

function Home() {
  const { t } = useTranslation('home');
  const [imageToSend, setImageToSend] = useState<string | ArrayBuffer | null>(null);
  const [loading, setLoading] = useState(false);
  const [imageUploadedUrl, setImageUploadedUrl] = useState('');

  const onSubmitHandler = async (event) => {
    try {
      event.preventDefault();
      setLoading(true);
      const data = await uploadImage(imageToSend);
      setImageUploadedUrl(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : imageUploadedUrl ? (
        <StyledPreviwContainer>
          <div className='help-text'>
            <p>{t('THUMBNAIL_CREATED_SUCCESSFULLY')}</p>
          </div>
          <div className='preview-thumbnail'>
            <img className='image-element' src={`${imageUploadedUrl}`} alt='image uploaded' />
          </div>
          <div className='preview-url'>
            <p>{imageUploadedUrl}</p>
          </div>
        </StyledPreviwContainer>
      ) : (
        <StyledForm onSubmit={(event) => onSubmitHandler(event)}>
          <DragSection setImageToSend={setImageToSend} />
          <Button
            type={'submit'}
            variant={'outlined'}
            text={t('SEND_IMAGE_BUTTON')}
            onClick={onSubmitHandler}
          />
        </StyledForm>
      )}
    </>
  );
}

export default Home;
