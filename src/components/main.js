import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Country from './countrylist';
import { getCovidFromApi } from '../redux/actions/fetchapi';

const todayDate = new Date().toISOString().slice(0, 10);
const Home = () => {
  const dispatch = useDispatch();
  const dataCovid = useSelector((state) => state.covidReducer);
  console.log(dataCovid, 'data');
  useEffect(() => {
    if (!dataCovid.covid.countries) {
      dispatch(getCovidFromApi());
    }
  }, []);
  return (
    <div>
      <h1>{todayDate}</h1>
      <h1>Today&apos;s Covid details in Countries</h1>
      <div className="title">
        {dataCovid.covid.map((ele) => (
          <Country key={ele[1].id} country={ele[0]} links={ele[1]} />
        ))}
      </div>
    </div>
  );
};

export default Home;
