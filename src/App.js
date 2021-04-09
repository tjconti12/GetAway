import './App.css';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import Map from './Components/Map/Map';

import Other from './Other'
import Home from './Home'

import ModalParent from './Components/Modal/ModalParent';
import SearchBar from './Components/SearchBar/SearchBar';



// Save the Component, key and path in an array of objects for each Route
// You could write all routes by hand but I'm lazy annd this lets me use
// the map method to just loop over them and make my routes
// SWITCH is used so that it only ever matches one route at a time
// If you don't want to use react router just rewrite the app component to not use it

const routes = [
  {
    Component: Other,
    key: 'Other',
    path: '/other'
  },
  {
    Component: Other,
    key: 'Another',
    path: '/another'
  },
  {
    Component: Home,
    key: 'Home',
    path: '/'
  }
]

export default function App () {

  const containerRef = useRef(null);
  const [introModalOpen, setIntroModalOpen] = useState(true);
  const [locationModalOpen, setLocationModalOpen] = useState(false);

  const closeLocationModal = () => {
    setLocationModalOpen(false);
}



  // Map viewport state
  const [viewport, setViewport] = useState({
    latitude: 28.5421109,
    longitude: -81.3790304,
    zoom: 10
  })

  const [searchViewport, setSearchViewport] = useState(null);


  // Search Data from Yelp
  const [searchData, setSearchData] = useState(null);
  // User Position Coordinates State
  const [userPosition, setUserPosition] = useState(null);

  // Ref for Map
  const mapRef = useRef();

  // Seting userposition state
  const setUserLocation = (pos) => {
    const crd = pos.coords;
    console.log(crd.latitude, crd.longitude)
    setUserPosition({latitude: crd.latitude, longitude: crd.longitude})
    setViewport({latitude: crd.latitude, longitude: crd.longitude, width: '100vw', height: '95vh', zoom: 12})
    
  }
  // Function to get user location from the browser
  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(setUserLocation)
  }
  
  const searchParams = {
    baseUrl: 'https://project2-proxy.herokuapp.com/https://api.yelp.com/v3/businesses/search?categories=food&',
    apiKey: process.env.REACT_APP_YELP_KEY,
    
  }

  const getDetailsByLocation = async (param) => {
    if(param === null) {
      return
    }
    try {
      const response = await fetch(`${searchParams.baseUrl}latitude=${param.latitude}&longitude=${param.longitude}&limit=50`, {
        "method": "GET",
        "headers": {
          "Authorization": `Bearer ${searchParams.apiKey}`
        }
      });
      const data = await response.json();
      setSearchData(data);
    } catch(err) {
      console.log(err);
    }
  }

  



  
  useEffect(() => {
    console.log('searching user useEffect');
    console.log(userPosition);
    getDetailsByLocation(userPosition);
  }, [userPosition]);

  useEffect(() => {
    console.log('searching city useEffect')
    console.log(searchViewport);
    getDetailsByLocation(searchViewport);
  }, [searchViewport])

  


  return (
    <div>
      <Map searchData={searchData} viewport={viewport} setViewport={setViewport} mapRef={mapRef} containerRef={containerRef}>
        <SearchBar setViewport={setViewport} viewport={viewport} setSearchViewport={setSearchViewport} mapRef={mapRef} containerRef={containerRef} locationModalOpen={locationModalOpen} closeLocationModal={closeLocationModal} introModalOpen={introModalOpen}></SearchBar>
      </Map>
      <ModalParent introModalOpen={introModalOpen} setIntroModalOpen={setIntroModalOpen} locationModalOpen={locationModalOpen} setLocationModalOpen={setLocationModalOpen} closeLocationModal={closeLocationModal} getUserLocation={getUserLocation} viewport={viewport} setViewport={setViewport} setSearchViewport={setSearchViewport} mapRef={mapRef} containerRef={containerRef}></ModalParent>
      
    </div>
    
  )
}




{/* <Router>
      <nav>
        {routes.map(route => <Link key={route.key} to={route.path}>{route.key}</Link>)}
      </nav>
      <Switch>
        {
          routes.map(({key, Component, path}) => (
            <Route
              key={key}
              path={path}
              component={props => <Component {...props} page={key} />}
              />))
        }
      </Switch>
    </Router> */}