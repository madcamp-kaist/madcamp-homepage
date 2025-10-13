<template>
<nav
  class="navbar is-blur
        fixed left-1/2 top-6 -translate-x-1/2
        flex items-center justify-between
        w-[90%] max-w-3xl
        bg-white/60 backdrop-blur-xl
        rounded-2xl shadow-lg px-6 py-3
        border border-white/30
        z-50"
  role="navigation"
  aria-label="main navigation">
  <div class="container">
    <div class="navbar-brand">
      <a @click="closeAndGo('/')" class="navbar-item logo">
        <img src="@/assets/logo_black.svg" alt="몰입캠프 로고">   <!--로고 블랙으로 바꿨음-->
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
          <div @click="closeAndGo('/', 'intro')" class="navbar-link">
            소개
          </div>
          <div class="navbar-dropdown is-right is-boxed">
            <a @click="closeAndGo('/', 'intro')" class="navbar-item">
              소개
            </a>
            <hr class="navbar-divider" style="background-color: whitesmoke">
            <a
              href="https://bit.ly/4i4mr27"
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
            <a @click="closeAndGo('/notice')" class="navbar-item">공지사항</a>
            <a @click="closeAndGo('/faq')" class="navbar-item">
              FAQ
            </a>
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
    closeAndGo (destination, anchor) {
      this.isMobileMenuVisible = false
      if (this.$route.path !== destination) {
        this.$router.push(destination).then(() => {
          if (anchor) {
            this.scrollToAnchor(anchor)
          }
        })
      } else if (anchor) {
        this.scrollToAnchor(anchor)
      }
    },
    scrollToAnchor(anchor) {
      const el = document.getElementById(anchor)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar.is-blur {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 600px;
  top: 1.5rem;

  border-radius: 5rem !important;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  .navbar-burger {
    background-color: transparent;
  }
  box-shadow: 0 2px 3px 0 rgba(0,0,0,0.1);
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
    color: #121212;
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

.button.is-primary {
  position: relative;
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 8px rgba(0,0,0,0.3);
  }
}
</style>
