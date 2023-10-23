<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  metaInfo: {
    title: '몰입캠프'
  },
  components: { Navbar, Footer }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Nanum+Myeongjo:400');

$primary: #fae047;
$primary-invert: black;
$link: black;
$background: white;

.link {
  background-color: rgba(245,218,85,.15);
  border-bottom: 1px solid rgba(0,0,0,.2);
  transition: all .25s ease-out;
  &:hover {
    background-color: rgba(245,218,85,.35);
    color: black;
  }
}

@import '~bulma/bulma.sass';

* {
  word-break: keep-all;
}

body {
  @media screen and (max-width: 768px) {
    margin-top: 52px;
  }
}

.content {
  @media screen and (min-width: 1087px) {
    margin-top: 4rem;
  }
  @media screen and (max-width: 1087px) {
    padding: 1.5rem;
  }
}
</style>
