import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/redux/useAppDispatch';
import useGlobalData from '../../hooks/useGlobalData';
import { emptyRateFetch } from '../../store/reducers/new-rate/newRateSlice';
import { PageWrapper } from '../../styles/base-components';
import RateContent from './components/rate-content';

// http://localhost:3000/create-rate?id=777
function CreateRatingPage () {
  const { urlParams } = useGlobalData();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (urlParams.id) {
      dispatch(emptyRateFetch(urlParams.id));
    }
  }, []);

  return (
    <PageWrapper>
      <RateContent />
    </PageWrapper>
  );
}

export default CreateRatingPage;
