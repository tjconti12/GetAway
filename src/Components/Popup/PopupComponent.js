import {Popup} from 'react-map-gl';
import './Popup.css';

const PopupComponent = ({ selected, setSelected, searchType, setResultData, handleMapDetailClick }) => {
    
    
    if(!selected) {
        return null;
    }
    if (searchType === 'events?') {
        return (
            <div>
                <Popup latitude={selected.latitude} longitude={selected.longitude} onClose={() => {
                    setSelected(null);
                }} >
                    <h2>{selected.name}</h2>
                    <h3>{selected.description}</h3>
                    <h3>{selected.time_start}</h3>
                    <h3>{selected.time_end}</h3>
                    <img className="popup-img" src={selected.image_url} alt={selected.id} />
                </Popup>
            </div>
        )
    }
    return (
        <div>
            <Popup latitude={selected.coordinates.latitude} longitude={selected.coordinates.longitude} closeOnClick={false} onClose={() => {
                setSelected(null);
            }}>
                <div className="popup">
                    <h2 className="popup-name">{selected.name}</h2>
                    <div className="popup-img-container">
                        <img className="popup-img" src={selected.image_url} alt={selected.id} />
                    </div>
                    <h3 className="popup-type">Type: {}
                        {selected.categories.map((element) => {
                            return (<span>{element.title}, </span>)
                        })}
                    </h3>
                    <button className="popup-moreInfo-btn" onClick={() => {
                        setResultData({businesses: [selected]});
                        handleMapDetailClick();
                    }}>See More Info</button>
                </div>
            </Popup>
        </div>
    )
}

export default PopupComponent
