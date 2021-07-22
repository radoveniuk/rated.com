import { PageWrapper } from 'app/styles/base-components';
import RatingSettings from './components/rating-settings';

function AddEditRatingPage () {
  return (
    <PageWrapper>
      <RatingSettings readOnly={false} />
    </PageWrapper>
  );
}

export default AddEditRatingPage;
