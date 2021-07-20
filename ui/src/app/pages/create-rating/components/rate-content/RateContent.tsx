import Loader from 'app/components/ui/loader';
import Rating from 'app/components/ui/rating';
import { useAppDispatch } from 'app/hooks/redux/useAppDispatch';
import { useAppSelector } from 'app/hooks/redux/useAppSelector';
import { selectNewRate, setRate } from 'app/store/reducers/new-rate/newRateSlice';
import { DoneOutlineIcon } from 'app/components/icons';
import { RateContentWrapper } from './RateContent.style';

function RateContent () {
  const { newRate } = useAppSelector(selectNewRate);
  const dispatch = useAppDispatch();

  const changeRating = (newValue: number | null) => {
    dispatch(setRate(newValue));
  };

  return (
    <RateContentWrapper>
      {newRate.loading && <Loader />}
        {newRate.value !== null && (
          <div className="rate-content">
            <div className="title">{!newRate.submited ? newRate.value.title : 'Thanks!'}</div>
            <div className="description">{!newRate.submited ? newRate.value.description : 'Your rate has been submited'}</div>
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
