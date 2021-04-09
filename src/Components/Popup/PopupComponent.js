
import {Popup} from 'react-map-gl';
import './Popup.css';

const PopupComponent = ({ selected, setSelected, searchType }) => {
    
    
    if(!selected) {
        return null;
    }
    if (searchType == 'events?') {
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
            <Popup latitude={selected.coordinates.latitude} longitude={selected.coordinates.longitude} onClose={() => {
                setSelected(null);
            }}>
                <h2>{selected.name}</h2>
                <h3>Type: {}
                    {selected.categories.map((element) => {
                        return (<span>{element.title}, </span>)
                    })}
                </h3>
                
                
            </Popup>
        </div>
    )
}

export default PopupComponent
