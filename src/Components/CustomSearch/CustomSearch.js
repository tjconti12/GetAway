import "./CustomSearch.css";

const CustomSearch = ({ handleSubmit, handleCityChange, handleTermChange, handleNumOfResultsChange }) => {

    


    return (
        <div class="page-container">
            <div className="custom-search-container">
                <div className="left-container">
                    
                </div>
                <div className="right-container">
                    <div className="title-container">
                        <i class="fas fa-search"></i>
                        <h1>Custom Search</h1>
                    </div>
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
            
        </div>
        
    )
}

export default CustomSearch
