import { useEffect } from 'react';
import { useAppDispatch } from 'app/hooks/redux/useAppDispatch';
import useGlobalData from 'app/hooks/useGlobalData';
import { PageWrapper } from 'app/styles/base-components';
import { profileFetch, selectProfile } from 'app/store/reducers/profile/profileSlice';
import { useAppSelector } from 'app/hooks/redux/useAppSelector';

function ProfilePage () {
  const { urlParams } = useGlobalData();
  const dispatch = useAppDispatch();
  const { profile } = useAppSelector(selectProfile);

  useEffect(() => {
    dispatch(profileFetch(urlParams.id || '3'));
  }, []);

  console.log(profile);

  return <PageWrapper>Profile Page</PageWrapper>;
}

export default ProfilePage;
