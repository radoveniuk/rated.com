import { FC } from 'react';
import Button from 'app/components/forms/button';
import { ProfileActionsWrapper } from './ProfileActions.style';
import { EditIcon, PlusIcon } from 'app/components/icons';

const ProfileActions: FC = () => {
  return (
    <ProfileActionsWrapper>
      <div className="flex buttons-wrap">
        <Button color="default">
          Edit profile
          <EditIcon />
        </Button>
        <Button>
          Create rating
          <PlusIcon />
        </Button>
      </div>
    </ProfileActionsWrapper>
  );
};

export default ProfileActions;
