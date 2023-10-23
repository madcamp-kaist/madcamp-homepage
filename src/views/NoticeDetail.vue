<template>
  <div class="notice">
    <section class="container notice-table">
      <div class="columns">
        <div class="column is-offset-3 is-6">
          <div v-if="fetched">
            <h1>
              <router-link
                :to="`/notice/${notice.id}` + ($route.query.page ? `?page=${$route.query.page}` : '')"
                class="link">
                {{ notice.title }}
              </router-link>
            </h1>
            <div class="metadata">
              <span>#{{ notice.id }}</span> ·
              <time>{{ date }}</time> ·
              <span>조회수: {{ notice.hit }}</span>
            </div>
            <div v-html="compiledMarkdown" class="content"></div>
          </div>
        </div>
      </div>
    </section>
    <NoticeTable
      :page="page"
      :noticeId="notice ? notice.id : undefined"
    />
  </div>
</template>

<script>
import marked from 'marked'
import NoticeTable from '@/components/NoticeTable.vue'

import { server } from '@/server.js'

export default {
  metaInfo () {
    return {
      title: `${this.notice && this.notice.title} | 몰입캠프`
    }
  },
  data () {
    return {
      notice: null,
      fetched: false,
      page: 1
    }
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.notice.content, { sanitize: true })
    },
    date () {
      const date = new Date(this.notice.created_at)
      return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`
    }
  },
  async created () {
    this.notice = await fetch(`${server}/notice/${this.$route.params.id}`)
      .then(response => response.json())
    this.page = (+this.$route.query.page) || 1
    this.fetched = true
  },
  async beforeRouteUpdate (to, from, next) {
    this.page = (+to.query.page) || 1
    this.notice = await fetch(`${server}/notice/${to.params.id}`)
      .then(response => response.json())
    next()
  },
  components: { NoticeTable }
}
</script>

<style lang="scss">
.notice-table {
  margin-top: 8rem;
  @media screen and (max-width: 1087px) {
    padding: 0 1.5rem;
  }

  h1 {
    font-size: 2rem;
    span {
      cursor: pointer;
    }
  }
  .metadata {
    margin-bottom: 2rem;
    color: #929292;
  }
  .content {
    margin-top: 0;
    @media screen and (max-width: 1087px) {
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
}
</style>
