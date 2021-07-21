import { useTranslation } from 'react-i18next';

const useTranslate = () => {
  const { t, i18n } = useTranslation();
  return {
    localize: t,
    languageSettins: i18n,
  };
};

export default useTranslate;
