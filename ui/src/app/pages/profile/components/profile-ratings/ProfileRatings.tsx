import { useState, FC, useEffect } from 'react';
import { useAppSelector } from 'app/hooks/useAppSelector';
import { selectProfile } from 'app/store/reducers/profile/profileSlice';
import { ProfileRatingsWrapper } from './ProfileRatings.style';
import ShortRatingItem from './short-rating-item';
import { RatingType } from 'app/types/profile';

const generateRows = (flatlist: any[], rowLength = 3): any[] => {
  const newlist = [];
  for (let i = 0; i < Math.ceil(flatlist.length / rowLength); i++) {
    newlist[i] = flatlist.slice((i * rowLength), (i * rowLength) + rowLength);
  }
  return newlist;
};

const ProfileRatings: FC = () => {
  const { profile } = useAppSelector(selectProfile);
  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    if (profile.data?.ratings) {
      setRows(generateRows(profile.data?.ratings));
    }
  }, [profile.data?.ratings]);

  return (
    <ProfileRatingsWrapper>
      <div className="rating-items-list">
        {rows.length && rows.map((row, index) => {
          return (
            <div className="flex" key={`row-${index}`}>
              {row.map((item: RatingType) => (
                <ShortRatingItem key={item.id} ratingItem={item} />
              ))}
            </div>
          );
        })}
      </div>
    </ProfileRatingsWrapper>
  );
};

export default ProfileRatings;
