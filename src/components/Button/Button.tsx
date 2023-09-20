import "./button.css";

export interface ButtonProps {
  primary?: boolean;
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit";
  children: React.ReactNode;
  onClick: () => void;
  active?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  primary,
  size = "lg",
  type = "button",
  children,
  onClick,
  active,
}) => {
  const mode = primary ? "button--primary" : "button--secondary";
  const activeClass = active ? "button--active" : "";
  return (
    <button
      type={type}
      className={["button", `button--${size}`, mode, activeClass].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
