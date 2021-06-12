import { useState, useMemo } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

export default function Map({ dataMarkers, lat, lon, zoom }) {
  function viewDetails(name) {
    const place = document.getElementById(name);
    const removePlaces = document.getElementsByClassName('city');
    for (let index = 0; index < removePlaces.length; index++) {
      removePlaces[index].classList.add('hidden');
    }
    place.classList.remove('hidden');
  }

  const [viewport, setViewport] = useState({
    latitude: lat,
    longitude: lon,
    zoom: zoom,
  });

  const markers = useMemo(
    () =>
      dataMarkers.map((data) => (
        <Marker key={data.lon} longitude={data.lon} latitude={data.lat}>
          <img
            className='pin'
            src='/images/destinations/pin.png'
            onClick={() => {
              viewDetails(String(data.name).toLowerCase().replace(' ', '-'));
              setViewport({
                ...viewport,
                latitude: data.lat,
                longitude: data.lon,
                zoom: 13.5,
              });
            }}
          />
          <p
            id={String(data.name).toLowerCase().replace(' ', '-')}
            className='city hidden'>
            {data.name}
          </p>
        </Marker>
      )),
    [dataMarkers]
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
