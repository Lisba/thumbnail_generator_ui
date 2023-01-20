import { useTranslation } from 'react-i18next';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@components';
import images from '@assets';
import { StyledForm } from './styles';
import { useStore } from '@store';
import { themes } from '@helpers';

function Login(): JSX.Element {
  const { theme } = useStore((state) => state);

  const { loginWithRedirect } = useAuth0();
  const { t } = useTranslation('login');

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    loginWithRedirect();
  };

  return (
    <StyledForm onSubmit={onSubmitHandler}>
      <div className='img-container'>
        <img
          className={theme === themes.green ? 'logo-green' : 'logo-purple'}
          src={images.thumbnailLogo}
        ></img>
      </div>
      <div>
        <h1 className='title'>{t('LOGIN_TITLE')}</h1>
      </div>
      <div>
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
          text={t('LOGIN_BUTTON')}
        />
      </div>
    </StyledForm>
  );
}

export default Login;
