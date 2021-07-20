import { useAppSelector } from 'app/hooks/redux/useAppSelector';
import { selectProfile } from 'app/store/reducers/profile/profileSlice';
import { FC } from 'react';
import { ProfileHeaderWrapper } from './ProfileHeader.style';

const ProfileHeader: FC = () => {
  const { profile } = useAppSelector(selectProfile);
  return (
    <ProfileHeaderWrapper>
      <h1>{profile.value?.name}</h1>
    </ProfileHeaderWrapper>
  );
};

export default ProfileHeader;
