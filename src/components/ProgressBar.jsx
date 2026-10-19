import "./ProgressBar.css";

const ProgressBar = ({ current, total }) => {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{width: `${progress}%`}}/>
    </div>
  );
};

export default ProgressBar;