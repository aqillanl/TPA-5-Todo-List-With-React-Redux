import React, { useRef } from "react";
import { RiEditCircleLine } from "react-icons/ri";
import { AiOutlineFileDone } from "react-icons/ai";
import { BiTrash } from "react-icons/bi";
import { CgCheckO } from "react-icons/cg";

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      //here 13 is key code for enter key
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  return (
    <li key={item.id} className="card">
      <textarea ref={inputRef} disabled={inputRef} defaultValue={item.item} onKeyPress={(e) => update(item.id, inputRef.current.value, e)} />
      <div className="btns">
        <button onClick={() => changeFocus()}>
          {" "}
          <RiEditCircleLine />{" "}
        </button>
        {item.completed === false && (
          <button onClick={() => completeTodo(item.id)}>
            <CgCheckO />
          </button>
        )}
        <button onClick={() => removeTodo(item.id)}>
          {" "}
          <BiTrash />
        </button>{" "}
      </div>
      {item.completed && (
        <span className="completed">
          <AiOutlineFileDone />
        </span>
      )}
    </li>
  );
};

export default TodoItem;
