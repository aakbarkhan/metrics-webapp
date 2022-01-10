import { useParams } from 'react-router-dom';

const Details = (props) => {
  const cou = props;
  const country = useParams();
  return (
    <div className="details">
      <div className="info">
        <div className="contry-div">
          <h1>
            Country:
            {country.country}
          </h1>
        </div>
        <div className="details-div">
          <p>
            <b>Date:</b>
            <b>{cou.data.date}</b>
          </p>
          <p>
            <b>
              SOURCE:
              {cou.data.source}
            </b>
          </p>
          <p>
            <b>
              TOTAL CONFIRMED:
              {cou.data.today_confirmed}
            </b>
          </p>
          <p>
            <b>
              TOTAL DEATH:
              {cou.data.today_deaths}
            </b>
          </p>
          <p>
            <b>
              CONFIRMED:
              {cou.data.today_new_confirmed}
            </b>
          </p>
          <p>
            <b>
              TODAY DEATH:
              {cou.data.today_new_deaths}
            </b>
          </p>
          <p>
            <b>
              today_new_open_cases:
              {cou.data.today_new_open_cases}
            </b>
          </p>
          <p>
            <b>
              today_new_recovered:
              {cou.data.today_new_recovered}
            </b>
          </p>
          <p>
            <b>
              today_open_cases:
              {cou.data.today_open_cases}
            </b>
          </p>
          <p>
            <b>
              today_recovered:
              {cou.data.today_recovered}
            </b>
          </p>
          <p>
            <b>
              today_vs_yesterday_confirmed:
              {cou.data.today_vs_yesterday_confirmed}
            </b>
          </p>
          <p>
            <b>
              today_vs_yesterday_deaths:
              {cou.data.today_vs_yesterday_deaths}
            </b>
          </p>
          <p>
            <b>
              today_vs_yesterday_open_cases
              {cou.data.today_vs_yesterday_open_cases}
            </b>
          </p>
          <p>
            <b>
              today_vs_yesterday_recovered
              {cou.data.today_vs_yesterday_recovered}
            </b>
          </p>
          <p>
            <b>
              yesterday_confirmed:
              {cou.data.yesterday_confirmed}
            </b>
          </p>
          <p>
            yesterday_deaths:
            {cou.data.yesterday_deaths}
          </p>
          <p>
            <b>
              yesterday_open_cases:
              {cou.data.yesterday_open_cases}
            </b>
          </p>
          <p>
            <b>
              yesterday_recovered
              {cou.data.yesterday_recovered}
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
