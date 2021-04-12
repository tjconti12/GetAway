import { useLocation } from 'react-router-dom';
import {Marker} from 'react-map-gl';
import Loader from "react-loader-spinner";
import './SearchMarkers.css';
import foodLogo from '../../SVGs/food-icon.svg';
import exploreLogo from '../../SVGs/TriangleLogo.svg';
import eventLogo from '../../SVGs/eventLogo.svg';

const SearchMarkers = ({ searchData, setSelected, searchType, searchCategory, introModalOpen, locationModalOpen }) => {
  const location = useLocation();
   
  if (introModalOpen || locationModalOpen || location.pathname === "/Map") {
      return null;
    }
    if (searchData === {} || searchData === null || searchData === undefined) {
        return (
          <div className="loader">
            <h1>Loading...</h1>
            <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
          </div>
        )
         
    } else if (searchData.total === 0) {
      return <h1>No Results Found</h1>
    } else if (searchType === 'events?') {
      return (
        <div>
          {searchData.events.map((event) => {
              return (
              <Marker latitude={event.latitude} longitude={event.longitude}>
                <button className="marker-btn" onClick={() => {
                  setSelected(event)
                }}>
                  <img src={eventLogo} alt="Event Icon" />
                </button>
              </Marker>
            )
          })}
        </div>
      )
    }
    
    return (
        <div>
            {searchData.businesses.map((business, i) => {
        return (
          <Marker key={business.id} latitude={business.coordinates.latitude} longitude={business.coordinates.longitude}>
            <button className="marker-btn" onClick={() => {
              setSelected(business)
            }}>
              {searchCategory === 'food' ? <img src={foodLogo} alt="restaurant Icon" /> : <img src={exploreLogo} alt="Explore Result Icon" />}
              
              
            </button>
          </Marker>
        )
      })}
        </div>
    )
}

export default SearchMarkers
