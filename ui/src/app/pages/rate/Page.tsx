import { useEffect } from 'react';
import { useAppDispatch } from 'app/hooks/useAppDispatch';
import useGlobalData from 'app/hooks/useGlobalData';
import { emptyRateFetch } from 'app/store/reducers/new-rate/newRateSlice';
import { PageWrapper } from 'app/styles/base-components';
import RateContent from './components/rate-content';

// http://localhost:3000/create-rate?id=777
function RatePage () {
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

export default RatePage;
