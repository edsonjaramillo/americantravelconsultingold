import { useState, useMemo } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

export default function Map({ mapitems, latitude, longitude, zoom }) {
  function viewDetails(name) {
    const place = document.getElementById(name);
    const removePlaces = document.getElementsByClassName('citybox');
    for (let index = 0; index < removePlaces.length; index++) {
      removePlaces[index].classList.add('hidden');
    }
    place.classList.remove('hidden');
  }

  const [viewport, setViewport] = useState({
    latitude: latitude,
    longitude: longitude,
    zoom: zoom,
    transitionDuration: 1000,
  });

  const markers = useMemo(
    () =>
      mapitems.map(({ id, name, coordinate, link }) => {
        return (
          <Marker
            key={id}
            longitude={coordinate.longitude}
            latitude={coordinate.latitude}>
            <img
              className='pin'
              src='/images/destinations/pin.png'
              alt='black pin marker on map'
              onClick={() => {
                viewDetails(String(name).toLowerCase().replace(' ', '-'));
                setViewport({
                  ...viewport,
                  latitude: coordinate.latitude,
                  longitude: coordinate.longitude,
                  zoom: 13.5,
                });
              }}
            />
            <div
              className='citybox hidden'
              id={String(name).toLowerCase().replace(' ', '-')}>
              <p className='cityname'>{name}</p>
              {link && (
                <a href={link} className='citylink' target='_blank'>
                  Visit Website
                </a>
              )}
            </div>
          </Marker>
        );
      }),
    [mapitems]
  );

  return (
    <>
      <div className='mapWrapper'>
        <ReactMapGL
          mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
          {...viewport}
          onViewportChange={(viewport) => setViewport(viewport)}
          width='100%'
          height='100%'
          mapStyle='mapbox://styles/mapbox/streets-v11'>
          {markers}
        </ReactMapGL>
      </div>
    </>
  );
}
