import Rating from 'app/components/ui/rating';
import { RatingType } from 'app/types/profile';
import { FC } from 'react';
import { ShortRatingItemWrapper } from './ShortRatingItem.style';

interface IShortRatingItemProps {
  ratingItem: RatingType
}

const ShortRatingItem: FC<IShortRatingItemProps> = ({
  ratingItem,
}) => {
  return (
    <ShortRatingItemWrapper to={`/create-rate?id=${ratingItem.id}`}>
      <strong>{ratingItem.name}</strong>
      <p>{ratingItem.description}</p>
      <Rating readOnly defaultValue={ratingItem.rating} name={`profile-rating-${ratingItem.id}`} />
    </ShortRatingItemWrapper>
  );
};

export default ShortRatingItem;
