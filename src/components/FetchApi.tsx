import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { json } from "stream/consumers";

function FetchApi() {
  const [item, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Username</th>
            <th>website</th>
            <th>company</th>
          </tr>
        </thead>
        <tbody>
          {/* {item.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{}</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
              );
            })} */}
          {item.map((abc: any, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{abc?.name}</td>
                  <td>{abc.phone}</td>
                  <td>{abc.username}</td>
                  <td>{abc.website}</td>
                  <td>{abc.company.name}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
export default FetchApi;
