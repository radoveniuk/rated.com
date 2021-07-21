type RatingType = {
  id: string,
  name: string,
  description: string,
  rating: number,
}

export type ProfileType = {
  id: string,
  name: string,
  username: string,
  email: string,
  rating: number,
  ratings: RatingType[],
}

export interface IProfileState {
  data: ProfileType | null;
  loading: boolean,
  error: boolean | null,
}
