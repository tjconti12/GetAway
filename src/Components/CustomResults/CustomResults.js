import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import {useEffect, useState} from 'react';

const CustomResults = ({ resultData }) => {

const [searchData, setSearchData] = useState(null);
console.log(resultData);

useEffect(() => {
    setSearchData(null);
}, [])

useEffect(() => {
    setSearchData(resultData);
}, [resultData])

console.log(searchData);

    if(searchData === null || searchData === undefined) {
        return (
            <div className="loader">
                <h1>Loading...</h1>
                <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />    
            </div>
        )
    }
    return (
        <div className="all-results">
            <h2 className="num-results-display">Number Of Results: {searchData.businesses.length}</h2>
            {searchData.businesses.map((result) => {
                return (
                    <div className="result-container">
                        <hr />
                        <h3 className="result-title">{result.name}</h3>
                        <div className="result-img-container">
                            <img className="result-img" src={result.image_url} alt="business photo" />
                        </div>
                        <p className="open-status">We are currently <span className="open-span">{result.is_closed ? "Closed" : "Open"}</span></p>
                        <h3 className="location">Location:</h3>
                        <div className="address-div">
                            <p>{result.location.address1}</p>
                            <p>{result.location.city}, {result.location.state}, {result.location.zip_code}</p>
                        </div>
                        <a className="website-link" href={result.url} >Visit Website</a>
                        

                    </div>
                )
            })}
        </div>
    )
}

export default CustomResults
