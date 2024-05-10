import React from 'react';

const PaymentPage = () => {
  // Placeholder QR code URL - replace it with the actual QR code URL or generate it dynamically based on the payment details.
  const qrCodeURL = '/qr_code.jpeg';

  return (
    <div className="flex items-center gap-10 flex-col justify-center bg-white">
      <h1 className="text-center font-semibold text-[#FD3D0D] text-3xl">
        Payment
      </h1>
      <div className="w-3/12 mx-auto p-6  rounded-md shadow-md">
        <p className="mb-4 text-gray-700">
          Please pay the Rs. 800 amount by scanning the QR code below:
        </p>
        <div className="flex justify-center mb-4">
          {/* Replace the src URL with the actual QR code URL */}
          <img src={qrCodeURL} alt="Payment QR Code" className="w-48 h-48" />
        </div>
        <p className="text-center text-gray-700">
          Make sure to complete the payment using the above QR code.
        </p>
      </div>
    </div>
  );
};

export default PaymentPage;
