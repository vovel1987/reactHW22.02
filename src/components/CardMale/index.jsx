import React from "react";
import { useDispatch } from "react-redux";
import s from "./style.module.css";

export default function CardMale({ users, title, id }) {
  const dispatch = useDispatch();
  return (
    <div className={s.container1}>
      <h2>{title}</h2>
      <div className={s.container}>
        {users.map(({ id, link, name, gender }) => (
          <div className={s.block} key={id}>
            <p>{gender}</p>
            <img src={link} alt="Profyle" width="125px" height="144px" />
            <p className={s.name}>{name[0].toUpperCase() + name.slice(1)}</p>
            <button onClick={() => dispatch({ type: "DELETE", payload: id })}>
              DELETE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
