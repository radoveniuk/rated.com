import { Rating } from '../../../types/rating';

// A mock function to mimic making an async request for data
interface IFetchedRateResult {
  data: Rating
}

export function fetchRate (id: string) {
  return new Promise<IFetchedRateResult>((resolve) =>
    setTimeout(() => resolve({
      data: {
        id,
        name: 'default rating',
        description: 'default rating',
        type: 'stars',
      },
    }), 500),
  );
}

export function saveRating (params: IFetchedRateResult) {
  console.log({
    ...params,
  });
}
