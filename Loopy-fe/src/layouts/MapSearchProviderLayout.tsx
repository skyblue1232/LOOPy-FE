import type { PropsWithChildren } from 'react';
import { LocationProvider } from '../store/locationStore';
import { MapViewProvider } from '../store/mapviewStore';
import { FilterProvider } from '../store/filterStore';

export default function MapSearchProviders({ children }: PropsWithChildren) {
  return (
    <LocationProvider>
      <MapViewProvider>
        <FilterProvider>
          {children}
        </FilterProvider>
      </MapViewProvider>
    </LocationProvider>
  );
}
