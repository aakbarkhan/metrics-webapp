// import React, { useSelector } from 'react';
// import { useDispatch } from 'react-redux';
// import { getCountryRegion } from '../redux/actions/fetchapi';
// import { createReserve } from '../redux/actions/rocket';
// import Details from './details';

const Country = (props) => {
  const country = props;
  // const dispatch = useDispatch();

  //   console.log(country, 'props');
  // const dispatch = useDispatch();
  // const { reserve } = rocket.rock;
  //   const handleReserve = () => {
  //     const toggle = !reserve;
  //     const setReserve = (() => ({ ...rocket.rock, reserve: toggle }));
  //     dispatch(createReserve(setReserve()));
  //   };
  // const todayDate = new Date().toISOString().slice(0, 10);
  // const handleCountry = () => {
  //   const hello = document.getElementById(`${country.country}`).innerText;
  //   const num = document.getElementById('date').value;
  //   const baseUrldate = `https://api.covid19tracking.narrativa.com/api/${num}/country/${hello}`;
  //   const api = () => async () => {
  //     const request = await fetch(baseUrldate);
  //     const response = await request.json();
  //     const data = response.dates[num].countries[hello];
  //     const entries = Object.entries(data);
  //     dispatch(getCountryRegion(entries));
  //     console.log(entries, 'usestate dat');
  //   };
  //   dispatch(api());
  //   // console.log(baseUrldate, 'call the region');
  // };
  return (
    <div className="wrapper">
      <button type="button" href="/region" id={country.country}>{country.country}</button>
      <a href="/details">Click for Details</a>
      <p>
        Total-Confirmed:
        {country.links.today_confirmed}
      </p>
      <p>
        Today deaths:
        {country.links.today_deaths}
      </p>
      <p>
        today new confirmed:
        {country.links.today_new_confirmed}
      </p>
      <p>
        today_new_death:
        {country.links.today_new_deaths}
      </p>
      <p>
        today_new_case:
        {country.links.today_new_open_cases}
      </p>
      <p>
        today_new_reco:
        {country.links.today_new_recovered}
      </p>
      <p>
        today_new_opencase:
        {country.links.today_open_cases}
      </p>
      <p>
        today Recovered:
        {country.links.today_recovered}
      </p>
      {/* <Details country={country} /> */}
    </div>
  );
};

export default Country;
