import { FC, useState } from 'react';
import StarsRating from 'app/components/ui/rating';
import { DoneOutlineIcon } from 'app/components/icons';
import useTranslate from 'app/hooks/useTranslate';
import { Rating } from 'app/types/rating';
import { RateWrapper } from './Rate.style';
import IconsRating from 'app/components/ui/icons-rating';

type RateProps = {
  rating: Rating,
  onSubmit?: (value: number | null) => void
}

const Rate: FC<RateProps> = ({
  rating,
  onSubmit,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const { localize } = useTranslate();

  const changeRating = (newValue: number | null) => {
    setSubmitted(true);
    if (onSubmit) {
      onSubmit(newValue);
    }
  };

  return (
    <RateWrapper>
      <div className="rate-content">
        <div className="title">{!submitted ? rating.name : localize('create_rating.thanks')}</div>
        <div className="description">{!submitted ? rating.description : localize('create_rating.success')}</div>
        <div className="rating-wrapper">
          {rating.type === 'stars' && (
            <StarsRating
              name="anonymus-rating"
              defaultValue={0}
              maxValue={5}
              precision={0.5}
              onChange={changeRating}
              size="large"
              disabled={submitted}
            />
          )}
          {rating.type === 'icons' && (
            <IconsRating
              defaultValue={0}
              disabled={submitted}
              onChange={changeRating}
            />
          )}
        </div>
        {submitted && (
          <div className="done-icon-wrap">
            <DoneOutlineIcon />
          </div>
        )}
      </div>
    </RateWrapper>
  );
};

export default Rate;
