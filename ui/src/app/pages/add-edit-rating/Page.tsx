import { PageWrapper } from 'app/styles/base-components';
import Preview from './components/preview';
import RatingSettings from './components/rating-settings';

function AddEditRatingPage () {
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
