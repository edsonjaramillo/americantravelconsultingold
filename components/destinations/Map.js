import { useState, useMemo } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import Image from 'next/image';

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
            <div className='pin'>
              <Image
                src='/placeholder.png'
                alt='orange pin marker on map'
                width='32'
                height='32'
                layout='responsive'
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
            </div>
            <div
              className='citybox hidden'
              id={String(name).toLowerCase().replace(' ', '-')}>
              <p className='cityname'>{name}</p>
              {link && (
                <a
                  href={link}
                  className='citylink'
                  target='_blank'
                  rel='noreferrer'>
                  Visit Website
                </a>
              )}
            </div>
          </Marker>
        );
      }),
    [mapitems, viewport]
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
