// Simple static map component using Google Maps Static API (replace with your own API key for production)
export default function CoachMap({ location }) {
  if (!location) return null;
  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(location)}&zoom=12&size=600x200&maptype=roadmap&markers=color:blue%7C${encodeURIComponent(location)}&key=YOUR_GOOGLE_MAPS_API_KEY`;
  return (
    <div className="rounded-lg overflow-hidden border shadow mt-4">
      <img src={mapUrl} alt="Coach location map" className="w-full h-48 object-cover" />
    </div>
  );
}
