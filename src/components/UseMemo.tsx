import { useState, useMemo, useReducer, useContext } from "react";
import UserCard from "./UserCard";
import { Resolver, useForm } from "react-hook-form";
import { Action } from "@remix-run/router";
import { json } from "stream/consumers";
import { TodoContext } from "./TodoContext";
import Reset from "./Reset";

export const initialState = [];
type initialState = {
  id?: number;
  name?: string;
};

const UserList = { id: 1, name: "shailesh" };

function init() {
  console.log(JSON.stringify(UserList));
  const result = [...initialState, UserList];
  return result;
}
type YourItemType = {
  id: any;
  // other properties...
};
function reducer(state: any, action: any) {
  debugger;
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: state.length + 1,
          name: action.payload,
        },
      ];
    case "DELETE_TASK":
          return state.filter((item: YourItemType) => item.id !== action.payload);
          case 'RESET_TASK':
            return init()
    default:
      return state;
  }
}
const resolver: Resolver<initialState> = async (values: initialState) => {
  return {
    values: values?.name ? values : {},
    errors: !values.name
      ? {
          name: {
            type: "required",
            message: "Title is required.",
          },
        }
      : {},
  };
};

function UseMemo() {
  const [user, dispatch] = useReducer(reducer, initialState, init);
  // const [user, setUser] = useState(UserList);
  const displaylist = useMemo(
    () =>
      user.map((use: any) => {
        console.log("Preparing Card");
        return <UserCard data={use} dispatch={dispatch} />;
      }),
    [user]
  );

  // function setUserDetails(value: any) {
  //   setUser([
  //     ...user,
  //     {
  //       id: user.length + 1,
  //       name: value,
  //     },
  //   ]);
  // }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<initialState>({ resolver });

  const onSubmit = handleSubmit((productFormData: initialState) => {
    // setUserDetails(productFormData.name),
    dispatch({ type: "ADD_TASK", payload: productFormData.name });
  });

  return (
    <>
      <div>
        <TodoContext.Provider value={{ user, dispatch }}>
          {/* {count} */}
          <div>Add User Name</div>
          <hr />
          {/* Entre Name:<input type="text" onBlur={(e)=>setUserDetails(e.target.value)}></input> */}
          <form onSubmit={onSubmit}>
            <label>User Name</label>
            <input {...register("name")} placeholder="Enter name" />
            <button type="submit">Add Name</button>
          </form>
          <Reset />
          {displaylist}
          {/* <button onClick={() => setCounter(count + 1)}>Count+</button> */}
        </TodoContext.Provider>
      </div>
    </>
  );
}

export default UseMemo;
