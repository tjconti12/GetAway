import {Marker} from 'react-map-gl';

const SearchMarkers = ({ searchData, setSelected }) => {
    if (searchData === {} || searchData === null || searchData === undefined) {
        return <h1>Loading</h1>
    }
    return (
        <div>
            {searchData.businesses.map((business, i) => {
        return (
          <Marker key={business.id} latitude={business.coordinates.latitude} longitude={business.coordinates.longitude}>
            <button onClick={() => {
              setSelected(business)
            }}>
              Restuarant
            </button>
          </Marker>
        )
      })}
        </div>
    )
}

export default SearchMarkers
