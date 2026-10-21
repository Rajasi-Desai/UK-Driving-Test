import Button from "../ui/Button";

const AnswerOptions = ({ options, selectedIndex, onSelect }) => {
    return (
        <div>
            {options.map((option, index) => (
                <div key={index} style={{marginBottom: "0.5rem"}}>
                    <Button
                        selected={selectedIndex === index}
                        onClick={() => onSelect(index)}
                    >
                        {option}
                    </Button>
                </div>
            ))}
        </div>
    );
};

export default AnswerOptions;