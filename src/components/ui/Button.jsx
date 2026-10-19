import "./Button.css";

const Button = ({ children, selected, onClick }) => {
  const className = `button ${selected ? "selected" : "outline"}`;
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default Button;