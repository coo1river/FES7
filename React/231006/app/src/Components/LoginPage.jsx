import React, { useState } from "react";

export default function LoginPage({ handlePage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 주소를 작성한다.
  // 이메일, 패스워드를 가져 온다.
  // 이메일, 패스워드를 명세 형식으로 작성한다.
  // 주소로 명세에 맞게 작성한 데이터를 보낸다.

  const login = async (email, password) => {
    const baseUrl = "https://api.mandarin.weniv.co.kr";
    const reqPath = "/user/login";
    const reqUrl = baseUrl + reqPath;

    const loginData = {
      user: {
        email: email,
        password: password,
      },
    };

    // 로그인 해서 token 꺼내기
    try {
      const res = await fetch(reqUrl, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      // 서버에게 데이터 요청을 하고, 서버에서 데이터를 확인하고 있는지 없는지 올바른지 아닌지 확인할 때까지 기다린다.
      const json = await res.json();
      console.log(json);
      if (!json.user) {
        return;
      }

      const token = json.user.token;
      console.log(token);
      // 로컬스토리지에 토큰 저장하기
      localStorage.setItem("token", token);
    } catch (error) {
      alert("로그인에 실패했습니다!");
    }
  };

  const inputEmail = (e) => {
    setEmail(e.target.value);
  };
  const inputPassword = (e) => {
    setPassword(e.target.value);
  };

  const submitLogin = (e) => {
    e.preventDefault();
    login(email, password);
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
          <button type="button" onClick={handlePage}>
            회원가입
          </button>
        </form>
      </section>
    </>
  );
}
