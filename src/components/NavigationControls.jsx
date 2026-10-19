import Button from "./ui/Button";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";

const NavigationControls = ({ currentQuestion, totalQuestions, dispatch}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "2rem",
      }}
    >
      <Button 
        onClick={() => dispatch({type: "PREV"})}
        disabled={currentQuestion === 0}
        variant={
          currentQuestion === 0 ?
            "navigation-outline" :
            "navigation-selected"
        }
      >
        <ArrowLeft size={20}/>
      </Button>
      {currentQuestion === totalQuestions - 1 ? (
        <Button 
          onClick={() => dispatch({type: "SUBMIT"})}
          variant="navigation-selected"
        >
          <CheckCircle size={20} />
        </Button>
        ): ( 
        <Button
          onClick={() => dispatch({type: "NEXT"})}
          variant="navigation-selected"
        >
          <ArrowRight size={20} />
        </Button>
      )}
    </div>
  );
};

export default NavigationControls;