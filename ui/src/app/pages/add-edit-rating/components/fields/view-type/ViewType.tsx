import { FC } from 'react';
import { ViewTypeWrapper } from './ViewType.style';
import RadioGroup from 'app/components/forms/radio-group';
import { useAppSelector } from 'app/hooks/useAppSelector';
import { selectRating, updateViewType } from 'app/store/reducers/editing-rating/editingRatingSlice';
import { useAppDispatch } from 'app/hooks/useAppDispatch';
import { RatingType } from 'app/types/rating';
import useTranslate from 'app/hooks/useTranslate';

const viewTypeList = [
  {
    value: 'stars',
    label: 'rating_settings.stars',
  },
  {
    value: 'icons',
    label: 'rating_settings.icons',
  },
];

const ViewType: FC = () => {
  const { rating } = useAppSelector(selectRating);
  const { localize } = useTranslate();
  const dispatch = useAppDispatch();

  const changeHandler = (value: RatingType) => {
    dispatch(updateViewType(value));
  };

  return (
    <ViewTypeWrapper>
      <div className="type-label">{localize('rating_settings.type')}</div>
      <RadioGroup list={viewTypeList} onChangeValue={changeHandler} defaultValue={rating.data?.type || viewTypeList[0].value}/>
    </ViewTypeWrapper>
  );
};

export default ViewType;
