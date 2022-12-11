import React from "react";
import Header from "../../components/Header";
import UsersList from "../../components/UsersList";
import BackgroundPaper from "../../layout/BackgroundPaper";

function ListUsers() {
  return (
    <BackgroundPaper>
      <Header />
      <UsersList />
    </BackgroundPaper>
  );
}

export default ListUsers;