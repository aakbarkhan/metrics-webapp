import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCovidFromApi, getCountry } from '../redux/actions/fetchapi';

import Details from './details';

// const todayDate = new Date().toISOString().slice(0, 10);
const DetailsList = () => {
  const dispatch = useDispatch();
  //   console.log(country.country, 'countryName');
  const dataCovid = useSelector((state) => state.covidReducer);
  useEffect(() => {
    if (dataCovid.country.length === 0) {
      dispatch(getCovidFromApi());
      console.log('hello api', dataCovid.covid);
    }
  }, []);
  const todayDate = new Date().toISOString().slice(0, 10);
  const handleCountry = () => {
    const country = useParams();
    const hello = country.country;
    // const num = document.getElementById('date').value;
    const baseUrldate = `https://api.covid19tracking.narrativa.com/api/${todayDate}/country/${hello}`;
    const api = () => async () => {
      const request = await fetch(baseUrldate);
      const response = await request.json();
      const data = response.dates[todayDate].countries[hello];
      console.log(data, 'usestate dat');

      // const entries = Object.entries(data);
      dispatch(getCountry(data));
    };
    dispatch(api());
    // console.log(baseUrldate, 'call the region');
  };
  if (dataCovid.country.length === 0) {
    handleCountry();
  }
  return (
    <div>
      <h1>
        {todayDate}
      </h1>
      <h1>Today&apos;s Covid details in Country</h1>
      <div className="cou">
        <Details data={dataCovid.country} />
      </div>
    </div>
  );
};

export default DetailsList;