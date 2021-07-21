import { FC } from 'react';
import Button from 'app/components/forms/button';
import { ProfileActionsWrapper } from './ProfileActions.style';
import { EditIcon, PlusIcon } from 'app/components/icons';
import useTranslate from 'app/hooks/useTranslate';

const ProfileActions: FC = () => {
  const { localize } = useTranslate();
  return (
    <ProfileActionsWrapper>
      <div className="flex buttons-wrap">
        <Button color="default">
          {localize('profile.edit')}
          <EditIcon />
        </Button>
        <Button>
          {localize('profile.new_rating')}
          <PlusIcon />
        </Button>
      </div>
    </ProfileActionsWrapper>
  );
};

export default ProfileActions;
