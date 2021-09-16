import React from "react";

const ProgressBar = ({ progressPercentage }) => {
  return (
    <div className="h-2 w-100 bg-white rounded-xl">
      <div
        style={{ width: `${progressPercentage}%` }}
        className="h-2 rounded-xl bg-green-300">
        <div className="p-2 text-right text-white">
			{progressPercentage - 1}%
		</div>
      </div>
    </div>
  );
};

export default ProgressBar
