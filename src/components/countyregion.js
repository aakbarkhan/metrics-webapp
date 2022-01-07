// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import RegionList from './countryRegionlist';
// import { getCountryRegionFromApi } from '../redux/actions/fetchapi';

// const Region = () => {
//   const dispatch = useDispatch();
//   const dataCovid = useSelector((state) => state.covidReducer);
//   console.log(dataCovid.country, 'regiondata');
//   useEffect(() => {
//     if (dataCovid.country) {
//       dispatch(getCountryRegionFromApi());
//     }
//   }, []);
//   return (
//     <div>
//       {/* <h1>Today&apos;s Covid details in Countries</h1> */}
//       <div className="title">
//         {dataCovid.country.map((ele) => (
//           <RegionList key={ele.id} data={ele} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Region;
