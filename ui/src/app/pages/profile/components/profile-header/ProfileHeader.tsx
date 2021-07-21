import { useAppSelector } from 'app/hooks/useAppSelector';
import { selectProfile } from 'app/store/reducers/profile/profileSlice';
import { FC } from 'react';
import { ProfileHeaderWrapper } from './ProfileHeader.style';
import Avatar from 'app/components/ui/avatar';
import Rating from 'app/components/ui/rating';

const url = '';// 'https://media-exp3.licdn.com/dms/image/C4D03AQHrFXSnoOaltQ/profile-displayphoto-shrink_800_800/0/1626196021950?e=1632355200&v=beta&t=BYb2LDyIB-fakLGOa6acfxs4uXGhXLVCkcDKlmIlP-g';

const ProfileHeader: FC = () => {
  const { profile } = useAppSelector(selectProfile);
  return (
    <ProfileHeaderWrapper>
      {profile.value !== null && (
        <div className="title-info-wrapper flex align-items-center">
          <Avatar size={100} src={url} alt={profile.value.username} />
          <div className="title-info ml-24">
            <h2>{profile.value.name}</h2>
            <p>{profile.value.username}</p>
            <Rating name="profile-rating" defaultValue={profile.value.rating} readOnly />
          </div>
        </div>
      )}
    </ProfileHeaderWrapper>
  );
};

export default ProfileHeader;
