import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import StyledDiv from './styles';

const NotFound = () => {
  const { t } = useTranslation('notFound');
  return (
    <StyledDiv>
      <h1 className='title'>{t('NOT_FOUND_TEXT')}</h1>
      <Link className='link' to='/'>
        {t('GO_HOME')}
      </Link>
    </StyledDiv>
  );
};

export default NotFound;
