const Country = (props) => {
  const country = props;
  return (
    <div className="wrapper">
      <div className="btn-head">
        <button className="btn" type="button" id={country.country}>{country.country}</button>
        <a className="click-link" href={country.country}>
          <>
            more info
          </>
        </a>
      </div>
      <p>
        Total-Confirmed:
        {country.links.today_confirmed}
      </p>
      <p>
        today Recovered:
        {country.links.today_recovered}
      </p>
    </div>
  );
};

export default Country;
