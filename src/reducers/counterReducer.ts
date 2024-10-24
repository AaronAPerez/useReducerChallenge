// we use this to hold the logic instead of leaving it in our component

interface Action {
    type: string
}

const counterReducer = (state: number, action: Action):number => {
    
    if(action.type === 'INCREMENT') return state + 1;
    if(action.type === 'DECREMENT') return state - 1;
    if(action.type === 'RESET') return 0;
    return state;
}

export default counterReducer;