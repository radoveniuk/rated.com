import { useEffect } from 'react';
import { useAppDispatch } from 'app/hooks/useAppDispatch';
import useGlobalData from 'app/hooks/useGlobalData';
import { PageWrapper } from 'app/styles/base-components';
import { profileFetch, selectProfile } from 'app/store/reducers/profile/profileSlice';
import { useAppSelector } from 'app/hooks/useAppSelector';
import ProfileHeader from './components/profile-header';
import Loader from 'app/components/ui/loader';
import ProfileActions from './components/profile-actions';

function ProfilePage () {
  const { urlParams } = useGlobalData();
  const dispatch = useAppDispatch();
  const { profile } = useAppSelector(selectProfile);

  useEffect(() => {
    if (urlParams.id || !profile.value || profile.value.id !== '3') {
      dispatch(profileFetch(urlParams.id || '3'));
    }
  }, [urlParams.id]);

  return (
    <PageWrapper>
      {profile.loading && <Loader />}
      {profile.value !== null && (
        <>
          <ProfileHeader />
          <ProfileActions />
        </>
      )}
    </PageWrapper>
  );
}

export default ProfilePage;
