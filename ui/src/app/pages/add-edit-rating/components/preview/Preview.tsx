import { FC } from 'react';
import { PreviewWrapper } from './Preview.style';
import Rate from 'app/components/complex-fields/rate';
import { useAppSelector } from 'app/hooks/useAppSelector';
import { selectRating } from 'app/store/reducers/editing-rating/editingRatingSlice';
import PhonePreview from 'app/components/ui/phone-preview';
// import IconsRating from 'app/components/ui/icons-rating';

const Preview: FC = () => {
  const { rating } = useAppSelector(selectRating);
  return (
    <PreviewWrapper className="d-md-none">
      <PhonePreview>
        {rating.data !== null && <Rate key={rating.data.type} rating={rating.data} />}
        {/* <IconsRating name="ff" defaultValue={5} /> */}
      </PhonePreview>
    </PreviewWrapper>
  );
};

export default Preview;
