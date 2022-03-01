import { HeroIcon } from "./Icon";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoItem: React.FC<{
  todo: ITodo;
  active: boolean;
  callBack: () => void;
}> = ({ todo, active, callBack }) => {
  return (
    <div>
      {/* Checkbox */}
      <HeroIcon
        callBack={callBack}
        active={active}
        icon={"heart"}
        className="bg-green-300 text-red-300"
      ></HeroIcon>

      {/* Content */}

      {todo.message}

      {todo.id}

      {/* utils which can move from right to left with mask   */}
    </div>
  );
};

export interface ITodo {
  message: string;
  finished: boolean;
  id: string;
}

const TodoList: React.FC<{
  defaultTodos: ITodo[];
}> = ({ defaultTodos }) => {
  const [list, setList] = useState<Array<ITodo>>([...defaultTodos]);

  let createListItem: () => ITodo = () => {
    return {
      message: "",
      finished: false,
      id: uuidv4(),
    };
  };

  const addList = () => {
    setList([createListItem(), ...list]);
  };

  const heartHandler = (id: string) => {
    console.log("heartHandler", id);
  };

  return (
    <>
      <div className="bg-yellow-300 rounded-lg mt-5 ">
        <div className="flex flex-col gap-3">
          {/* 加號 */}
          <div className="text-center py-5">
            <HeroIcon icon="plus-circle" callBack={addList}></HeroIcon>
          </div>

          {list.map((item, index) => {
            return (
              <TodoItem
                todo={item}
                key={item.id}
                active={item.finished}
                callBack={() => {
                  heartHandler(item.id);
                }}
              ></TodoItem>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TodoList;
