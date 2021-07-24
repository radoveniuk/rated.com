import { useAppDispatch } from 'app/hooks/useAppDispatch';
import { resetRating } from 'app/store/reducers/editing-rating/editingRatingSlice';
import { PageWrapper } from 'app/styles/base-components';
import { useEffect } from 'react';
import Preview from './components/preview';
import RatingSettings from './components/rating-settings';

function AddEditRatingPage () {
  const dispatch = useAppDispatch();

  useEffect(() => () => {
    dispatch(resetRating());
  });

  return (
    <PageWrapper>
      <div className="flex mt-32">
        <RatingSettings />
        <Preview />
      </div>
    </PageWrapper>
  );
}

export default AddEditRatingPage;
