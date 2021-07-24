type RatingType = {
  id: string,
  name: string,
  description: string,
  rating: number,
}

export type ProfileType = {
  id: string |null,
  name?: string,
  description?: string,
  username: string,
  email: string,
  rating?: number,
  category?: string,
  ratings?: RatingType[],
}

export interface IProfileState {
  data: ProfileType | null;
  loading: boolean,
  error: boolean | null,
}
