<template>
  <div class="notice-write container">
    <input v-model="title" type="text" class="input notice-title" placeholder="제목" required>
    <div>
      <textarea :value="content" @input="update" required></textarea>
      <div class="content" v-html="compiledMarkdown"></div>
    </div>
    <div class="publish-row">
      <button @click="publish" class="button is-primary">
        출판하기
      </button>
      <button v-if="id" @click="deletePost" class="button is-danger">
        삭제
      </button>
      <button @click="$router.push('/notice')" class="button is-text">
        취소
      </button>
    </div>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'
import marked from 'marked'
import { server } from '@/server.js'

export default {
  data () {
    return {
      title: '',
      content: '이 내용을 지우고 작성해주세요\n# 큰 제목\n## 작은 제목\n\n[문법 참고](https://guides.github.com/features/mastering-markdown/)',
      fetched: false
    }
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.content, { sanitize: true })
    },
    id () {
      return this.$route.params.id
    }
  },
  methods: {
    update: debounce(function (e) {
      this.content = e.target.value
    }, 300),
    async publish () {
      const { title, content } = this
      const password = prompt('관리자 비밀번호를 입력해주세요.')

      try {
        const { id } = await fetch(`${server}/notice` + (this.id ? `/${this.id}/edit` : ''), {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            Authorization: password
          },
          method: 'POST',
          body: JSON.stringify({ title, content })
        }).then(response => {
          if (!response.ok) throw new Error()
          return response
        }).then(response => response.json())
        this.$router.push(`/notice/${id}`)
      } catch (error) {
        alert('문제가 발생했습니다.')
      }
    },
    async deletePost () {
      const password = prompt('관리자 비밀번호를 입력해주세요.')

      try {
        await fetch(`${server}/notice/${this.id}/delete`, {
          headers: {
            Authorization: password
          },
          method: 'POST'
        })
        this.$router.push(`/notice`)
      } catch (error) {
        alert('문제가 발생했습니다.')
      }
    }
  },
  async created () {
    const { id } = this.$route.params
    if (id) {
      const { title, content } = await fetch(`${server}/notice/${id}`)
        .then(response => response.json())
      this.title = title
      this.content = content
      this.fetched = true
    } else {
      this.fetched = true
    }
  }
}
</script>

<style lang="scss">
.notice-write {
  margin-top: calc(52px + 4rem);
  padding: 0 1rem;
  min-height: 40rem;
  .notice-title {
    box-shadow: none;
    margin-bottom: 2rem;
    background-color: #f6f6f6;
    border-radius: 0;
    border: 0;
    border-right: 1px solid #ccc;
    @media screen and (min-width: 768px) {
      width: 49%;
    }
  }

  textarea, .content {
    display: inline-block;
    height: 100%;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 20px;
    @media screen and (min-width: 769px) {
      width: 49%;
    }
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
  textarea {
    border: none;
    border-right: 1px solid #ccc;
    resize: none;
    outline: none;
    background-color: #f6f6f6;
    font-size: 14px;
    font-family: 'Monaco', courier, monospace;
    padding: 20px;
    min-height: 30rem;
  }
  .content {
    margin-top: 0;
    @media screen and (max-width: 768px) {
      margin-top: 2rem;
      padding: 0;
    }
    a {
      background-color: rgba(245,218,85,.15);
      border-bottom: 1px solid rgba(0,0,0,.2);
      transition: all .25s ease-out;
      &:hover {
        background-color: rgba(245,218,85,.35);
        color: black;
      }
    }
  }
  // code {
  //   color: #fae047;
  // }
  .publish-row {
    margin-top: 2rem;
    button {
      margin-right: 1rem;
    }
  }
}
</style>
