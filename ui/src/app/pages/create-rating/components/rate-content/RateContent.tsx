import Loader from 'app/components/ui/loader';
import Rating from 'app/components/ui/rating';
import { useAppDispatch } from 'app/hooks/useAppDispatch';
import { useAppSelector } from 'app/hooks/useAppSelector';
import { selectNewRate, setRate } from 'app/store/reducers/new-rate/newRateSlice';
import { DoneOutlineIcon } from 'app/components/icons';
import { RateContentWrapper } from './RateContent.style';
import { useEffect } from 'react';
import { submitRate } from 'app/store/reducers/new-rate/newRateAPI';
import useTranslate from 'app/hooks/useTranslate';

function RateContent () {
  const { localize } = useTranslate();
  const { newRate } = useAppSelector(selectNewRate);
  const dispatch = useAppDispatch();

  const changeRating = (newValue: number | null) => {
    dispatch(setRate(newValue));
  };

  useEffect(() => {
    if (newRate.submited && newRate.value !== null) {
      submitRate({ data: newRate.value });
    }
  }, [newRate.submited]);

  return (
    <RateContentWrapper>
      {newRate.loading && <Loader />}
        {newRate.value !== null && (
          <div className="rate-content">
            <div className="title">{!newRate.submited ? newRate.value.title : localize('create_rating.thanks')}</div>
            <div className="description">{!newRate.submited ? newRate.value.description : localize('create_rating.success')}</div>
            <div className="rating-wrapper">
              <Rating
                name="anonymus-rating"
                defaultValue={0}
                maxValue={5}
                precision={0.5}
                onChange={changeRating}
                size="large"
                disabled={newRate.submited}
              />
            </div>
            {newRate.submited && (
              <div className="done-icon-wrap">
                <DoneOutlineIcon />
              </div>
            )}
          </div>
        )}
    </RateContentWrapper>
  );
}

export default RateContent;
