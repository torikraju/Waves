import {
    UI_START_OVERLAY_LOADING,
    UI_STOP_OVERLAY_LOADING,
    UI_START_FORM_LOADING,
    UI_STOP_FORM_LOADING,
} from '../actions/actionTypes';
import {updateObject} from '../../utility/AppUtil';

const initialState = {
    overlayLoading: false,
    formLoading: false,
};

const startOverlayLoading = (state) => {
    return updateObject(state, {overlayLoading: true});
};

const stopOverlayLoading = (state) => {
    return updateObject(state, {overlayLoading: false});
};

const startFormLoading = (state) => {
    return updateObject(state, {formLoading: true});
};

const stopFormLoading = (state) => {
    return updateObject(state, {formLoading: false});
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UI_START_OVERLAY_LOADING:
            return startOverlayLoading(state);
        case UI_STOP_OVERLAY_LOADING:
            return stopOverlayLoading(state);
        case UI_START_FORM_LOADING:
            return startFormLoading(state);
        case UI_STOP_FORM_LOADING:
            return stopFormLoading(state);
        default:
            return state;
    }
};

export default reducer;
