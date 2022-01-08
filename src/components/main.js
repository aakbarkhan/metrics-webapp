import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Country from './countrylist';
import { getCovidFromApi, getCovid } from '../redux/actions/fetchapi';

const todayDate = new Date().toISOString().slice(0, 10);
const Home = () => {
  const dispatch = useDispatch();
  const dataCovid = useSelector((state) => state.covidReducer);
  // console.log(dataCovid, 'data');
  useEffect(() => {
    if (dataCovid.covid) {
      console.log('hello api', dataCovid.covid);
      dispatch(getCovidFromApi());
    }
  }, []);

  // const [date, setDate] = useState(todayDate);
  const handleSub = () => {
    const num = document.getElementById('date').value;
    const baseUrldate = `https://api.covid19tracking.narrativa.com/api/${num}`;
    const api = () => async () => {
      const request = await fetch(baseUrldate);
      const response = await request.json();
      const data = response.dates[num].countries;
      const entries = Object.entries(data);
      dispatch(getCovid(entries));
      console.log(entries, 'usestate dat');
    };
    dispatch(api());
    console.log(baseUrldate, 'clickkkbaseurl date');
  };
  return (
    <div>
      <h1>
        {todayDate}
      </h1>
      <form>
        <input type="date" id="date" format="YYYY-MM-DD" />
        <button id="sub" onClick={handleSub} type="button">
          CLICK!
        </button>
      </form>
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
