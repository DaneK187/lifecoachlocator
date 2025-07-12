// BackgroundPeopleGrid.jsx
// A background grid of people images for the homepage

const peopleImages = [
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/65.jpg',
  'https://randomuser.me/api/portraits/women/68.jpg',
  'https://randomuser.me/api/portraits/men/12.jpg',
  'https://randomuser.me/api/portraits/women/21.jpg',
  'https://randomuser.me/api/portraits/men/77.jpg',
  'https://randomuser.me/api/portraits/women/36.jpg',
  'https://randomuser.me/api/portraits/men/41.jpg',
  'https://randomuser.me/api/portraits/women/19.jpg',
];

export default function BackgroundPeopleGrid() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none"
      style={{
        background: 'none', // Remove white overlay for visibility
      }}
    >
      <div className="absolute inset-0 flex flex-wrap justify-center items-center opacity-90">
        {Array.from({ length: 80 }).map((_, i) => (
          <img
            key={i}
            src={peopleImages[i % peopleImages.length]}
            alt="Person"
            className="m-2 rounded object-cover shadow-lg border border-white"
            style={{
              width: '120px',
              height: '60px',
              objectFit: 'cover',
              opacity: 0.95,
              borderRadius: '10px',
            }}
          />
        ))}
      </div>
    </div>
  );
}
