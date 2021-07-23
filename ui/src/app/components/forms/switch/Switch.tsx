import { useState, useEffect, FC } from 'react';
import SwitchMaterial from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

type SwitchProps = {
  color?: 'primary' | 'secondary' | 'default',
  active: boolean,
  label: string,
  onChange: (value: boolean) => void,
  disabled?: boolean,
  labelPlacement?: 'start' | 'end' | 'top' | 'bottom',
  size?: 'medium' | 'small',
}

const Switch: FC<SwitchProps> = ({
  color,
  active,
  label,
  onChange,
  disabled,
  labelPlacement,
  size,
  ...rest
}) => {
  const [switchOn, setSwitchOn] = useState(active);

  const handleChange = (event: any) => {
    setSwitchOn(event.target.checked);
    onChange(event.target.checked);
  };

  useEffect(() => {
    if (active !== switchOn) {
      setSwitchOn(active);
    }
  }, [active]);

  return (
    <FormControlLabel
      control={
        <SwitchMaterial
          checked={switchOn}
          onChange={handleChange}
          color={color}
          disabled={disabled}
          size={size}
        />
      }
      label={label}
      labelPlacement={labelPlacement}
      {...rest}
    />
  );
};

Switch.defaultProps = {
  color: 'primary',
  label: '',
  size: 'medium',
  active: false,
  disabled: false,
  labelPlacement: 'start',
};

export default Switch;
