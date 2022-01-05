// import React, { useSelector } from 'react';
// import { useDispatch } from 'react-redux';
// import { createReserve } from '../redux/actions/rocket';

const Country = (props) => {
  const country = props;
  //   console.log(country, 'props');
  // const dispatch = useDispatch();
  // const { reserve } = rocket.rock;
  //   const handleReserve = () => {
  //     const toggle = !reserve;
  //     const setReserve = (() => ({ ...rocket.rock, reserve: toggle }));
  //     dispatch(createReserve(setReserve()));
  //   };
  return (
    <div className="wrapper">
      <h1>{country.country}</h1>
      <p>
        Today-Confirmed:
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
    </div>
  );
};

export default Country;
