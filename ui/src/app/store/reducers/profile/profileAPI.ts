// A mock function to mimic making an async request for data
interface IFetchedProfileResult {
  data: {
    id: string;
    name: string;
    username: string;
    email: string;
  }
}

export async function fetchProfile (id: string) {
  return new Promise<IFetchedProfileResult>((resolve) =>
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => {
        resolve({ data });
      }),
  );
}
