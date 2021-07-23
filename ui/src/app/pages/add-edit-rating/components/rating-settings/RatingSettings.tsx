import useTranslate from 'app/hooks/useTranslate';
import { FC } from 'react';
import Description from '../fields/description';
import Name from '../fields/name';
import ViewType from '../fields/view-type';
import { RatingSettingsWrapper } from './RatingSettings.style';

const RatingSettings: FC = () => {
  const { localize } = useTranslate();

  return (
    <RatingSettingsWrapper>
      <div className="fields-wrapper">
        <h2>{localize('rating_settings.settings')}</h2>
        <Name />
        <Description />
        <ViewType />
      </div>
    </RatingSettingsWrapper>
  );
};

export default RatingSettings;
