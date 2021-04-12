import ModalElement from '../Modal/ModalElement';
import titleLogo from '../../SVGs/TitleLogo.svg';
import foodLogo from '../../SVGs/Food-icon-start.svg';
import exploreLogo from '../../SVGs/Explore-icon-start.svg';
import eventLogo from '../../SVGs/Event-icon-start.svg';
import {Link} from 'react-router-dom';
import "./Modal.css";

// These categories are the only ones that will return with the yelp api
const exploreCategories = "axethrowing,beachvolleyball,beaches,bungeejumping,climbing,escapegames,experiences,hiking,rock_climbing,sailing,skiing,snorkeling,arcades,gardens,outdoormovies,festivals,jazzandblues,artmuseums,wineries,hotsprings,tastingclasses,breweries,coffee,foodtrucks,streetvendors,tea,beertours,localflavor,bars,beergardens"



const IntroModal = ({isOpen, close, openLocationModal, setSearchCategory, setSearchType}) => {
    
    return (
        <div>
            <ModalElement isOpen={isOpen} close={close}>
            <div className="intro-modal-container">
                <h1><img className="title-logo" src={titleLogo} alt="App Logo with title that says GetAway" /></h1>
                <div className="btn-container">
                    <Link to="/Search">
                        <button className="start-btn" onClick={() => {
                            setSearchType('businesses/search?categories=')
                            setSearchCategory('food')
                            close()
                            openLocationModal()
                        }}>
                            <img src={foodLogo} alt="Food Icon" />
                            <h2>Food</h2>
                        </button>
                    </Link>
                    <Link to="/Search">
                        <button className="start-btn" onClick={() => {
                            setSearchType('businesses/search?categories=')
                            setSearchCategory(exploreCategories);
                            close();
                            openLocationModal();
                        }}>
                            <img src={exploreLogo} alt="Explore Icon" />
                            <h2>Explore</h2>
                        </button>
                    </Link>
                    <Link to="/Search">
                        <button className="start-btn" onClick={() => {
                            setSearchType('events?')
                            close();
                            openLocationModal();
                        }}>
                            <img src={eventLogo} alt="Event Icon" />
                            <h2>Events</h2>
                        </button>
                    </Link>
                </div>
            </div>
            </ModalElement>
        </div>
    )
}

export default IntroModal
