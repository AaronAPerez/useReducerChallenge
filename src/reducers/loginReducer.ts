
interface LoginAction {
    type: 'LOGIN';
    username: string;
}

interface LogoutAction {
    type: 'LOGOUT';
}

type AuthAction = LoginAction | LogoutAction;

const loginReducer = (state: string, action: AuthAction): string => {

    if(action.type === 'LOGIN') return action.username;
    if(action.type === 'LOGOUT') return 'Wait... You are not logged in';
    return state;
}

export default loginReducer;