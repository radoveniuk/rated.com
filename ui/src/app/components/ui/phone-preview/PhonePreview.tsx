import { FC } from 'react';
import { PhonePreviewWrapper } from './PhonePreview.style';

const PhonePreview: FC = ({ children }) => {
  return (
    <PhonePreviewWrapper>
      {children}
    </PhonePreviewWrapper>
  );
};

export default PhonePreview;
