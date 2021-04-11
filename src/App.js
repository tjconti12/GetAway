import './App.css';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import Map from './Components/Map/Map';

import Other from './Other'
import Home from './Home'


import SearchBar from './Components/SearchBar/SearchBar';
import Navbar from './Components/Navbar/Navbar';
import CustomSearch from './Components/CustomSearch/CustomSearch';
import IntroModal from './Components/Modal/IntroModal';
import LocationModal from './Components/Modal/LocationModal';



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
  console.log(Date.now());

  // Map viewport state
  const [viewport, setViewport] = useState({
    latitude: 28.5421109,
    longitude: -81.3790304,
    zoom: 10
  })

  const [searchViewport, setSearchViewport] = useState(null);


  // Search Data from Yelp
  const [searchData, setSearchData] = useState(null);
  // Search Type
  const [searchType, setSearchType] = useState('businesses/search?categories=')
  // Search Category
  const [searchCategory, setSearchCategory] = useState('');
  // User Position Coordinates State
  const [userPosition, setUserPosition] = useState(null);

  const [introModalOpen, setIntroModalOpen] = useState(true);
  const [locationModalOpen, setLocationModalOpen] = useState(false);
  
  

  const closeLocationModal = () => {
    setLocationModalOpen(false);
  }

  const closeIntroModal = () => {
    setIntroModalOpen(false);
  }



  const openLocationModal = () => {
    setLocationModalOpen(true);
  }

  

  // Ref for Map
  const mapRef = useRef();
  // Ref for search container
  const containerRef = useRef(null);

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
    baseUrl: 'https://project2-proxy.herokuapp.com/https://api.yelp.com/v3/',
    apiKey: process.env.REACT_APP_YELP_KEY,
    
  }

  const getDetailsByLocation = async (param) => {
    if(param === null) {
      return
    }
    try {
      const response = await fetch(`${searchParams.baseUrl}${searchType}${searchCategory}&latitude=${param.latitude}&longitude=${param.longitude}&limit=50`, {
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
      <Route exact path="/">
        <Navbar></Navbar>
        <IntroModal isOpen={introModalOpen} close={closeIntroModal} openLocationModal={openLocationModal} setSearchCategory={setSearchCategory} setSearchType={setSearchType}></IntroModal>
        <Map viewport={viewport} setViewport={setViewport} introModalOpen={introModalOpen}></Map>
      </Route>
      <Route exact path="/Search">
        <Navbar setIntroModalOpen={setIntroModalOpen} ></Navbar>
        <Map searchData={searchData} viewport={viewport} setViewport={setViewport} mapRef={mapRef} searchType={searchType} searchCategory={searchCategory}>
          <SearchBar setViewport={setViewport} viewport={viewport} setSearchViewport={setSearchViewport} mapRef={mapRef} containerRef={containerRef} closeLocationModal={closeLocationModal} introModalOpen={introModalOpen}></SearchBar>
        </Map>
        <LocationModal isOpen={locationModalOpen} close={closeLocationModal} setIntroModalOpen={setIntroModalOpen} getUserLocation={getUserLocation} viewport={viewport} setViewport={setViewport} setSearchViewport={setSearchViewport} mapRef={mapRef} containerRef={containerRef}></LocationModal>
      </Route>
      <Route path="/Map">
        <Navbar setIntroModalOpen={setIntroModalOpen}></Navbar>
        <Map viewport={viewport} setViewport={setViewport} mapRef={mapRef}>
          <SearchBar setViewport={setViewport} viewport={viewport} setSearchViewport={setSearchViewport} mapRef={mapRef}></SearchBar>
        </Map>
      </Route>
      <Route path="/CustomSearch">
        <Navbar setIntroModalOpen={setIntroModalOpen}></Navbar>
        <CustomSearch></CustomSearch>
      </Route>
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