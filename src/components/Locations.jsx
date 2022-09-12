import { useState, useEffect } from "react";
import axios from "axios";
import ResidentInfo from "./ResidentInfo";
import headerGradient from "../assets/headerGradient.png";
import Pagination from "./Pagination";

function Locations() {
  const [location, setLocation] = useState({});
  const [locationId, setLocationId] = useState("");
  const [locationName, setLocationName] = useState("");
  const [locationSearch, setLocationSearch] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  useEffect(() => {
    const id = locationId ? locationId : Math.floor(Math.random() * 126) + 1;

    axios
      .get(`https://rickandmortyapi.com/api/location/${id}`)
      .then((res) => setLocation(res.data));
  }, [locationId]);

  useEffect(() => {
    searchLocationName();
  }, [locationName]);

  useEffect(() => {}, [page]);

  function changeLocation(id) {
    setLocationId(id);

    setLocationName("");
  }

  function searchLocationName() {
    if (locationName.length >= 3) {
      const url = `https://rickandmortyapi.com/api/location/?name=${locationName}`;
      axios.get(url).then((res) => setLocationSearch(res.data.results));
    }
  }

  function changePage(page) {
    setPage(page);
  }

  let total = location.residents?.length;

  const array = locationSearch;

  array.splice(6);

  let residents = location?.residents;

  let start = page > 1 ? page * itemsPerPage - itemsPerPage : 0;
  let end = page * itemsPerPage;

  residents = residents?.slice(start, end);

  return (
    <div className="locationContainer">
      <header>
        <img className="backgroundHeader" src={headerGradient} />
        <div className="inputContainer">
          <div className="inputSearch">
            <input
              placeholder="Search your location"
              type="text"
              value={locationName}
              onChange={(e) => setLocationName(e.target.value)}
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          {locationName && (
            <ul>
              {array.map((place) => (
                <li
                  className="liveSearchList"
                  key={place.id}
                  onClick={() => {
                    changeLocation(place.id);
                  }}
                >
                  {place.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </header>

      {/* <button onClick={searchLocationName}>Search</button> */}

      <div className="locationInfoContainer">
        <h2>{location.name}</h2>
        <div className="locationInfo">
          <p className="cityInfo">
            <b>Type: </b>
            {location.type}
          </p>
          <div className="line"></div>
          <p className="cityInfo">
            <b>Dimension: </b>
            {location.dimension}
          </p>
          <div className="line"></div>
          <p className="cityInfo">
            <b>Population: </b>
            {total}
          </p>
        </div>
      </div>

      <div className="residentsContainer">
        {residents?.map((resident) => (
          <ResidentInfo url={resident} key={resident} />
        ))}
      </div>

      {residents && (
        <div className="paginaitonConatiner">
          <Pagination
            changePage={changePage}
            itemsPerPage={itemsPerPage}
            currentPage={page}
            array={location?.residents}
          />
        </div>
      )}
    </div>
  );
}

export default Locations;
