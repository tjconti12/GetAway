import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Map from './Components/Map/Map';
import SearchBar from './Components/SearchBar/SearchBar';
import Navbar from './Components/Navbar/Navbar';
import CustomSearch from './Components/CustomSearch/CustomSearch';
import IntroModal from './Components/Modal/IntroModal';
import LocationModal from './Components/Modal/LocationModal';
import CustomResults from './Components/CustomResults/CustomResults';



export default function App () {
  
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

  // Declaring History to use for redirect in popup link
  const history = useHistory();

  // State For Custom Search
  const [city, setCity] = useState(null);
  const [searchTerm, setsearchTerm] = useState(null);
  const [numOfResults, setNumOfResults] = useState(1);
  const [resultData, setResultData] = useState(null);

  // Functions for Custom Search
  const handleCityChange = (event) => {
      setCity(event.target.value);
  }

  const handleTermChange = (event) => {
      setsearchTerm(event.target.value);
  }

  const handleNumOfResultsChange = (event) => {
      setNumOfResults(event.target.value);
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      console.log(city, searchTerm, numOfResults);
      getCustomSearch();
      history.push('/SearchResults');
  }

  const customSearchParams = {
      baseUrl: 'https://project2-proxy.herokuapp.com/https://api.yelp.com/v3/businesses/search?',
      apiKey: process.env.REACT_APP_YELP_KEY,
        
    }

  const getCustomSearch = async () => {
      try {
        const response = await fetch(`${customSearchParams.baseUrl}term=${searchTerm}&location=${city}&limit=${numOfResults}`, {
          "method": "GET",
          "headers": {
            "Authorization": `Bearer ${customSearchParams.apiKey}`
          }
        });
        const data = await response.json();
        setResultData(data);
      } catch(err) {
        console.log(err);
      }
    }



  // This function redirects user after clicking the see more details in the popup
  const handleMapDetailClick = () => {
    history.push('/SearchResults')
  }

  
  
  // Modal Functions

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
  
  // Search Parameters for Map search
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
      <Switch>
        <Route exact path="/">
          <Navbar></Navbar>
          <IntroModal isOpen={introModalOpen} close={closeIntroModal} openLocationModal={openLocationModal} setSearchCategory={setSearchCategory} setSearchType={setSearchType}></IntroModal>
          <Map viewport={viewport} setViewport={setViewport} introModalOpen={introModalOpen}></Map>
        </Route>
        <Route exact path="/Search">
          <Navbar setIntroModalOpen={setIntroModalOpen} ></Navbar>
          <Map searchData={searchData} viewport={viewport} setViewport={setViewport} mapRef={mapRef} searchType={searchType} searchCategory={searchCategory} introModalOpen={introModalOpen} locationModalOpen={locationModalOpen} setResultData={setResultData} handleMapDetailClick={handleMapDetailClick}>
            <SearchBar setViewport={setViewport} viewport={viewport} setSearchViewport={setSearchViewport} mapRef={mapRef} containerRef={containerRef} closeLocationModal={closeLocationModal} introModalOpen={introModalOpen}></SearchBar>
          </Map>
          <LocationModal isOpen={locationModalOpen} close={closeLocationModal} setIntroModalOpen={setIntroModalOpen} getUserLocation={getUserLocation} containerRef={containerRef}></LocationModal>
        </Route>
        <Route path="/Map">
          <Navbar setIntroModalOpen={setIntroModalOpen}></Navbar>
          <Map viewport={viewport} setViewport={setViewport} mapRef={mapRef} handleMapDetailClick={handleMapDetailClick}>
            <SearchBar setViewport={setViewport} viewport={viewport} setSearchViewport={setSearchViewport} mapRef={mapRef} setResultData={setResultData}></SearchBar>
          </Map>
        </Route>
        <Route path="/CustomSearch">
          <Navbar setIntroModalOpen={setIntroModalOpen}></Navbar>
          <CustomSearch handleSubmit={handleSubmit} handleCityChange={handleCityChange} handleTermChange={handleTermChange} handleNumOfResultsChange={handleNumOfResultsChange}></CustomSearch>
        </Route>
        <Route path="/SearchResults">
          <Navbar setIntroModalOpen={setIntroModalOpen}></Navbar>
          <CustomResults resultData={resultData}></CustomResults>
        </Route>
      </Switch>
    </div>
    
  )
}




