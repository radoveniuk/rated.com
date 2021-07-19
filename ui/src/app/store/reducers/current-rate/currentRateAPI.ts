// A mock function to mimic making an async request for data
export function fetchRate (id: string) {
  return new Promise<{ data: { title: string, id: string } }>((resolve) =>
    setTimeout(() => resolve({ data: { title: 'Bohdan Radoveniuk', id } }), 500),
  );
}
