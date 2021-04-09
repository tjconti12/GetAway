
import {Popup} from 'react-map-gl';

const PopupComponent = ( {selected, setSelected} ) => {
    
    if(!selected) {
        return null;
    }
    return (
        <div>
            <Popup latitude={selected.coordinates.latitude} longitude={selected.coordinates.longitude} onClose={() => {
                setSelected(null);
            }}>
                <h2>{selected.name}</h2>
            </Popup>
        </div>
    )
}

export default PopupComponent
