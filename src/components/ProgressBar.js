import React from "react";

const ProgressBar = ({ progressPercentage }) => {
  return (
    <div className="h-2 w-100 bg-white rounded-xl xs:mx-6">
      <div
        style={{ width: `${progressPercentage}%` }}
        className="h-2 rounded-xl bg-teal-600 animate-pulse ">
        <div className="p-2 text-right text-white">
			{progressPercentage - 1}%
		</div>
      </div>
    </div>
  );
};

export default ProgressBar
