const FETCH_COVID = 'FETCH_COVID';
const FETCH_COUNTRYREGION = 'FETCH_COUNTRYREGION';
// const CREATE_RESERVE = 'CREATE_RESERVE';
// const CREATE_JOIN = 'CREATE_JOIN';

const todayDate = new Date().toISOString().slice(0, 10);
console.log(todayDate);
const baseUrldate = `https://api.covid19tracking.narrativa.com/api/${todayDate}`;
const basedateRegionUrl = `https://api.covid19tracking.narrativa.com/api/${todayDate}/country/india`;
const initialState = {
  covid: [],
  country: [],
};

export const getCovid = (payload) => ({
  type: FETCH_COVID,
  payload,
});

export const getCountryRegion = (payload) => ({
  type: FETCH_COUNTRYREGION,
  payload,
});

// export const createReserve = (payload) => ({
//   type: CREATE_RESERVE,
//   payload,
// });

// export const createJoin = (payload) => ({
//   type: CREATE_JOIN,
//   payload,
// });

export const getCovidFromApi = () => async (dispatch) => {
  const request = await fetch(baseUrldate);
  const response = await request.json();
  console.log(response.dates[todayDate].countries, 'choose');
  const data = response.dates[todayDate].countries;
  const entries = Object.entries(data);
  console.log(entries, 'entries');
  dispatch(getCovid(entries));
};

export const getCountryRegionFromApi = () => async (dispatch) => {
  const request = await fetch(basedateRegionUrl);
  const response = await request.json();
  dispatch(getCountryRegion(response));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COVID:
      return { ...state, covid: action.payload };
    case FETCH_COUNTRYREGION:
      return { ...state, country: action.payload };
    // case FETCH_MISSIONS:
    //   return { ...state, missions: action.payload };
    // case CREATE_RESERVE: {
    //   const changeState = state.rockets.map((el) => {
    //     if (el.id === action.payload.id) {
    //       return { ...el, reserve: action.payload.reserve };
    //     }
    //     return el;
    //   });
    //   return { ...state, rockets: changeState };
    // }
    // case CREATE_JOIN: {
    //   const changeJoin = state.missions.map((el) => {
    //     if (el.mission_id === action.payload.mission_id) {
    //       return { ...el, join: action.payload.join };
    //     }
    //     return el;
    //   });
    //   return { ...state, missions: changeJoin };
    // }
    default:
      return state;
  }
};

export default reducer;
