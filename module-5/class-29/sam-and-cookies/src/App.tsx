import React, { useCallback, useReducer, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

interface AppState {
  method: "GET" | "POST" | "PUT";
  url: string;
  body: object | undefined;
  response: object | undefined;
}

// Set of actions that are isolated & modify this state
export const changeMethod = (
  state: AppState,
  method: "GET" | "POST" | "PUT"
) => {
  if (method === "GET") {
    state.body = undefined;
  }
  return {
    ...state,
    method,
  };
};

export const setBodyIfNotGet = (state: AppState, body: object) => {
  // This action will set state.body, only IF state.method is not "GET"
  if (state.method !== "GET") {
    state.body = body;
  }
  return state;
};

export const dispatchAction = (state: AppState, action: {action: string, body: unknown}) {
  switch (action.action) {
    case 'method':
      return changeMethod(state, action.body as 'GET'|'POST'|'PUT');
    case 'body':
      return setBodyIfNotGet(state, action.body as object);
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(dispatchAction, {
    method: "GET",
    url: "http://localhost:3000",
    body: undefined,
    response: undefined
  });

  const updateBodyIfNotGet = (body: object) => {
      dispatch({action: 'body', body: {}})
    };

  const updateMethod = (method: "GET"|"POST"|"PUT") => {
    dispatch({action: "method", body: method});
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
