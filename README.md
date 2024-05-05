# 프로젝트

#### RSQUARE Front-end 채용 과제

여러 빌딩의 정보들을 보고, 비교할 수 있는 서비스 <br />
배포 링크 : [https://rsquare-test.vercel.app/](https://rsquare-test.vercel.app/)

## 목차

- [1. 미리 보기](#1-미리-보기)
- [2. 기술 스택](#2-기술-스택)
- [3. 사용 라이브러리](#3-사용-라이브러리)
- [4. 기능](#4-기능)
- [5. 폴더 구조](#5-폴더-구조)
- [6. API 명세](#6-API-명세)

## 1. 미리 보기

![빌딩 목록 페이지](https://github.com/jinoc-git/dulleo-bomi/assets/132889294/29ee6a76-4485-465f-b5b7-3f7d64bf00e0)

<br/>

![차트](https://github.com/jinoc-git/dulleo-bomi/assets/132889294/0d9334be-f394-40ec-9f76-02b0562358e7)

<br/>

![빌딩 비교 페이지](https://github.com/jinoc-git/dulleo-bomi/assets/132889294/eae32f9e-a066-4962-b69d-a9e6b10146d5)

## 2. 기술 스택

- TypeScript
- React
- React-Router-Dom
- Eslint & Prettier

## 3. 사용 라이브러리

- faker-js/faker : 다양한 데이터 유형, 사용이 간편하며 많은 데이터를 직접 만들 필요 없이 생성할 수 있다.
- @tanstack/react-query : 유용한 옵션과 인터페이스, 리액트 훅같은 간단한 사용법, 캐싱, 동기화 등 다양한 기능이 있다.
- zustand : 적은 보일러 플레이트 코드와 직관적인 사용법, 작은 패키지 사이즈, 컴포넌트 외부에서도 사용할 수 있는 장점이 있다.
- axios : 간단하고 직관적인 API 제공, 다양한 기능, 브라우저 호환성이 좋다.
- @tanstack/react-table : 데이터 테이블을 간단하게 만들 수 있고, 리액트 훅같은 사용법, 공식 문서가 잘 되어있어서 개발할 때 편리하다.
- recharts : 다양한 차트 유형 제공, SVG를 사용하여 렌더링 성능 우수, React 컴포넌트로 구성되어 있어 사용성이 높은 편, 다양한 예제와 공식 문서가 잘 되어있어서 개발할 때 편리하다.
- shadcn/ui & tailwindcss : Radix UI와 tailwindcss를 사용하여 구축된 재사용 가능한 컴포넌트들을 제공, 같이 사용했을 때 편리한 커스텀이 가능하며 개발 시간이 단축되는 장점이 있다.

## 4. 기능

- 빌딩 리스트 보기 : `/` 페이지에서 스크롤이 가능한 table을 통해 빌딩들의 정보들과 리스트를 볼 수 있다.
- 빌딩 상세 정보 보기 : `/` 페이지의 table의 row를 클릭 시 하단에서 클릭한 빌딩의 상세 정보를 볼 수 있다.
- 빌딩 일부 항목 변동값 보기 : `/` 페이지에서 빌딩 상세 정보에서 차트 버튼을 통해 여러 항목들의 변동값을 차트로 볼 수 있다.
- 빌딩 비교 : `/` 페이지의 table에서 최대 10개까지 선택하여 비교가 가능하며, 우측 상단의 비교하기 버튼을 클릭 시 `/compare` 페이지로 이동, table로 선택한 빌딩들의 데이터를 비교할 수 있다.

### 부가 기능

- 모든 선택 해제 : `/` 페이지의 빌딩 리스트에서 선택한 빌딩들을 한 번에 선택 해제할 수 있다.
- 테이블 스크롤 : 모든 table에서 사용 가능하다.
- 빌딩 비교 시 최소, 최대 값 표시 : `/compare` 페이지에서 선택한 빌딩들의 정보들을 비교하여 최소값은 빨간색, 최댓값은 보라색으로 표시.
- 선택 값 유지 : `/compare` 페이지에서 `/` 페이지로 이동했을 때 이전에 선택했던 빌딩들이 유지된다.
- 잘못된 경로 : 사용자가 잘못된 경로를 URL에 입력했을 때 에러 컴포넌트 표시.
- 스켈레톤 UI : 데이터를 불러오는 시간동안 스켈레톤 UI를 사용하여 사용자의 UX를 향상.
- 반응형 디자인 : 화면 사이즈에 따라 적절한 UI 구성

## 5. 폴더 구조

📦src<br />
┣ 📂api<br />
┣ 📂app<br />
┃ ┣ 📂pages<br />
┃ ┃ ┣ 📜Compare.tsx<br />
┃ ┃ ┗ 📜Main.tsx<br />
┃ ┗ 📜App.tsx<br />
┣ 📂components<br />
┃ ┣ 📂common<br />
┃ ┣ 📂compare<br />
┃ ┃ ┗ 📂compareBuildingList<br />
┃ ┣ 📂error<br />
┃ ┣ 📂main<br />
┃ ┃ ┣ 📂buildingInfo<br />
┃ ┃ ┗ 📂buildingList<br />
┃ ┣ 📂skeleton<br />
┃ ┃ ┣ 📂common<br />
┃ ┃ ┣ 📂compare<br />
┃ ┃ ┗ 📂main<br />
┃ ┗ 📂ui<br />
┣ 📂hooks<br />
┣ 📂lib<br />
┣ 📂mock<br />
┃ ┣ 📂data<br />
┃ ┣ 📂responses<br />
┣ 📂shared<br />
┣ 📂store<br />
┣ 📂types<br />

## 6. API 명세

<table>
  <thead>
    <tr>
      <th>API 명</th>
      <th>메소드</th>
      <th>함수 명</th>
      <th>Req</th>
      <th>Res</th>
      <th>비고</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>빌딩 리스트 불러오기</td>
      <td>GET</td>
      <td>fetchBuildings</td>
      <td></td>
      <td>{ <br />
        id: string; <br />
        address: string; <br />
        buildingName: string; <br />
        construct: { <br />
          year: number; <br />
          quarter: string;<br />
        }<br />
        totalArea:number;<br />
        nla: number;<br />
        floor: {<br />
          under: number;<br />
          above: number;<br />
        }<br />
        deposit: number;<br />
        rentFee: number;<br />
        maintenanceFee: number;<br />
        vacancyRate: number;<br />
        }</td>
      <td></td>
    </tr>
    <tr>
      <td>빌딩 상세정보 불러오기</td>
      <td>GET</td>
      <td>fetchBuildingDetailById</td>
      <td>id: string</td>
      <td>{ id: string;address: string;image: string;landPurpose: string;totalArea: number;bcRat: number;floor: {under: number;above: number;}totalPark: number;construct: {year: number;quarter: string;}platArea: number;architectureArea: number;vlRat: number;mainPurpose: string;deposit: number;rentFee: number;maintenanceFee: number;transactionDate: {year: number;month: number;}transactionPrice: number;}</td>
      <td></td>
    </tr>
    <tr>
      <td>빌딩 차트 불러오기</td>
      <td>GET</td>
      <td>fetchBuildingChartById</td>
      <td>id: string</td>
      <td>{id: string;rentFee: {date: {year: number;month: number;};fee: number;}[];maintenanceFee: {date: {year: number;month: number;};fee: number;}[];vacancyRate: {date: {year: number;month: number;};rate: number;}[];}</td>
      <td></td>
    </tr>
  </tbody>
</table>

<!-- | API 명                 | 메소드 | 함수 명                 | Req          | Res                                                                                                                                                                                                                                                                                                                                                                                                           | 비고 |
| ---------------------- | ------ | ----------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| 빌딩 리스트 불러오기   | GET    | fetchBuildings          |              | `{ id: string; address: string; buildingName: string; construct: { year: number; quarter: string;}totalArea:number;nla: number;floor: {under: number;above: number;}deposit: number;rentFee: number;maintenanceFee: number;vacancyRate: number;}`                                                                                                                                                             |      |
| 빌딩 상세정보 불러오기 | GET    | fetchBuildingDetailById | `id: string` | `{ id: string;address: string;image: string;landPurpose: string;totalArea: number;bcRat: number;floor: {under: number;above: number;}totalPark: number;construct: {year: number;quarter: string;}platArea: number;architectureArea: number;vlRat: number;mainPurpose: string;deposit: number;rentFee: number;maintenanceFee: number;transactionDate: {year: number;month: number;}transactionPrice: number;}` |      |
| 빌딩 차트 불러오기     | GET    | fetchBuildingChartById  | `id: string` | `{id: string;rentFee: {date: {year: number;month: number;};fee: number;}[];maintenanceFee: {date: {year: number;month: number;};fee: number;}[];vacancyRate: {date: {year: number;month: number;};rate: number;}[];}`                                                                                                                                                                                         |      | -->
