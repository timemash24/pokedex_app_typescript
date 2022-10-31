# Pokedex App using PokeAPI
1세대 포켓몬 도감 앱
<br/>🔗 Demo site https://timemash24.github.io/pokedex_app_typescript/

## 사용 스택
<img src="https://img.shields.io/badge/TypeScript 4.8.4-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/React 18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black"/> <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/> <img src="https://img.shields.io/badge/styled components 5.3.6-DB7093?style=for-the-badge&logo=StyledComponents&logoColor=white"/>

## 구현 화면
### Home
![pokedex_ts_1](https://user-images.githubusercontent.com/56548122/198931779-1e2c23bf-9002-443d-8c1e-3c97a7a6248b.PNG)

### Detail
![pokedex_ts_2](https://user-images.githubusercontent.com/56548122/198931792-94269d8f-88e1-4907-af0d-8cd3188b5980.PNG)

## 기능 설명
- 포켓몬 목록 표시
  - PokeAPI로 1세대 포켓몬 정보 불러오고 Home 페이지에 썸네일 이미지 표시
  - 썸네일 마우스 오버할 경우 포켓몬 이름 표시
  - 썸네일 클릭 시 Detail 페이지로 이동
- 포켓몬 정보 상세 보기
  - Detail 페이지에서 PokeAPI로 타입, 스탯 등 현재 포켓몬 상세정보 불러오고 표시
  - 진화 상태인 경우 이전 모습 이미지 보여주기
  - styled-components 사용으로 타입에 따라 정해진 색상을 배경으로 타입 정보 표시
  - 왼쪽, 오른쪽 화살표를 클릭하여 도감 순으로 이전, 다음 포켓몬 상세보기
