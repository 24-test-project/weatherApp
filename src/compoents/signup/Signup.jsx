import React from "react";
import { useState } from "react";

export default function Signup() {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const hSignup = (e) => {
    e.preventDafault();

    // 중복 확인
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      const userData = JSON.parse(storedData);
      const isNicknameExists = useData.find(
        (user) => user.nickname === nickname,
      );
      const isEmailExists = useData.find((user) => user.email === email);
      if (isNicknameExists) {
        setError("닉네임이 사용중입니다.");
        return;
      }
      if (isEmailExists) {
        setError("이메일이 사용중입니다.");
        return;
      }
    }

    console.log(nickname, email, password);
    const userData = {
      nickname,
      email,
      password,
    };
    console.log(nickname);

    // LocalStorage에 회원가입 정보 저장
    if (storedData) {
      const userData = JSON.parse(storedData);
      userData.push(newUserData);
      localStorage.setItem("userData", JSON.stringify(userData));
    } else {
      localStorage.setItem("userData", JSON.stringify([newUserData]));
    }

    console.log("회원가입 완료");

    // 상태초기화
    setNickname("");
    setEmail("");
    setPassword("");
  };
  return (
    <section id="signup-page">
      <h3 className="signup-title">회원가입</h3>
      <form onChange={hSignup}>
        <label className="a11y-hidden" htmlFor="nickname">
          닉네임:
        </label>
        <input
          type="text"
          id="nickname"
          name="nickname"
          placeholder="Nickname"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          required
        />

        <label className="a11y-hidden" htmlFor="email">
          이메일:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="a11y-hidden" htmlFor="password">
          비밀번호:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="signup-btn" type="submit">
          회원가입
        </button>
      </form>
    </section>
  );
}
