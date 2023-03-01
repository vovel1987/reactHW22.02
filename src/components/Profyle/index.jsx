import React from "react";
import { useSelector } from "react-redux";
import CardMale from "../CardMale";
import s from "./style.module.css";

export default function Profyle({}) {
  const state = useSelector((state) => state.male);
  const maleUser = state.filter((elem) => elem.gender === "Male");
  const femaleUser = state.filter((elem) => elem.gender === "Female");

  return (
    <div >
      {maleUser.length > 0 ? <CardMale title={"Male"} users={maleUser} /> : ""}
      {femaleUser.length > 0 ? (
        <CardMale title={"Female"} users={femaleUser} />
      ) : (
        ""
      )}
    </div>
  );
}
