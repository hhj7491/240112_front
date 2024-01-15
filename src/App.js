import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Login from "./Login.js";
import Success from "./Success.js";

function App() {
  const [success, setSuccess] = useState(false);
  const [id, setid] = useState("");
  const [errMsg, seterrMsg] = useState("");

  function handleLogin(id) {
    if (id == "") {
      seterrMsg("id를 입력하세요");
    } else {
      fetch("https://two40112server.onrender.com/login/" + id) //서버에서 값을 들고오는 역할 ('데이터를 들고 올 주소')
        .then((res) => res.json())
        .then((date) => {
          if (date.msg != "") {
            setSuccess(true);
            setid(date.msg);
          } else {
            seterrMsg("일치하는 id가 없습니다.");
          }
        });
    }
  }

  function tologin() {
    setSuccess(false);
    seterrMsg("");
  }

  return (
    <>
      {!success ? (
        <Login errMsg={errMsg} click={handleLogin} />
      ) : (
        <Success id={id} tologin={tologin} />
      )}
    </>
  );
}

export default App;
