const ExplanationText = ({ text }) => {
  return (
    <p
      style={{
        marginTop: "1rem",
        fontStyle: "italic",
        color: "#555",
      }}
    >
      Explaination: {text}
    </p>
  );
};

export default ExplanationText;