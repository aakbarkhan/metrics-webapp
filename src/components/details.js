const Details = (props) => {
  const country = props;
  return (
    <div>
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
    </div>
  );
};

export default Details;
