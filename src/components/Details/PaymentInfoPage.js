import React from "react";

function PaymentInfoPage() {
  return (
    <div className="w-screen h-full bg-transparent ">
      <form
        action=""
        className="w-200 flex items-center justify-center mx-auto mt-4 left-10 h-99 rounded-sm bg-white"
      >
        <div>
        <h1 className="text-2xl mx-6 ">UPLOAD TRANSACTION DETAILS</h1>
        <input
          type="file"
          className="bg-gray-300 justify center"
        />
        </div>
        <div>
        <h1 className="text-2xl mx-6 mt-10">UPLOAD PHOTO</h1>
        <input
          type="file"
          className="bg-gray-300 justify center"
        />
        </div>
      </form>
    </div>
  );
}

export default PaymentInfoPage;
