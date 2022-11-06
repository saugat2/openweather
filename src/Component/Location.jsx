import React, { useState, useEffect } from 'react'

export const Location = () => {
  const [city, setCity] = useState(null);
  const[hrcity, sethrCity]=useState(null);
  const [search, setSearch] = useState("kathmandu");
  useEffect(() => {
    const fetchApi_currently = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b3e379e471a4e9f2f5754c62500cf6ed`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    }
    fetchApi_currently();
  }, [search])
  // useEffect(() => {
  //   const fetchApi = async () => {
  //     const url_hr = `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${search}&appid=b3e379e471a4e9f2f5754c62500cf6ed`;
  //     const response1 = await fetch(url_hr);
  //     const resJson1 = await response1.json();
  //     sethrCity(resJson1.main);
  //   }
  //   fetchApi();
  // }, [search])

  return (
    <>
      <div className="box">
        <div className='weather-forcast'>
          <input type="search" name="city" value={search} onChange={(event) => { setSearch(event.target.value) }} />

        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="box_result">
              {!city ? (
                <p>No Data Found</p>
              ) : (
                <>
                  <div className="result">
                    <h3>Current Result</h3>
                    <h2 className='location'>
                      {search}
                    </h2>
                    <h1 className='temp'>
                      {city.temp}
                    </h1>
                    <p>Min:{city.temp_min} || Max:{city.temp_max}</p>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="col-md-4">
            <div className="box_result">
              {!hrcity ? (
                <p>No Data Found</p>
              ) : (
                <>
                  <div className="result">
                    <h3>Current Result</h3>
                    <h2 className='location'>
                      {search}
                    </h2>
                    <h1 className='temp'>
                      {hrcity.temp}
                    </h1>
                    {/* <p>Min:{city.temp_min} || Max:{city.temp_max}</p> */}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
