import React, { useState } from "react";

const Disclaimer = () => {
  const [agreed, setAgreed] = useState(false);

  if (!agreed) {
    return (
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
        <div className="bg-white border-4 w-[650px] border-red-950 p-4 rounded-2xl shadow-md">
          <h2 className="font-semibold font-serif mb-2 text-orange-600 flex justify-center text-2xl">
            DISCLAIMER
          </h2>
          <p className=" text-left">
            "Legal Disclaimer : All contents of this website with respect to
            Supertech’s project details (flat / unit / area / price etc.) are
            subject to The Real Estate (Regulation and Development) Act 2010,
            rules framed thereunder and implementation, thereof."
          </p>
          <div className="flex justify-center">
            
            <button
              className="mt-4 bg-orange-600 text-white px-4 py-2 rounded"
              onClick={() => setAgreed(true)}
            >
              Agree
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Disclaimer;
