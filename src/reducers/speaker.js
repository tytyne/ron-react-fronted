import {
    CREATE_SPEAKER,
    RETRIEVE_SPEAKERS,
    UPDATE_SPEAKER,
    DELETE_SPEAKER,
    DELETE_ALL_SPEAKERS,
  } from "../actions/types";
  
  const initialState = [];
  
  const speakerReducer = (speakers = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_SPEAKER:
        return [...speakers, payload];
  
      case RETRIEVE_SPEAKERS:
        return payload;
  
      case UPDATE_SPEAKER:
        return speakers.map((speaker) => {
          if (speaker.id === payload.id) {
            return {
              ...speaker,
              ...payload,
            };
          } else {
            return speaker;
          }
        });
  
      case DELETE_SPEAKER:
        return speakers.filter(({ id }) => id !== payload.id);
  
      case DELETE_ALL_SPEAKERS:
        return [];
  
      default:
        return speakers;
    }
  };
  
  export default speakerReducer;