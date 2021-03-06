import { Rating } from 'app/types/rating';

// A mock function to mimic making an async request for data
interface IFetchedRateResult {
  data: Rating
}

export function fetchRate (id: string) {
  return new Promise<IFetchedRateResult>((resolve) =>
    setTimeout(() => resolve({
      data: {
        id,
        name: 'Bohdan Radoveniuk',
        description: 'Frontend developer',
        type: 'stars',
      },
    }), 500),
  );
}

export function submitRate (params: IFetchedRateResult) {
  console.log({
    ...params,
  });
}
