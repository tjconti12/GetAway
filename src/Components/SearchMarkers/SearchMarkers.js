import {Marker} from 'react-map-gl';
import './SearchMarkers.css';
import foodLogo from '../../food-icon.svg';
import exploreLogo from '../../TriangleLogo.svg';
import eventLogo from '../../eventLogo.svg';

const SearchMarkers = ({ searchData, setSelected, searchType, searchCategory, introModalOpen }) => {
    if (introModalOpen) {
      return null;
    }
    if (searchData === {} || searchData === null || searchData === undefined) {
        return <h1>Loading</h1>
    } else if (searchData.total === 0) {
      return <h1>No Results Found</h1>
    } else if (searchType == 'events?') {
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
    console.log(searchData)
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
