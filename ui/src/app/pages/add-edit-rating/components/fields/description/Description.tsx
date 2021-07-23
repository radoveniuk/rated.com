import { FC } from 'react';
import TextField from 'app/components/forms/text-field';
import { useAppDispatch } from 'app/hooks/useAppDispatch';
import { useAppSelector } from 'app/hooks/useAppSelector';
import useDebounceUpdate from 'app/hooks/useDebounceUpdate';
import useTranslate from 'app/hooks/useTranslate';
import { selectRating, updateDescription } from 'app/store/reducers/editing-rating/editingRatingSlice';
import { DescriptionWrapper } from './Description.style';

const Description: FC = () => {
  const { localize } = useTranslate();
  const { rating } = useAppSelector(selectRating);
  const dispatch = useAppDispatch();
  const [value, setValue] = useDebounceUpdate('', rating.data?.description, (value: string) => { dispatch(updateDescription(value)); });
  return (
    <DescriptionWrapper>
      <TextField
        label={localize('rating_settings.description')}
        value={value}
        onChangeValue={setValue}
        fullWidth
        multiline
      />
    </DescriptionWrapper>
  );
};

export default Description;
