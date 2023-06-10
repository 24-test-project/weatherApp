import React from "react";
import {useState} from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const hLogin = () => {
    // LocalStorage에서 회원 데이터 가져오기
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      const userData = JSON.parse(storedData);

      // 입력한 이메일과 비밀번호와 일치하는 사용자 찾기
      const user = userData.find((user) => user.email === email);
      if (user) {
        // 로그인 성공
        console.log("로그인 성공");
        // 추가 동작 수행 또는 페이지 이동 중
        //  ...
        // 상태 초기화
        setEmail("");
        setPassword("");
        setError("");
      } else {
        // 로그인 실패 - 이메일 또는 비밀번호가 일치하지 않음
        setError("이메일 또는 비밀번호가 올바르지 않습니다.");
      }
    } else {
      // 로그인 실패 - 회원 데이터가 X
      setError("회원 데이터가 존재하지 않습니다.");
    }
  };

  return (
    <section id="login-page">
      <h3 className="login-title">로그인</h3>
      <form>
        <label htmlFor="email"></label>
        <input
          className="login-email"
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password"></label>
        <input
          className="login-pw"
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="login-btn" type="submit">
          로그인
        </button>
      </form>
      <p className="qus-user-not">
        현재계정이 없으신가요?{" "}
        <a href="#" className="user-sign">
          회원가입
        </a>
      </p>
      {error && <p>{error}</p>}
      <button onClick={hLogin}>로그인</button>
    </section>
  );
}
