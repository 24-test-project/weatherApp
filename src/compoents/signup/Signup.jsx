import React from "react";

export default function Signup() {
  return (
    <section id="signup-page">
      <h3 className="signup-title">회원가입</h3>
      <form>
        <label className="a11y-hidden" htmlFor="nickname">
          닉네임:
        </label>
        <input
          type="text"
          id="nickname"
          name="nickname"
          placeholder="Nickname"
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
          required
        />

        <button className="signup-btn" type="submit">
          회원가입
        </button>
      </form>
    </section>
  );
}
