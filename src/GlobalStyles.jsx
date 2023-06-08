import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// styled-components에 내장되어 있는 기능 입니다.
// 전역 스타일을 지정할 수 있습니다.
const GlobalStyles = createGlobalStyle` 
  ${reset} // 기본적으로 설치되어있는 스타일을 지워줍니다. reset css적용
html{
  width: 100%;
  height: 100%;
}
  body{
  width: 100%;
  height: 100%;
  background-image: url("/img/bg.jpg");
  background-repeat: no-repeat; 
  background-size: cover;
  overflow: hidden;
}
.a11y-hidden{
 clip: rect(1px, 1px, 1px, 1px);
 clip-path: inset(50%);
 width: 1px;
 height: 1px;
 margin: -1px;
 overflow: hidden;
 padding: 0;
 position: absolute;
}
`;

export default GlobalStyles;
