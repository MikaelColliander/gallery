import "./text-field.css";

export interface TextFieldProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  label?: string;
  placeholder?: string;
  name?: string;
}

export const TextField: React.FC<TextFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  id,
  name,
}) => {
  return (
    <label className="text-field">
      <div className="text-field-label">{label}</div>
      <input
        id={id}
        type="text"
        name={name}
        value={value}
        className="text-field-input"
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
};

export default TextField;
