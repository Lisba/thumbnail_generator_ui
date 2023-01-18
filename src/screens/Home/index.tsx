import { useState } from 'react';
import { Button, DragSection } from '@components';
import { uploadImage } from '@services';
import { useTranslation } from 'react-i18next';
import { StyledForm } from './styles';

function Home() {
  const { t } = useTranslation('home');
  const [imageToSend, setImageToSend] = useState<string | ArrayBuffer | null>(null);

  const onSubmitHandler = async (event) => {
    try {
      event.preventDefault();
      const data = await uploadImage(imageToSend);
      console.log('data: ', data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <StyledForm onSubmit={(event) => onSubmitHandler(event)}>
      <DragSection setImageToSend={setImageToSend} />
      <Button
        type={'submit'}
        variant={'outlined'}
        text={t('SEND_IMAGE_BUTTON')}
        onClick={onSubmitHandler}
      />
    </StyledForm>
  );
}

export default Home;
