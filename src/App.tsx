import React from "react";
import UserList from "./components/userList";
import UserPost from "./components/userPost";
import "./app.scss";

function App() {
  return (
    <div>
      <UserList />
      <UserPost />
    </div>
  );
}
export default App;
