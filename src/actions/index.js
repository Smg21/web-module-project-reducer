export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CUR_MEMORY = "CUR_MEMORY";
export const ADD_MEMORY = "ADD_MEMORY";
export const ZERO_MEMORY = "ZERO_MEMORY";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const zero_memory = () => {
    return { type: ZERO_MEMORY }; 
  };

export const cur_memory = () => {
    return { type: CUR_MEMORY };
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


export const add_memory = () => {
    return { type: ADD_MEMORY };
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}