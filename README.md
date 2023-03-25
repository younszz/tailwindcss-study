# tailwindcss-study

<https://tailwindcss.com/docs/installation>

- 작업 내용
  - header 반응형 서브메뉴 작업

  - @apply 사용하여 중복된 클래스를 하나로 묶어 새로운 클래스 생성 
  - 부모 요소 호버 -> 자식 요소 스타일 적용
  
  1. 부모 태그에 group 클래스 추가
  2. 자식 태그 클래스 hover: -> group-hover:
  
  - 기존 작업물 제이쿼리 -> 자바스크립트 수정 중

- 느낀 점
기존 반응형 작업할 땐 vw단위를 사용했는데 tailwind에서 하나하나 vw단위로 커스텀 css작업시 일반 css와 차이가 크게 없어 보여 라이브러리를 사용해야 하는 이유를 잘 모르겠음
부트스트랩에선 반응형 작업하기 더 쉽다 하여 부트스트랩 사용해 볼 예정