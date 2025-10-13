<template>
  <div class="home">
    <section class="prologue">
      <div class="prologue-content">
        <h1 class="prologue-title">
          <span class="logo-container logo-animation">
            <img src="@/assets/logo_only.svg" alt="몰입캠프 로고" />
          </span>
          <span class="title-text-content">
            함께 몰입하는 즐거움,<br>몰입캠프
          </span>
        </h1>
        <p class="prologue-subtitle">
          학생들이 자율적으로 집중개발을 경험하는 프로그래밍 캠프
        </p> 
        <div class="prologue-buttons">
          <button @click="closeAndGo('/', 'intro')" class="button button-primary">알아보기</button>
          <button @click="closeAndGo('/apply')" class="button button-secondary">지원하기</button>
        </div>
      </div>
    </section>
    <section>
      <div id="intro" class="container home">
        <div class="content">
          <div class="columns">
            <h2 class="column is-offset-1 is-2">몰입캠프는</h2>
            <div class="column is-6">
              <p>
                <u
                  ><b
                    >학생들이 자율적으로 집중개발을 경험하는 프로그래밍
                    캠프입니다.</b
                  ></u
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container home">
        <div class="content">
          <div class="columns">
            <h2 class="column is-offset-1 is-2">개요</h2>
            <div class="column is-6">
              <p>
                스타트업이든, 대기업이든, 중견기업이든 항상 좋은 인재들이
                모자란다고 합니다. 공대생들은 각박한 공부와 경쟁 속에서 지쳐가는
                것 같은데, 왜 그럴까요?
              </p>
              <p>
                본 코스를 통해서,
                <u><b>다양한 학생들과 함께 자율적으로 개발 경험</b></u
                >을 쌓으면서 개발 실력의 향상과 스스로 성장해 나가는 모습을
                발견해 보세요. 그리고 이런 집중 성장의 경험은 참가자들의 삶에
                커다란 긍정적 영향을 끼칩니다. 또한, 여러
                <u> <b>스타트업 창업자들의 강연</b></u
                >을 통해서, 본인의 삶을 온전히 느낄 수 있는 스타트업의 매력도
                접할 수 있으며, 스스로의 삶에 대해서 한 번쯤 돌아보고 방향성을
                고민해 볼 수 있는 기회를 제공합니다.
              </p>
              <p>
                비슷한 교육을 받은 사람들이 비슷한 방식으로 가치를 창출하는
                비중은 점점 줄어들고, 다양한 사고방식과 경험을 가진 사람들이
                함께 어우러져 가치를 창출하는 비중이 점점 늘어날 것이라
                믿습니다.
              </p>
              <p>
                몰입캠프와 함께 <u> <b>집중적으로 개발 경험</b></u
                >을 쌓으면서, 본인의 삶을 돌아보지 않으시겠습니까?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container home">
        <div class="content">
          <div class="columns">
            <h2 class="column is-offset-1 is-2">목적</h2>
            <div class="column is-6">
              <p>
                본 코스의 목표는,
                <u> <b>참가한 학생들의 성장과 참가자들의 네트워킹</b></u
                >입니다.
              </p>
              <p>
                <u><b>2~3명이 한 팀을 이루어 앱(서비스)을 기획하고 개발</b></u
                >합니다. 팀과 협업하면서, 스스로 학습하고 성장하는 것, 그래서
                실제 필드에서 개발을 시작할 수 있는 기본적인 경험과 태도를
                갖추는 것을 지향합니다. 또한, 스타트업 창업자들의 특강과 교류를
                통해서 본인의 태도와 삶을 돌아보는 것도 지향합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container home">
        <div class="content">
          <div class="columns">
            <h2 class="column is-offset-1 is-2">왜 해야 하는가</h2>
            <div class="column is-6">
              <h3 class="image-header">
                <img
                  src="@/assets/intro-together.png"
                  alt="함께 치킨을 먹는 중"
                />
                <span class="label">함께하는 즐거움</span>
              </h3>
              <p>
                비슷한 부류의 다른 사람들과 함께 하면 즐겁겠죠? 또한, 당연히
                혼자 하는 것보다 함께 하는 것이 빠르게 학습하고 성장할 수
                있습니다
              </p>
              <br />

              <h3 class="image-header">
                <img
                  src="@/assets/intro-immerse-2.jpg"
                  alt="코딩에 집중하는 학생들"
                />
                <span class="label">몰입하는 즐거움</span>
              </h3>
              <p>
                열정을 가진 사람들과 함께 하는 과정에서는, 평소 느끼기 힘든
                몰입의 즐거움이 생깁니다. 주당 80~100시간씩 개발을 해도 즐거운
                상태. 정말 이해하기 힘든 그런 경험을 느껴보고 싶지 않으세요?
              </p>
              <br />

              <h3 class="image-header">
                <img
                  src="@/assets/intro-other-life.png"
                  alt="스타트업에 관한 강연"
                />
                <span class="label">삶의 한 형태를 경험</span>
              </h3>
              <p>
                대학에서는 스타트업, 대기업, 연구소 등과 같은 삶의 여러 형태에
                대해서 경험하기 어렵습니다. 본 코스를 통해서, 스타트업이나
                창업이라는, 혹은 본인의 일에 온전히 매진하는 삶을 간접적으로
                경험해보세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container video-container">
      <h2 class="title has-text-centered">후기</h2>
      <div class="video">
        <div class="video-wrap">
          <iframe
            width="100%"
            height="378"
            src="https://www.youtube.com/embed/m8WQJrnEg0Y?rel=0&modestbranding=1"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></iframe>
        </div>
      </div>
      <div style="text-align: center; margin-top: 10px; margin-bottom: 10px">
        <p><몰입캠프 참가생 후기 영상></p>
      </div>
      <div class="columns stories">
        <div class="column is-offset-1-widescreen is-10-widescreen">
          <div class="columns is-story">
            <div class="column">
              <p class="story">
                "인생에서 이렇게 다시 열심히 살 수 있을까 생각한 한달이었습니다.
                <i>[...]</i>캠프를 통해 많은 지식을 배운 것도 있지만, 무엇보다
                그런 지식을 배우는 법을 배워가는 것 같습니다. 특히
                프로그래밍같은 분야는 새로운 것을 얼마나 빠르게 받아들이느냐가
                가장 중요한 척도라고 생각을 하는데 그런 면에 있어서
                <u><b>스스로 성장하는 법</b></u
                >을 배워간 것 같습니다."
              </p>
              <p class="author">
                윤OO <br />
                KAIST 19학번
              </p>
            </div>
            <div class="column">
              <p class="story">
                "4.5주간 참 많은 행복한 일들이 있었지만 무엇보다도 몰입캠프가
                아니었다면 쉽게 접하지 못했을 <u><b>유익한 강연</b></u
                >을 매주 듣고, 멋진 사람들과 협업하고, 계획을 공유하면서, 앞으로
                어떻게 살아가야 하는지 <u><b>삶의 방향성</b></u
                >에 대해 깊게 고민해 볼 계기를 얻은 것이 가장 큰 선물이라고
                생각합니다."
              </p>
              <p class="author">
                오OO <br />
                숙명여대 17학번
              </p>
            </div>
            <div class="column">
              <p class="story">
                "개발에만 <u><b>몰입할 수 있는 환경</b></u
                >이 제공되어서 실력이 많이 성장한 것 같고 무엇보다
                <u><b>자신감</b></u
                >을 얻게 돼서 제일 좋았습니다. 그리고 다양한 학교에서 온 나이가
                비슷한 사람들과 만나 친해질 수 있는 점도 좋았습니다. 다양한 창업
                관련 강연을 통해 스타트업에 대해 알게 되었습니다. 인생에서 가장
                알차고 즐거웠던 한 달이었습니다."
              </p>
              <p class="author">
                이OO <br />
                한양대 19학번
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="columns stories">
        <div class="column is-offset-1-widescreen is-10-widescreen">
          <div class="columns is-story">
            <div class="column">
              <p class="story">
                "<u><b>열정 있는 다양한 사람들</b></u
                >을 만나고, 그 사람들과 함께 작업할 수 있었기에 더욱 재미있었던
                4.5주였다. 다 같이 열정 넘치게 프로젝트를 진행했기에
                스크럼에서도 끊임없이 이야기가 오갈 수 있었고, 더욱더
                <u><b>몰입해서 개발</b></u
                >할 수 있었다. 또한 다른 사람들이 열정적으로 프로젝트를 완성하려
                개발하는 것은 나에게 <u><b>동기부여</b></u
                >가 되기도 했다."
              </p>
              <p class="author">
                이OO <br />
                고려대 17학번
              </p>
            </div>
            <div class="column">
              <p class="story">
                "가장 크게 배운 것은 <u><b>협업의 힘</b></u
                >이었습니다. 팀원은 물론이고 분반 구성원들과 함께 많은 것을
                고민하고 나누는 것이 자극제가 되어 <u><b> 다양한 시도</b></u
                >들을 성공할 수 있었습니다. 친구들과 함께 고민하니 금방 해결할
                수 있었고, 이것이 거름이 되어 훨씬 더 많은 것들을 구현할 수
                있었습니다."
              </p>
              <p class="author">
                진OO <br />
                성균관대 16학번
              </p>
            </div>
            <div class="column">
              <p class="story">
                "살면서 가장 기억에 남는 일을 말하라면 근 몇 년간은 고민 없이
                몰입캠프라고 말할 정도로 의미 있는 한 달이었습니다.
                <i>[...]</i> 하루에 12시간 넘게 코딩만 하는데 너무 즐거웠고, 한
                달 안에 이렇게 <u><b>많은 경험</b></u
                >을 해보기 쉽지 않은데 <u><b>개발 실력</b></u
                >도 늘고, 지식도 많이 얻어 가는 것 같습니다."
              </p>
              <p class="author">
                김OO <br />
                포항공대 18학번
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container home">
        <div class="content">
          <div class="column">
            <div class="columns">
              <h2 class="column is-offset-1 is-2">운영진</h2>
              <div class="column is-8 description">
                <tbody>
                    <tr>
                      <td>
                        2023년 여름학기부터는 이전 몰입캠프에 참가했던 카이스트
                        학생들이 운영의 주체가 되어, 캠프를 기획하고 주도적으로
                        운영하고 있습니다.
                      </td>
                    </tr>
                  </tbody>
                <br /><br />
                <div class="person columns">
                  <div class="column is-2 description">
                    <h4>조성원</h4>
                    <h6 class="sub">총괄</h6>
                  </div>
                  <div class="column is-2 description">
                    <h4>정민지</h4>
                    <h6 class="sub">기술지원부</h6>
                  </div>
                  <div class="column is-2 description">
                    <h4>이승민</h4>
                    <h6 class="sub">대외협력부</h6>
                  </div>
                  <div class="column is-2 description">
                    <h4>허지민</h4>
                    <h6 class="sub">재정관리부</h6>
                  </div>
                  <div class="column is-2 description">
                    <h4>최현우</h4>
                    <h6 class="sub">참가관리부</h6>
                  </div>
                </div>
                <br /><br />
              </div>
            </div>
            <div class="columns">
              <h2 class="column is-offset-1 is-2">멘토</h2>
              <div class="column">
                <div class="person columns">
                  <div class="column is-narrow portrait">
                    <img
                      src="../assets/lecturer-ryu.jpg"
                      alt="류석영 교수 사진"
                    />
                  </div>
                  <div class="column is-8 description">
                    <h4>류석영</h4>
                    <h6 class="sub">KAIST 전산학부 교수</h6>
                    <table class="table career">
                      <tbody>
                        <tr>
                          <td>KAIST 전산학부 학부장 (2021-)</td>
                        </tr>
                        <tr>
                          <td>KAIST 포용성 위원회 위원장 (2017-)</td>
                        </tr>
                        <tr>
                          <td>Sun Microsystems 연구원 (2005-2009)</td>
                        </tr>
                        <tr>
                          <td>Harvard University 연구원 (2001-2005)</td>
                        </tr>
                        <tr>
                          <td>KAIST 전산학과 (입학 1991, 박사 2001)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="columns">
            <h2 class="column is-offset-1 is-2">문의사항</h2>
            <div class="column">
              <div class="person columns">
                <div class="column is-narrow blank"></div>
                <div class="column is-8 description">
                  <h4></h4>
                  <div class="sub">
                    <a class="link" href="mailto:madcamp.kaist@gmail.com"
                      >madcamp.kaist@gmail.com</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "home",
  metaInfo: {
    title: "몰입캠프",
    meta: [
      {
        name: "description",
        content:
          "몰입캠프는 학생들이 자율적으로 집중 개발 경험을 하는 프로그래밍 캠프입니다.",
      },
    ],
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
};
</script>

