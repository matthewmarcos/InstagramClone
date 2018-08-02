const initialSessionState = {
    id: null,
    username: null,
    firstName: null,
    lastName: null,

    // Logging in flags
    isLoggingIn: false,  // Show the spinner
    loginErrorMessage: '', // Render this error somewhere
    loginErrorCode: null  // Appropriate error design!
};

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_START = 'LOGOUT_START';
export const LOGOUT_FAIL = 'LOGOUT_FAIL';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export default function SessionReducer(state=initialSessionState, action) {
    switch(action.type) {
        case LOGIN_START: {
            return {
                ...state,
                isLoggingIn: true
            }
        }

        case LOGIN_FAIL: {
            return {
                ...state,
                isLoggingIn: false,
                loginErrorMessage: action.payload.loginErrorMessage,
                loginErrorCode: action.payload.loginErrorCode
            }
        }

        case LOGIN_SUCCESS: {
            return {
                ...state,
                isLoggingin: false
            }
        }

        case LOGOUT_SUCCESS: {
            return {
                ...state,
                ...initialSessionState
            }
        }

        default:
            return state;
    }
}
