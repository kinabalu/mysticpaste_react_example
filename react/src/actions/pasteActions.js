import * as types from '../constants/actionTypes';
import pasteApi from '../api/mockPasteApi';
import moment from 'moment';

export function savePaste(code, language) {
  return dispatch => {
    dispatch({ type: types.SAVE_PASTE_PENDING });

    let paste = {
      code: code,
      language: language,
      created_at: moment().format()
    };
    return pasteApi.savePaste(paste).then(paste => {
      dispatch({ type: types.SAVE_PASTE, paste });
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadAllPastes() {
  return dispatch => {
    dispatch({ type: types.LOAD_ALL_PASTES });

    return pasteApi.getAllPastes().then(pastes => {
      dispatch({ type: types.LOAD_ALL_PASTES_SUCCESS, pastes});
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadPasteById(pasteId) {
  return dispatch => {
    dispatch({ type: types.LOAD_PASTE });
    return pasteApi.getPasteById(pasteId).then(paste => {
      dispatch({ type: types.LOAD_PASTE_SUCCESS, paste });
    }).catch(error => {
      throw(error);
    });
  };
}
