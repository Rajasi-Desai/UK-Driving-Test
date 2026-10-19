import "./Button.css";

const Button = ({ children, selected, onClick, disabled, variant }) => {
  const className = `button ${variant || (selected ? "selected" : "outline")}`;
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;