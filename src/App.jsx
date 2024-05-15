/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import "./App.css";
import { useState, useEffect, useRef } from "react";
import Sidebar from "./layout/Sidebar/Sidebar";
import Card from "./components/Card";
import Select from "react-select";
import Table from "./components/Table";
import Form from "./components/Form";
import ReactHookForm from "./components/ReactHookForm";
import Notification from "./components/Notification";
import PersonDataForm from "./components/PersonDataForm";
import GridPractise from "./components/GridPractise";
import ArrayPractise from "./components/ArrayPractise";
import Steps from "./components/Steps";
import Header from "./components/Header";
import StepsRedux from "./components/StepsRedux";
import NewSteps from "./components/NewSteps";
import Rating from "./components/Rating";
import Stepper from "./components/Stepper";
function App() {
  const column = ["id", "name", "email", "phone"];

  const data = [
    { id: 1, name: "ismail", email: "ismail@123.com", phone: "0322-5271623" },
    { id: 2, name: "ishaq", email: "ishaq@233.com", phone: "0322-2321321" },
    { id: 3, name: "essa", email: "essa@154.com", phone: "0321-836213" },
  ];

  const handleChildData = (data) => {
    console.log("data", data);
  };

  return (
    <>
      {/* comp 1 */}
      {/* <Sidebar/> */}

      {/* comp 2 */}
      {/* <Table 
      header={column}
      data={data}
      isViewAble={true}
      isEditAble={false}
      isDeleteAble={false}
      onRowClick={handleChildData}
      /> */}

      {/* comp 3 */}
      {/* <Form /> */}

      {/* comp 4 */}
      {/* <ReactHookForm /> */}

      {/* comp 5 */}
      {/* <Notification /> */}

      {/* comp 6 */}
      {/* <PersonDataForm /> */}

      {/* comp 7 */}
      {/* <GridPractise /> */}

      {/* comp 8 */}
      {/* <ArrayPractise /> */}

      {/* comp 9 Steps using simple useState*/}
      {/* <Steps /> */}

      {/* comp 10 Steps using Redux toolkit*/}
      {/* <Header />
      <StepsRedux /> */}

      {/* comp 11*/}
      {/* <NewSteps /> */}

      {/* comp 12*/}
      {/* <Rating/> */}

      {/* comp 13*/}
      <Stepper/>
    </>
  );
}

export default App;
