// components/BookingButton.jsx
'use client';

import { useEffect } from 'react';

export default function BookingButton({ url }) {
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
    if (!url) return alert('No booking link');
    if (!window.Calendly) return console.warn('Calendly not loaded yet');

    window.Calendly.initPopupWidget({ url });
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Book Now
    </button>
  );
}




