import { useParams } from 'react-router-dom';

const Details = () => {
  // const data = props;
  // console.log(props, 'coudata');
  const country = useParams();
  // if (data.length !== 0) {
  //   console.log(data.length, 'not props');
  // }
  return (
    <>
      <>{`${country.country}`}</>
      {/* <>{data.data.All.capital_city}</> */}
    </>
    // <div className="details">
    //   <div className="contry-div">
    //     <h1>
    //       Country:
    //       {country.country}
    //     </h1>
    //   </div>
    //   <div className="info">
    //     <div className="details-div">
    //       <div className="dates">
    //         <h2 className="date-head">DETAILS</h2>
    //         <p>
    //           <b>Capital:</b>
    //           { data.data.All.capital_city  }
    //         </p>
    //       </div>
    //       <div className="main-wrap">
    //         <div className="sor">
    //           <p className="dat-type">SOURCE:</p>
    //           <b className="dat-type">{}</b>
    //         </div>
    //         <div className="sor">
    //           <p className="dat-type">TOTAL CONFIRMED:</p>
    //           <b className="dat-type">{}</b>
    //         </div>
    //         <div className="sor">
    //           <p className="dat-type">TOTAL DEATH:</p>
    //           <b className="dat-type">{}</b>
    //         </div>
    //         <div className="sor">
    //           <p className="dat-type">CONFIRMED:</p>
    //           <b className="dat-type">{ }</b>
    //         </div>
    //         <div className="sor">
    //           <p>TODAY DEATH:</p>
    //           <b className="dat-type">{ }</b>
    //         </div>
    //         <div className="sor">
    //           <p>today_new_open_cases:</p>
    //           <b className="dat-type">{ }</b>
    //         </div>
    //         <div className="sor">
    //           <p>today_new_recovered:</p>
    //           <b className="dat-type">{ }</b>
    //         </div>
    //         <div className="sor">
    //           <p>today_open_cases:</p>
    //           <b className="dat-type">{ }</b>
    //         </div>
    //         <div className="sor">
    //           <p>today_recovered:</p>
    //           <b className="dat-type">{ }</b>
    //         </div>
    //         <div className="sor">
    //           <p>today_vs_yesterday_confirmed:</p>
    //           <b className="dat-type">{ }</b>
    //         </div>
    //         <div className="sor">
    //           <p>today_vs_yesterday_deaths:</p>
    //           <b className="dat-type">{ }</b>
    //         </div>
    //         <div className="sor">
    //           <p>today_vs_yesterday_open_cases:</p>
    //           <b className="dat-type">{ }</b>
    //         </div>
    //         <div className="sor">
    //           <p>today_vs_yesterday_recovered:</p>
    //           <b className="dat-type">{ }</b>
    //         </div>
    //         <div className="sor">
    //           <p>yesterday_confirmed:</p>
    //           <b className="dat-type">{ }</b>
    //         </div>
    //         <div className="sor">
    //           <p>yesterday_deaths:</p>
    //           <b className="dat-type">{ }</b>
    //         </div>
    //         <div className="sor">
    //           <p>yesterday_open_cases:</p>
    //           <b className="dat-type">{ }</b>
    //         </div>
    //         <div className="sor">
    //           <p>yesterday_recovered:</p>
    //           <b className="dat-type">{ }</b>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Details;
