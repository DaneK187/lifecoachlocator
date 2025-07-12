// app/coaches/[slug]/BookingSection.jsx
'use client';

import BookingButton from '@/components/BookingButton';

export default function BookingSection({ url }) {
  if (!url) {
    return <p className="text-gray-500 italic">Booking link not available.</p>;
  }

  return <BookingButton url={url} />;
}

