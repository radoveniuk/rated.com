import { ProfileType, RatingType } from 'app/types/profile';

const fakeRatings: RatingType[] = [
  {
    id: '1',
    name: 'First',
    description: 'first rating',
    rating: Math.floor(Math.random() * 5),
  },
  {
    id: '2',
    name: 'Second',
    description: 'sec rating',
    rating: Math.floor(Math.random() * 5),
  },
  {
    id: '3',
    name: 'Third',
    description: 'third rating',
    rating: Math.floor(Math.random() * 5),
  },
  {
    id: '4',
    name: 'Fourth',
    description: 'forth rating',
    rating: Math.floor(Math.random() * 5),
  },
  {
    id: '5',
    name: '5th',
    description: '5th rating',
    rating: Math.floor(Math.random() * 5),
  },
];
interface IFetchedProfileResult {
  data: ProfileType
}

export async function fetchProfile (id: string) {
  return new Promise<IFetchedProfileResult>((resolve) =>
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => {
        resolve({
          data: {
            ...data,
            rating: Math.floor(Math.random() * 5),
            ratings: fakeRatings,
          },
        });
      }),
  );
}
