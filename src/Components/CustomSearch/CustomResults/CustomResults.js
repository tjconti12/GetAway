
const CustomResults = ({ resultData }) => {
    if(resultData === null || resultData === undefined) {
        return null;
    }
    return (
        <div>
            <h2>Number Of Results: {resultData.businesses.length}</h2>
            {resultData.businesses.map((result) => {
                return (
                    <div className="result-container">
                        <h3>{result.name}</h3>
                        <div className="result-img-container">
                            <img className="result-img" src={result.image_url} alt="business photo" />
                        </div>
                        <p>We are currently {result.is_closed ? "Closed" : "Open"}</p>
                        <h3>Location:</h3>
                        <p>{result.location.address1}</p>
                        <p>{result.location.city}, {result.location.state}, {result.location.zip_code}</p>
                        <a href={result.url} >Visit Website</a>

                    </div>
                )
            })}
        </div>
    )
}

export default CustomResults
