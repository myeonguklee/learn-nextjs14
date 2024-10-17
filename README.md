# learn-nextjs14

react의 렌더링 방식 : client side rendering

렌더링이란?
NextJS가 리액트 컴포넌트를 브라우저가 이해할 수 있는 html로 변환하는 작업

CSR
모든 렌더링이 클라이언트 측에서 발생
클라이언트는 자바스크립트를 로드하고, 자바스크립트가 UI를 빌드함

SSR
NextJS로 웹 사이트를 빌드할 때, 기본적으로 SSR을 사용함

Nextjs에서 모든 컴포넌트와 페이지들은 먼저 서버에서 렌더됨
('use client' 사용 여부와 상관없음)