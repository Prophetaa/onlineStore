
import {SET_ADDS } from "../reducers/AdsReducer";
export const LOAD_AD_DETAILS = "LOAD_AD_DETAILS";


export const loadAllAdds = payload => ({
    type: SET_ADDS,
     payload
  });
  

  export function loadAdDetails(allAds, adIdToLoad) {
    const adToLoad = allAds.find(ad => {
      return ad.id === adIdToLoad;
    });
    return {
      type: LOAD_AD_DETAILS,
      payload: adToLoad
    };
  }