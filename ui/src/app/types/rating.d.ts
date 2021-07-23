export type RatingType = 'stars' | 'icons';

export type ExtraField = {
  name: string,
  type: RatingType,
  rate?: number,
};

export type Rating = {
  id: string | null,
  name: string,
  description: string,
  type: RatingType,
  extraFields?: ExtraField[],
  rate?: number | null,
};

export interface RatingState {
  data: Rating | null;
  loading: boolean;
  error: boolean | null;
}
