import Button, { ButtonProps } from "../Button/Button";
import "./switch.css";

interface SwitchProps {
  btn1: ButtonProps;
  btn2: ButtonProps;
  label?: string;
}

export const Switch: React.FC<SwitchProps> = ({ btn1, btn2, label }) => {
  return (
    <div className="switch">
        {label && <span className="text-style-label">{label}</span>}
      <div className="switch-track">
        <div className="switch-track">
          <Button {...btn1} />
          <Button {...btn2} />
        </div>
      </div>
    </div>
  );
};

export default Switch;
