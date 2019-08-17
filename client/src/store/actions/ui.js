import {
    UI_START_OVERLAY_LOADING,
    UI_STOP_OVERLAY_LOADING,
    UI_START_FORM_LOADING,
    UI_STOP_FORM_LOADING,
} from './actionTypes';

export const startOverlayLoading = () => {
    return {
        type: UI_STOP_OVERLAY_LOADING,
    };
};


export const stopOverlayLoading = () => {
    return {
        type: UI_START_OVERLAY_LOADING,
    };
};


export const startFormLoading = () => {
    return {
        type: UI_START_FORM_LOADING,
    };
};


export const stopFormLoading = () => {
    return {
        type: UI_STOP_FORM_LOADING,
    };
};
