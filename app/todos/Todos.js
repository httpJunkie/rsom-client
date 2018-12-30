import React from "react";
import { produce } from 'immer';

import { todosReducer } from '../reducers/todosReducer';
import Form from "./TodoForm";

function useImmerReducer(reducer, initialState) {
  return React.useReducer(produce(reducer), initialState)
};

export default () => {
  const [todos, dispatch] = useImmerReducer(todosReducer, []);

  return (
    <div className="Todos">
      <Form dispatch={dispatch} />
      <div>
        {todos.map(({ text, complete }, i) => (
          <div
            key={text}
            onClick={() => dispatch({ type: "TOGGLE_COMPLETE", i })}
            style={{
              textDecoration: complete ? "line-through" : ""
            }}
          >
            {text}
          </div>
        ))}
      </div>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
    </div>
  );
};