const FETCH_COVID = 'FETCH_COVID';
// const FETCH_REGION = 'FETCH_REGION';
// const CHANGE_APIDATE = 'CHANGE_APIDATE';

const todayDate = new Date().toISOString().slice(0, 10);

const baseUrldate = `https://api.covid19tracking.narrativa.com/api/${todayDate}`;
// const basedateRegionUrl = `https://api.covid19tracking.narrativa.com/api/${todayDate}/country/india`;
const initialState = {
  covid: [],
};

export const getCovid = (payload) => ({
  type: FETCH_COVID,
  payload,
});

// export const getCountryRegion = (payload) => ({
//   type: FETCH_REGION,
//   payload,
// });

// export const changeDate = (payload) => ({
//   type: CHANGE_APIDATE,
//   payload,
// });

// export const createJoin = (payload) => ({
//   type: CREATE_JOIN,
//   payload,
// });

export const getCovidFromApi = () => async (dispatch) => {
  const request = await fetch(baseUrldate);
  const response = await request.json();
  // console.log(response.dates[todayDate].countries, 'choose');
  const data = response.dates[todayDate].countries;
  const entries = Object.entries(data);
  // console.log(entries, 'entries');
  dispatch(getCovid(entries));
};

// fetching the country api
// export const getCountryRegionFromApi = () => async (dispatch) => {
//   const request = await fetch(basedateRegionUrl);
//   const response = await request.json();
//   const data = response.dates[todayDate].countries.India;
//   const entries = Object.entries(data);
//   console.log(entries[6], 'region');

//   dispatch(getCountryRegion(entries[6][1]));
// };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COVID:
      return { ...state, covid: action.payload };
    // case FETCH_REGION:
    //   return { ...state, country: action.payload };
    // case CHANGE_APIDATE:
    //   return { ...state, covid: action.payload };
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
