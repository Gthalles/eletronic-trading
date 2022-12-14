import React, { useState } from "react";
import Header from "../../components/Header";
import RegisterForm from "../../components/RegisterForm";
import BackgroundPaper from "../../layout/BackgroundPaper";

function CreateUser() {
  return (
    <BackgroundPaper>
      <Header />
      <RegisterForm />
    </BackgroundPaper>
  );
}

export default CreateUser;
