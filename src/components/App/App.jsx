import AddUser from "../AddUser";

import Profyle from "../Profyle";

import s from "./style.module.css";

function App() {
  return (
    <div className={s.container}>
      <div>
        <AddUser />
      </div>
      <div>
        <Profyle />
      </div>
    </div>
  );
}

export default App;
