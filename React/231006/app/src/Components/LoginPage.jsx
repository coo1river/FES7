import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 주소를 작성한다.
  // 이메일, 패스워드를 가져 온다.
  // 이메일, 패스워드를 명세 형식으로 작성한다.
  // 주소로 명세에 맞게 작성한 데이터를 보낸다.

  const login = async () => {
    const baseUrl = "https://api.mandarin.weniv.co.kr";
    const reqPath = "/user/login";
    const reqUrl = baseUrl + reqPath;

    const loginData = {
      user: {
        email: email,
        password: password,
      },
    };

    fetch(reqUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
  };

  const inputEmail = (e) => {
    setEmail(e.target.value);
  };
  const inputPassword = (e) => {
    setPassword(e.target.value);
  };

  const submitLogin = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <>
      <h1>로그인</h1>
      <section>
        <form onSubmit={submitLogin}>
          <h2>이메일, 비밀번호 입력</h2>
          <input
            type="text"
            placeholder="이메일"
            value={email}
            onChange={inputEmail}
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={inputPassword}
          />
          <button>로그인</button>
        </form>
      </section>
    </>
  );
}
