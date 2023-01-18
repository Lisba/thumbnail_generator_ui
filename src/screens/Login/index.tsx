import { useState } from 'react';
import { InputWithIcon, Button } from '@components';
import { useTranslation } from 'react-i18next';

function Login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { t } = useTranslation('login');

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('event: ', event);
    console.log('email: ', email);
    console.log('password: ', password);
  };

  const onChangeHandler = (
    event: React.FormEvent<HTMLFormElement> & {
      target: HTMLButtonElement;
    }
  ) => {
    event.preventDefault();
    const inputs = {
      email: () => setEmail(event.target?.value),
      password: () => setPassword(event.target?.value),
    };

    inputs[event.target?.name]();
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <InputWithIcon
          name='email'
          label={t('EMAIL')}
          onChange={(event) => onChangeHandler(event)}
        />
        <InputWithIcon
          name='password'
          label={t('PASSWORD')}
          onChange={(event) => onChangeHandler(event)}
        />
        <Button
          type={'submit'}
          variant={'outlined'}
          text={t('LOGIN_BUTTON')}
          onClick={onSubmitHandler}
        />
      </form>
    </div>
  );
}

export default Login;
