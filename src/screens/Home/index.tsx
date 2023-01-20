import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useTranslation } from 'react-i18next';
import { Button, Spinner } from '@atoms';
import { DragSection } from '@molecules';
import { uploadImage } from '@services';
import { StyledForm, StyledPreviwContainer, StyledDiv, StyledDivLogoutButton } from './styles';

function Home() {
  const { logout } = useAuth0();
  const { t } = useTranslation('home');
  const [imageToSend, setImageToSend] = useState<string | ArrayBuffer | null>(null);
  const [loading, setLoading] = useState(false);
  const [imageUploadedUrl, setImageUploadedUrl] = useState('');
  const [useCamera, setUseCamera] = useState(false);

  const onSubmitHandler = async (event) => {
    try {
      event.preventDefault();
      setLoading(true);
      const data = await uploadImage(imageToSend);
      setImageUploadedUrl(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <StyledDivLogoutButton>
        <Button
          sx={{
            color: 'var(--secondary-color)',
            border: '1px solid var(--button-main-border-color)',
            '&:hover': {
              color: 'var(--secondary-color)',
              border: '1px solid var(--button-main-border-hover-color)',
            },
          }}
          variant={'outlined'}
          text={t('LOGOUT_BUTTON')}
          onClick={() => logout({ returnTo: window.location.origin })}
        />
      </StyledDivLogoutButton>
      <StyledDiv>
        {loading ? (
          <Spinner sx={{ color: 'var(--primary-color)', display: 'flex' }} />
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
            <div className='create-another-thumnail'>
              <p onClick={() => setImageUploadedUrl('')}>{t('CREATE_ANOTHER_THUMBNAIL')}</p>
            </div>
          </StyledPreviwContainer>
        ) : (
          <>
            {!useCamera ? (
              <Button
                sx={{
                  marginBottom: '15%',
                  color: 'var(--secondary-color)',
                  border: '1px solid var(--button-main-border-color)',
                  '&:hover': {
                    color: 'var(--secondary-color)',
                    border: '1px solid var(--button-main-border-hover-color)',
                  },
                }}
                variant={'outlined'}
                text={t('USE_CAMERA')}
                onClick={setUseCamera}
              />
            ) : null}
            <StyledForm onSubmit={(event) => onSubmitHandler(event)}>
              <DragSection setImageToSend={setImageToSend} useCamera={useCamera} />
              <Button
                sx={{
                  color: 'var(--secondary-color)',
                  border: '1px solid var(--button-main-border-color)',
                  '&:hover': {
                    color: 'var(--secondary-color)',
                    border: '1px solid var(--button-main-border-hover-color)',
                  },
                }}
                type={'submit'}
                variant={'outlined'}
                text={t('SEND_IMAGE_BUTTON')}
                onClick={onSubmitHandler}
              />
            </StyledForm>
          </>
        )}
      </StyledDiv>
    </>
  );
}

export default Home;
