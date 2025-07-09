export default function AvailableNow() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Coaches Available Now</h1>

      {/* Placeholder Map */}
      <iframe
        className="w-full h-96 rounded-lg border"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.22904958024!2d-74.24442032443556!3d40.697670063188716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzAwLjYiTiA3NMKwMTMnMTYuNCJX!5e0!3m2!1sen!2sus!4v1613060597673!5m2!1sen!2sus"
        loading="lazy"
        allowFullScreen
      ></iframe>
    </div>
  );
}
