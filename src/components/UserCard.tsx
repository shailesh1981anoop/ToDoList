import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { TodoContext } from "./TodoContext";

function UserCard({ data }: any) {
  const {dispatch}=useContext(TodoContext)
  const handleDelete = (e: any) => {
    dispatch({ type: "DELETE_TASK", payload: parseInt(e.target.id, 10) });
  };

  return (
    <>
      <div>
        <li key={data.id}>
          {" "}
          {data.name}{" "}
          <span>
            <Button id={data.id} variant="contained" onClick={handleDelete}>
              Delete
            </Button>
          </span>
        </li>
      </div>
    </>
  );
}

export default UserCard;
