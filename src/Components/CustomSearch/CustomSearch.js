import {useState, useEffect} from 'react';
import CustomResults from './CustomResults/CustomResults';
import "./CustomSearch.css";

const CustomSearch = () => {

    const [city, setCity] = useState(null);
    const [searchTerm, setsearchTerm] = useState(null);
    const [numOfResults, setNumOfResults] = useState(1);
    const [resultData, setResultData] = useState(null);

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

    useEffect(() => {
        console.log(resultData)
    }, [resultData])


    return (
        <div class="page-container">
            <div className="custom-search-container">
                <div className="left-container">
                    <div className="title-container">
                        <i class="fas fa-search"></i>
                        <h1>Custom Search</h1>
                    </div>
                </div>
                <div className="right-container">
                    <form onSubmit={handleSubmit} className="custom-form">
                        <label htmlFor="city" className="label-city">Type In a City</label>
                        <input placeholder="City" type="text" className="input-city" id="city" name="city" onChange={handleCityChange} />
                        <label htmlFor="category" className="label-category">Type In a Category</label>
                        <input placeholder="Search Term" type="text" className="input-category" id="category" name="category" onChange={handleTermChange} />
                        <label htmlFor="numResults" className="label-num-results">Choose Number of Results:</label>
                        <select name="numResults" id="numResults" className="num-results" onChange={handleNumOfResultsChange}>
                            <option value="1">1</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                            <option value="25">25</option>
                            <option value="30">30</option>
                            <option value="35">35</option>
                            <option value="40">40</option>
                            <option value="45">45</option>
                            <option value="50">50</option>
                        </select>
                        <input type="submit" />
                    </form>
                </div>
            </div>
            <CustomResults resultData={resultData}></CustomResults>
        </div>
        
    )
}

export default CustomSearch
