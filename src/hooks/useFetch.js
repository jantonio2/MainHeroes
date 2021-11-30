import { useEffect, useRef, useState } from 'react'

export const useFetch = (id) => {

  const isMounted = useRef(true);
  const [state, setState] = useState({info: null, loading: true, error: null});
  const url = `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=df916cab83ad54facc657b52b6364191&ts=1&hash=f961e1bec1a1d07b819e447edeef3f07`;

  useEffect(() => {
    
    return () => {
      isMounted.current = false;
    }
  }, []);

  useEffect(() => {
    setState({info: null, loading: true, error: null});
    const getData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        if(isMounted.current){
          setState({
            loading: false,
            error: null,
            info: json
          });
        } else {
          console.log('No se llamo');
        }
      } catch (e) {
        if(isMounted.current){
          setState({
          loading: false,
          error: 'No se pudo cargar la info',
          info: null
          })
        }
      }
    };

    getData();
  }, [url]);

  return state;
};
