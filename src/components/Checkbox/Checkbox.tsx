import { ReactComponent as CheckboxIcon } from "../../assets/checkbox.svg";
import { ReactComponent as CheckboxCheckedIcon } from "../../assets/checkbox-checked.svg";

import "./checkbox.css";

export interface CheckboxProps {
  id: string;
  name: string;
  checked: boolean;
  label: string;
  onClick?: () => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBoxIconComponents = {
  checked: CheckboxCheckedIcon,
  unChecked: CheckboxIcon,
};

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  name,
  checked,
  label,
  onClick,
  onChange,
}) => {
  return (
    <label className="checkbox" onClick={onClick}>
      <input
        value={name}
        className="checkbox-input"
        type="checkbox"
        aria-checked={checked}
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <span>
        <span className="checkbox-icon">
          {checked ? (
            <CheckBoxIconComponents.checked />
          ) : (
            <CheckBoxIconComponents.unChecked />
          )}
        </span>
        {label}
      </span>
    </label>
  );
};

export default Checkbox;
