'use client';

import { useEffect } from 'react';

export default function BookingButton() {
  useEffect(() => {
    if (!document.querySelector('#calendly-script')) {
      const script = document.createElement('script');
      script.id = 'calendly-script';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleClick = () => {
    if (typeof window.Calendly === 'undefined') {
      console.warn('Calendly not loaded yet.');
      return;
    }

    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/your-link-here' // Replace with real link
    });
  };

  return (
    <div className="text-center mt-4">
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
      >
        Book Now
      </button>
    </div>
  );
}
