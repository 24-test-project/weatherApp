import React from "react";

export default function Login() {
  

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
          required
        />
        <label htmlFor="password"></label>
        <input
          className="login-pw"
          id="password"
          type="password"
          placeholder="Password"
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
    </section>
  );
}
