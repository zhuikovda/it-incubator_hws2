const initState = {
    isLoading: false,
}



export const loadingReducer = (state= initState, action: LoadingActionType): { isLoading: boolean; }  => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
case 'CHANGE_LOADING': 
{
    const stateCopy = {...state};
    // stateCopy.isLoading = action.isLoading
    stateCopy.isLoading = action.isLoading 
    return stateCopy   
}
        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading, 
})
