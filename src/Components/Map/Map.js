import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Marker } from './Marker';
import { supabase } from '../../supabaseClient';
import croix from '../../assets/images/croix.png';
import NavAccueil from '../NavAccueil';
import { Footer } from '../Footer';
import Geocode from 'react-geocode';
import customStyle from '../CustomStyle';

export const Map = () => {
  const [adresse, setAdresse] = useState('');
  const [coordonate, setCoordonate] = useState({
    lat: 47.04477,
    lng: -1.186905,
    zoom: 7,
  });
  const [mapData, setMapData] = useState([]);
  const [mode, setMode] = useState('HYBRID');
  const [popup, setPopup] = useState({
    lat: 0,
    lng: 0,
    show: false,
    id: 0,
  });

  const fetcheData = async () => {
    const { data: parcs } = await supabase
      .from('parc')
      .select('*')
      .order('id', 'asc');
    setMapData(parcs);
  };

  useEffect(() => {
    fetcheData();
  }, []);

  const handleClick = (id) => {
    setPopup({
      show: !popup.show,
      id: id,
    });
  };

  const handleClose = () => {
    setPopup({
      lat: 0,
      lng: 0,
      show: !popup.show,
    });
  };

  const textInput = React.createRef();
  const onClickButton = () => {
    setAdresse(textInput.current.value);
  };
  useEffect(() => {
    if (adresse !== '') {
      Geocode.setLanguage('fr');
      Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API);
      Geocode.setRegion('fr');
      Geocode.setLocationType('ROOFTOP');
      Geocode.enableDebug();
      Geocode.fromAddress(adresse).then(
        (response) => {
          setCoordonate({
            lat: response.results[0].geometry.location.lat,
            lng: response.results[0].geometry.location.lng,
            zoom: 15,
          });
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }, [adresse]);

  const key = process.env.REACT_APP_GOOGLE_API;
  const center = { lat: coordonate.lat, lng: coordonate.lng };
  return (
    <div className="h-screen">
      <NavAccueil />
      <div className="h-full">
        <GoogleMapReact
          bootstrapURLKeys={{ key: key }}
          center={center}
          zoom={coordonate.zoom}
          options={(map) => ({ styles: customStyle })}
        >
          {mapData.map((parc) => (
            <Marker
              key={parc.id}
              lat={parc.coordonate[0]}
              lng={parc.coordonate[1]}
              handleClick={() => handleClick(parc.id)}
            />
          ))}
        </GoogleMapReact>
        <div className="absolute h-10 bg-white shadow-md bottom-16 md:top-20 left-3 md:w-96">
          <input
            ref={textInput}
            className="h-10 pl-5 rounded-sm md:w-3/4"
            type="text"
            placeholder="Saisir une adresse"
          />
          <button
            className="w-20 h-10 text-center border border-black rounded-sm md:w-1/4"
            onClick={() => onClickButton()}
          >
            Valider
          </button>
        </div>
        {popup.show === true && (
          <div
          className='absolute w-11/12 p-5 bg-white overflow:scroll md:w-1/2 top-3 md:top-8 md:left-1/4 left-4'
            /* style={{
              position: 'absolute',
              top: '10%',
              left: '25%',
              background: 'white',
              width: '50%',
              height: 'auto',
              padding: '20px',
              boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
            }} */
          >
            <div className="mx-auto">
              <h3 className="mb-2 font-bold text-center underline md:mb-10 md:text-3xl">
                {mapData[popup.id - 1].nom}
              </h3>
              <h3 className="mb-2 text-center md:mb-10 md:text-xl">
                {mapData[popup.id - 1].description}
              </h3>
              <h3 className="mb-2 text-center underline md:mb-10 md:text-xl">Equipements :</h3>
              <ul className="text-center">
                {mapData[popup.id - 1].equipements.map((equipement) => (
                  <li>{equipement}</li>
                ))}
              </ul>
            </div>
            <a
              href={mapData[popup.id - 1].image}
              target="_blank"
              rel="noreferrer"
            >
              {mapData[popup.id - 1].image !== null ? (
                <img
                  className="mt-5 ml-auto mr-auto"
                  src={mapData[popup.id - 1].image}
                  alt="parc"
                  width="300px"
                />
              ) : (
                ''
              )}
            </a>
            <p className="mt-5 text-center text-green-900">
              Coordonnées GPS :{mapData[popup.id - 1].coordonate}
            </p>
            <button
              style={{
                position: 'absolute',
                top: '0',
                right: '0',
                color: 'black',
                padding: '10px',
                margin: '10px',
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={handleClose}
            >
              <img src={croix} alt="croix" height="20px" width="20px" />
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
