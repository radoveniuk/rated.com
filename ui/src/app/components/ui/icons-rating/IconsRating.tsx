import IconButton from 'app/components/forms/icon-button';
import { DislikeIcon, LikeIcon } from 'app/components/icons';
import { useEffect, useState, FC } from 'react';
import { IconsRatingWrapper } from './IconsRating.style';

type IconsRatingProps = {
  defaultValue: 0 | 1 | 5,
  onChange?: (value: number | null) => void,
  disabled?: boolean,
  readOnly?: boolean,
}

const IconsRating: FC<IconsRatingProps> = ({
  defaultValue,
  disabled,
  onChange,
}) => {
  const [liked, setLiked] = useState<boolean | null>(null);

  const changeHandler = (like: boolean) => {
    setLiked(like);
    if (onChange) {
      const numberValue = like ? 5 : 1;
      onChange(numberValue);
    }
  };

  useEffect(() => {
    if (defaultValue !== 0) {
      setLiked(defaultValue === 5);
    }
  }, []);

  return (
    <IconsRatingWrapper>
      <div className={`like${liked ? ' active' : ''}`}>
        <IconButton onClick={() => { changeHandler(true); }} disabled={disabled}>
          <LikeIcon />
        </IconButton>
      </div>
      <div className={`dislike${liked === false ? ' active' : ''}`}>
        <IconButton onClick={() => { changeHandler(false); }} disabled={disabled}>
          <DislikeIcon />
        </IconButton>
      </div>
    </IconsRatingWrapper>
  );
};

export default IconsRating;
