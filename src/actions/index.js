export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const change_operation = (operation) => {
    return ({
        type:CHANGE_OPERATION,
        payload: operation,
    });
}

export const clear_display = () => {
return ({type:CLEAR_DISPLAY})
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}