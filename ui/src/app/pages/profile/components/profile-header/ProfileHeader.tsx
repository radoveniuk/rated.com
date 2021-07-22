import { FC } from 'react';
import { useAppSelector } from 'app/hooks/useAppSelector';
import { selectProfile } from 'app/store/reducers/profile/profileSlice';
import { ProfileHeaderWrapper } from './ProfileHeader.style';
import Avatar from 'app/components/ui/avatar';
import Rating from 'app/components/ui/rating';

const url = '';// 'https://media-exp3.licdn.com/dms/image/C4D03AQHrFXSnoOaltQ/profile-displayphoto-shrink_800_800/0/1626196021950?e=1632355200&v=beta&t=BYb2LDyIB-fakLGOa6acfxs4uXGhXLVCkcDKlmIlP-g';

const ProfileHeader: FC = () => {
  const { profile } = useAppSelector(selectProfile);
  return (
    <ProfileHeaderWrapper>
      {profile.data !== null && (
        <div className="title-info-wrapper flex align-items-center">
          <Avatar size={100} src={url} alt={profile.data.username} />
          <div className="title-info ml-24">
            <h2>{profile.data.name}</h2>
            <p>{profile.data.username}</p>
            <Rating name="profile-rating" defaultValue={profile.data.rating} readOnly />
          </div>
        </div>
      )}
    </ProfileHeaderWrapper>
  );
};

export default ProfileHeader;
