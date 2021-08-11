import { FC } from 'react';
import TextField from 'app/components/forms/text-field';
// import { useAppDispatch } from 'app/hooks/useAppDispatch';
// import { useAppSelector } from 'app/hooks/useAppSelector';
// import useDebounceUpdate from 'app/hooks/useDebounceUpdate';
import useTranslate from 'app/hooks/useTranslate';
// import { selectRating, updateName } from 'app/store/reducers/editing-rating/editingRatingSlice';
import { NameWrapper } from './Name.style';

const Name: FC = () => {
  const { localize } = useTranslate();
  // const { rating } = useAppSelector(selectRating);
  // const dispatch = useAppDispatch();
  // const [value, setValue] = useDebounceUpdate('', rating.data?.name, (value: string) => { dispatch(updateName(value)); });

  return (
    <NameWrapper>
      <TextField
        label={localize('rating_settings.name')}
        // value={value}
        // onChangeValue={setValue}
        fullWidth
        multiline
      />
    </NameWrapper>
  );
};

export default Name;