<style lang="scss" scoped>
.home {
  // margin-top: 52px; // navbar 바꾸면서 필요없어짐
  .container {
    margin-bottom: 6rem;
    @media screen and (max-width: 768px) {
      padding: 0 1.5rem;
    }
    .is-text {
      max-width: 45rem;
      line-height: 1.6;
      h3 {
        font-size: 1.5rem;
        font-weight: bold;
        margin: 4rem 0 0.75rem;
      }
      h4 {
        font-weight: bold;
        margin-bottom: 0.25rem;
      }
      p {
        margin-bottom: 1rem;
      }
    }
  }
}


.has-background-together {
  background: url("../assets/home-banner-1.jpg") rgb(200, 168, 137) center
    no-repeat;
}


.video {
  padding-left: 25%;
  padding-right: 25%;
  @media screen and (max-width: 1087px) {
    padding-left: 0%;
    padding-right: 0%;
  }
  .label {
    position: absolute;
    left: 0.5em;
    top: 0.5em;
    font-size: 1rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    color: black;
    background-color: #fae047;
  }
}

.image-header {
  position: relative;
  .label {
    position: absolute;
    left: 1em;
    bottom: 1em;
    font-size: 1.5rem;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
    color: black;
    background-color: #fae047;
  }
}

.last-word {
  margin: 4em auto;
  @media screen and (min-width: 768px) {
    margin: 10em auto;
  }
  h3.encourage {
    line-height: 1.5;
  }
}

