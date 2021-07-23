import Loader from 'app/components/ui/loader';
import { useAppDispatch } from 'app/hooks/useAppDispatch';
import { useAppSelector } from 'app/hooks/useAppSelector';
import { selectNewRate, setRate } from 'app/store/reducers/new-rate/newRateSlice';
import { RateContentWrapper } from './RateContent.style';
import { useEffect } from 'react';
import { submitRate } from 'app/store/reducers/new-rate/newRateAPI';
import Rate from 'app/components/complex-fields/rate';

function RateContent () {
  const { newRate } = useAppSelector(selectNewRate);
  const dispatch = useAppDispatch();

  const suubmitRating = (newValue: number | null) => {
    dispatch(setRate(newValue));
  };

  useEffect(() => {
    if (newRate.submited && newRate.data !== null) {
      submitRate({ data: newRate.data });
    }
  }, [newRate.submited]);

  return (
    <RateContentWrapper>
      {newRate.loading && <Loader />}
        {newRate.data !== null && (
          <Rate rating={newRate.data} onSubmit={suubmitRating} />
        )}
    </RateContentWrapper>
  );
}

export default RateContent;
