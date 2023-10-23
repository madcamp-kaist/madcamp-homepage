<template>
<nav
  class="navbar is-dark is-fixed-top"
  role="navigation"
  aria-label="main navigation">
  <div class="container">
    <div class="navbar-brand">
      <a @click="closeAndGo('/')" class="navbar-item logo">
        <img src="@/assets/logo_white.svg" alt="몰입캠프 로고">
      </a>

      <button
        @click="isMobileMenuVisible = !isMobileMenuVisible"
        :class="{ 'is-active': isMobileMenuVisible }"
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </div>

    <div
      :class="{ 'is-active': isMobileMenuVisible }"
      class="navbar-menu">
      <div class="navbar-start"></div>
      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable">
          <div @click="closeAndGo('/')" class="navbar-link">
            소개
          </div>
          <div class="navbar-dropdown is-right is-boxed">
            <a @click="closeAndGo('/')" class="navbar-item">
              소개
            </a>
            <a @click="closeAndGo('/qna')" class="navbar-item">
              자주 묻는 질문
            </a>
            <hr class="navbar-divider" style="background-color: whitesmoke">
            <a
              href="https://bit.ly/3mOWtcs"
              class="navbar-item syllabus"
              target="_blank">
              강의계획서
              <div class="external-link-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"/></svg>
              </div>
            </a>
          </div>
        </div>
        <div class="navbar-item has-dropdown is-hoverable">
          <div @click="closeAndGo('/notice')" class="navbar-link">
            게시판
          </div>
          <div class="navbar-dropdown is-right is-boxed">
            <a @click="closeAndGo('/notice')" class="navbar-item">게시판</a>
            <a @click="closeAndGo('/history')" class="navbar-item">
              역사
            </a>
          </div>
        </div>
        <div class="navbar-item">
          <a @click="closeAndGo('/apply')" class="button is-primary">
            지원하기
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      isMobileMenuVisible: false
    }
  },
  methods: {
    closeAndGo (destination) {
      this.isMobileMenuVisible = false
      this.$router.push(destination)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar.is-dark {
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: saturate(180%) blur(15px);
  -webkit-backdrop-filter: saturate(180%) blur(15px);
  .navbar-burger {
    background-color: transparent;
  }
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  padding: 7px;
  &:hover {
    color: black;
  }
  img {
    height: 40px;
    max-height: 38px;
  }
}

.navbar-burger {
  background-color: #363636;
  border: none;
  span {
    color: white;
  }
}

.navbar-link:hover {
  color: black;
}

.navbar-link::after {
  border-color: #4a4a4a;
  &:hover {
    border-color: black;
  }
}

.navbar-item.syllabus {
  padding-right: 1rem;
  .external-link-icon {
    display: inline-block;
    height: 1rem;
    width: 1rem;
    margin: 0 0 0.1rem 0.5rem;
    color: #4a4a4a;
    fill: currentColor;
  }
}
</style>
