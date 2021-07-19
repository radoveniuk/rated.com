import Rating from 'app/components/ui/Rating';
import { useAppDispatch } from 'app/hooks/redux/useAppDispatch';
import { useAppSelector } from 'app/hooks/redux/useAppSelector';
import { selectCurrentRate, setRate } from 'app/store/reducers/current-rate/currentRateSlice';
import { RateContentWrapper } from './RateContent.style';

function RateContent () {
  const { currentRate } = useAppSelector(selectCurrentRate);
  const dispatch = useAppDispatch();

  const changeRating = (newValue: number | null) => {
    dispatch(setRate(newValue));
  };

  return (
    <RateContentWrapper>
      {currentRate.value !== null && (
        <div className="rate-content">
          <div className="title">{currentRate.value.title}</div>
          <div className="rating-wrapper">
            <Rating
              name="anonymus-rating"
              defaultValue={0}
              maxValue={5}
              precision={0.5}
              onChange={changeRating}
              size="large"
            />
          </div>
        </div>
      )}
    </RateContentWrapper>
  );
}

export default RateContent;
