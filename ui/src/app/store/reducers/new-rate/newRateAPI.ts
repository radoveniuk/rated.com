// A mock function to mimic making an async request for data
interface IFetchedRateResult {
  data: {
    id: string,
    title: string,
    description: string,
  }
}
export function fetchRate (id: string) {
  return new Promise<IFetchedRateResult>((resolve) =>
    setTimeout(() => resolve({
      data: {
        id,
        title: 'Bohdan Radoveniuk',
        description: 'Frontend developer',
      },
    }), 500),
  );
}
