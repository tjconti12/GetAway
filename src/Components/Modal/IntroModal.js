import ModalElement from '../Modal/ModalElement';
import {useState} from 'react';

const exploreCategories = "axethrowing,beachvolleyball,beaches,bungeejumping,climbing,escapegames,experiences,hiking,rock_climbing,sailing,skiing,snorkeling,arcades,gardens,outdoormovies,festivals,jazzandblues,artmuseums,wineries,hotsprings,tastingclasses,breweries,coffee,foodtrucks,streetvendors,tea,beertours,localflavor,bars,beergardens"



const IntroModal = ({isOpen, close, openLocationModal, setSearchCategory, setSearchType}) => {
    
    return (
        <div>
            <ModalElement isOpen={isOpen} close={close}>
                <h1>App Title</h1>
                <button onClick={() => {
                    // navigator.geolocation.getCurrentPosition(updateUserPosition)
                    setSearchType('businesses/search?categories=')
                    setSearchCategory('food')
                    close()
                    openLocationModal()
                    // getDetails();
                    // const showPosition = (loc) => console.log(loc)
                }}>Food</button>
                <button onClick={() => {
                    setSearchType('businesses/search?categories=')
                    setSearchCategory(exploreCategories);
                    close();
                    openLocationModal();
                }}>Explore</button>
                <button onClick={() => {
                    setSearchType('events?')
                    close();
                    openLocationModal();
                }}>Events</button>
            </ModalElement>
            
        </div>
    )
}

export default IntroModal
