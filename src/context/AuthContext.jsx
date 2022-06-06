import React, { useReducer } from "react";

export const AuthContext  = React.createContext();

const initState = {
  isAuth: false,
  token: null
};
function reducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS": {
      return {
        ...state,
        isAuth: true,
        token: action.token
      };
    }
    case "LOGOUT_SUCCESS": {
      return {
        ...state,
        isAuth: false,
        token: null
      };
    }
    case "LOGIN_FAILURE": {
      return {
        ...state,
        isAuth: false,
        token: null
      };
    }
    default: {
      return state;
    }
  }
}

export default function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
}
