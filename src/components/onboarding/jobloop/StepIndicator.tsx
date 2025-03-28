interface StepIndicatorProps {
    currentStep: number;
  }
  
  const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
    const steps = ["Step 01", "Step 02", "Step 03"];
  
    return (
      <div className="flex items-center justify-center mb-12">
        {steps.map((step, index) => {
          const isActive = index + 1 <= currentStep;
          return (
            <div key={index} className="flex items-center">
              {/* Step Circle */}
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full border-2 
                ${isActive ? "border-teal-500 bg-teal-500 text-white" : "border-gray-400 text-gray-600"}`}
              >
                {isActive ? "✔" : index + 1}
              </div>
  
              {/* Step Text */}
              <span className={`ml-2 text-xs font-bold ${isActive ? "text-teal-500" : "text-gray-500"}`}>
                {step}
              </span>
  
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className={`w-10 h-[2px] ${isActive ? "bg-teal-500" : "bg-gray-400"}`}></div>
              )}
            </div>
          );
        })}
      </div>
    );
  };
  
  export default StepIndicator;
  