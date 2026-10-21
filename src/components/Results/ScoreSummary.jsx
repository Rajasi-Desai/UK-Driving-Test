import Card from "../ui/Card";
import "./ScoreSummary.css";

const ScoreSummary = ({ score, total }) => {
  const isPass = score > 42;
  return (
    <Card>
      <h2
        style={{
          color: isPass ? "#28a745" : "#dc3545",
        }}
      > 
        {isPass ? "You passed!" : "You failed!" } 
      </h2>
      <p>
        You scored {score} out of {total}
      </p>

    </Card>
  );
};

export default ScoreSummary;