@keyframes logoSequence {
  0% {
    opacity: 0;
    transform: translate(0, 0) rotate(45deg);
  }
  50% {
    opacity: 1;
    transform: translate(0, 0) rotate(0deg);
  }
  100% {
    opacity: 0;
    transform: translate(0, 0) rotate(0deg);
  }
}
@keyframes titleSequence {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.prologue {
  background-color: white;
  color: #121212;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 50px;
}

.prologue-content {
  max-width: 1200px;
}
.prologue-title {
  font-size: 4.5rem;
  font-weight: bold;
  margin-bottom: 1rem;  
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.logo-container {
  display: inline-block;
}
.logo-animation {
  width: 10rem;
  height: 10rem;
  transform-origin: center;
  position: absolute;
  transform: translate(0, 0%);
  opacity: 0;
  transform: translate(0, 0%) rotate(45deg);
  animation: logoSequence 1.8s ease-in-out forwards;
  animation-fill-mode: forwards;
}
.title-text-content {
  opacity: 0;
  animation: titleSequence 1s ease-in-out 1.8s forwards;
  animation-fill-mode: forwards;
}
.prologue-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}
.prologue-buttons {
  display: flex;
  justify-content: center;
}
.button {
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1.25rem;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease;
}
.button-primary {
  background-color: #121212;
  color: white;
  margin-right: 1rem;
}
.button-primary:hover {
  background-color: #e0e0e0;
}
.button-secondary {
  background-color: #ffd000;
  color: #121212;
  // border: 2px solid #ffd000;
}
.button-secondary:hover {
  background-color: rgba(255, 255, 0, 0.2);
}

.video-wrap {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 0px;
  height: 0;
  overflow: hidden;
}
.video-wrap iframe,
.video-wrap object,
.video-wrap embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-container {
  line-height: 1.6;
  margin: 2rem auto 10rem;
  @media screen and (max-width: 1087px) {
    padding: 1.5rem;
    margin: 0 auto;
  }
  .title {
    margin: 6rem auto 2rem;
  }
  .stories {
    margin-bottom: 3rem;
  }

  .is-story {
    margin-top: 2rem;
    .column {
      @media screen and (min-width: 769px) {
        padding: 0 2rem;
        &:first-child {
          border-right: 1px solid rgb(242, 235, 230);
        }
        &:last-child {
          border-left: 1px solid rgb(242, 235, 230);
        }
      }
      @media screen and (max-width: 768px) {
        margin: 2rem auto;
        padding: 0 1rem;
        &:first-child {
          padding-bottom: 2rem;
          border-bottom: 1px solid rgb(242, 235, 230);
        }
        &:last-child {
          padding-top: 2rem;
          border-top: 1px solid rgb(242, 235, 230);
        }
      }
      .story {
        margin-bottom: 1rem;
      }
      .author {
        color: rgb(153, 153, 153);
      }
    }
    &.is-last .column {
      border: 0;
    }
  }
}
.person {
  margin-bottom: 4rem;
  .portrait {
    img {
      width: 6rem;
      border-radius: 3rem;
    }
  }
  .blank {
    width: 7.5rem;
    @media screen and (max-width: 1087px) {
      display: none;
    }
  }
  h4 {
    margin-bottom: 0.125rem;
  }
  .description {
    // padding-left: 1rem;
    .career {
      margin-top: 0.5rem;
      margin-left: -0.75rem;
      // td:first-child {
      //   width: 5rem;
      // }
      td {
        border: 0;
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
      }
    }
    .sub {
      color: gray;
    }
  }
}

</style>
