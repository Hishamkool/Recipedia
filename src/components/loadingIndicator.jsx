import React from "react";
import LoadingIndicator from "react-loading-indicator";

function CustomLoadingIndicator({ loadingText = "Loading..." }) {
  return (
    <div className="h-full w-full fixed inset-0 flex flex-col gap-2.5 items-center justify-center ">
      <LoadingIndicator segmentWidth={4} segmentLength={14} />
      <div className="text-sm font-sans font-light text-shadow-gray-200 text-shadow-2xs">
        {loadingText}...
      </div>
    </div>
  );
}

export default CustomLoadingIndicator;
