import { Suspense } from "react";
import LocationsClient from "./LocationsClient";

export default function LocationsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LocationsClient />
    </Suspense>
  );
}
