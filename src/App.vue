<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "app",
  metaInfo: {
    title: "몰입캠프",
  },
  components: { Navbar, Footer },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Nanum+Myeongjo:400");

// 색상 변수 정의
$primary: #fae047;
$primary-invert: black;
$link: black;
$background: white;

@import "bulma/sass";

body {
  background-color: $background !important;
  color: $primary-invert !important;
  @media screen and (max-width: 768px) {
    margin-top: 52px;
  }
}

.link {
  background-color: rgba(245, 218, 85, 0.15);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  transition: all 0.25s ease-out;
  &:hover {
    background-color: rgba(245, 218, 85, 0.35);
    color: $primary-invert;
  }
}

table {
  width: 100%;
  border-collapse: collapse;
  background-color: white !important; // 테이블 배경색 고정
  color: black !important; // 테이블 글자색 고정
}

th,
td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  background-color: white !important; // 행 배경색 고정
  color: black !important; // 행 텍스트 색상 고정
}

// 테이블 헤더 스타일
th {
  background-color: #f2f2f2 !important; // 헤더 배경색 고정
  color: black !important; // 헤더 글자색 고정
}

@media (prefers-color-scheme: dark) {
  body {
    background-color: white !important;
    color: black !important;
  }

  table {
    background-color: white !important;
    color: black !important;
  }

  th,
  td {
    background-color: white !important;
    color: black !important;
  }

  container {
    background-color: #f9fafb !important;
    color: black !important;
  }

  footer {
    background-color: #f9fafb !important;
    color: black !important;
  }

  h2 {
    color: black !important;
  }

  h4 {
    color: black !important;
  }
}
</style>
