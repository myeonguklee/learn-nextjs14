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

---
하이드레이션(Hydration)이란?

서버사이드 렌더링(SSR)을 통해 만들어 진 인터랙티브 하지 않는 HTML을 클라이언트 측 자바스크립트를 사용하여 인터랙티브한 리액트 컴포넌트로 변환하는 과정을 말한다.
(서버 환경에서 이미 렌더링된 HTML에 React를 붙이는 것)

"use client" -> 백엔드에서 render 되고, frontedn에서 hydrate 및 interactive 되는 것을 의미(client 에서도 렌더 된다는 의미)

use cliente 선언하지 않으면 기본적으로 모두 server component가 됨

Client Components

클라이언트 컴포넌트를 사용하려면 파일 상단, import 위에 React "use client" 지시어를 추가하면 됩니다.
"use client"은 서버와 클라이언트 컴포넌트 모듈 간의 경계를 선언하는 데 사용됩니다.
즉, 파일에 "use client"을 정의하면 하위 컴포넌트를 포함하여 해당 파일로 가져온 다른 모든 모듈이 클라이언트 번들의 일부로 간주됩니다.

https://nextjs.org/docs/app/building-your-application/rendering/client-components

Nextjs에서는 모든 컴포넌트는 서버에서 먼저 pre render됨 (클라이언트, 서버 컴포넌트 모두 동일)
‘use client’ 명령어를 가진 컴포넌트는 hydrate 됨 (클라이언트에서도 렌더됨)
hydrate란? HTML을 인터랙티브한 리액트 컴포넌트로 바꾸는 것

지원되지 않는 패턴: 서버 컴포넌트를 클라이언트 컴포넌트로 가져오기
서버 컴포넌트를 클라이언트 컴포넌트로 import 할 수 없습니다.

https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#unsupported-pattern-importing-server-components-into-client-components

지원되는 패턴: 서버 컴포넌트를 클라이언트 컴포넌트에 props로 전달
서버 컴포넌트를 클라이언트 컴포넌트에 prop으로 전달할 수 있습니다.
일반적인 패턴은 React children prop을 사용하여 클라이언트 컴포넌트에 "slot"을 만드는 것입니다.

https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#supported-pattern-passing-server-components-to-client-components-as-props