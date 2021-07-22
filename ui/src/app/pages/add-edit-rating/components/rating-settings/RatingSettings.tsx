import { FC } from 'react';
import { RatingSettingsWrapper } from './RatingSettings.style';

interface IRatingSettingsProps {
  readOnly: boolean;
}

const RatingSettings: FC<IRatingSettingsProps> = ({
  readOnly,
}) => {
  return (
    <RatingSettingsWrapper>
      Settings {readOnly}
    </RatingSettingsWrapper>
  );
};

export default RatingSettings;
