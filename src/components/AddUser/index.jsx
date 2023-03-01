import React from "react";
import { useDispatch } from "react-redux";
import s from "./style.module.css";
export default function AddUser({ profileCreate, profileMale }) {
  const dispatch = useDispatch();
  const submit = (e) => {
    e.preventDefault();
    const { name, link, gender } = e.target;

    dispatch({
      type: "ADD",
      payload: {
        name: name.value,
        link: link.value,
        gender: gender.value,
        id: Date.now(),
      },
    });
    name.value = "";
    link.value = "";
    gender.value = "";
  };

  return (
    <div className={s.container}>
      <form className={s.form} onSubmit={submit}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="text" name="link" placeholder="Link" required />
        {/* <input type="text" name="gender" placeholder="Gender" list="listP" /> */}
        <select name="gender">
          <option value="">Welche gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>
        <button>ADD</button>
      </form>
    </div>
  );
}
