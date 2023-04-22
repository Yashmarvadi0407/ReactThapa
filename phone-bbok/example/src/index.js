import React, { useState } from "react";
import ReactDom from "react-dom";
function App() {
  const [entries, setEntries] = useState([]);
  const addEntrytophonebook = (entry) => {
    setEntries(
      [...entries, entry].sort((a, b) =>
        a.lastname.toLowerCase() > b.lastname.toLowerCase() ? 1 : -1
      )
    );
  };
  return (
    <>
      <Entryform addEntrytophoneBook={addEntrytophonebook}></Entryform>
      <Display entries={entries}></Display>
    </>
  );
}
const Entryform = ({ addEntrytophoneBook}) => {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [phonenumber, setPhonenumber] = useState();
  const submitHandler = (e) => {
    e.preventDefault();
    addEntrytophoneBook({ firstname, lastname, phonenumber });
    setFirstname("")
    setLastname("")
    setPhonenumber("")
  };
  return (
    <>
      <center>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={firstname}
            placeholder="enter your first"
            onChange={(e) => {
              setFirstname(e.target.value);
            }}
          />
          <input
            type="text"
            value={lastname}
            placeholder="enter your last name"
            onChange={(e) => {
              setLastname(e.target.value);
            }}
          />
          <input
            type="text"
            value={phonenumber}
            placeholder="phone number"
            onChange={(e) => {
              setPhonenumber(e.target.value);
            }}
          />
          <button type="submit" onClick={submitHandler}>
            ADD
          </button>
        </form>
      </center>
    </>
  );
};
const Display = ({ entries }) => {
  return (
    <>
      {" "}
      <center>
        <table>
          <thead>
            <tr>
              <th> first name</th>
              <th> last name</th>
              <th> Phone number</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry) => {
              return (
                <tr>
                  <th> {entry.firstname}</th>
                  <th> {entry.lastname}</th>
                  <th>{entry.phonenumber}</th>
                </tr>
              );
            })}
          </tbody>
        </table>{" "}
      </center>
    </>
  );
};
ReactDom.render(
  <>
    {" "}
    <App></App>
  </>,
  document.getElementById("root")
);
