<template>
  <section class="container notice-table">
    <div class="columns">
      <div class="column is-offset-3 is-6">
        <table v-if="Array.isArray(notices)" class="table is-fullwidth">
          <thead class="is-hidden-mobile">
            <tr>
              <th class="notice-number">번호</th>
              <th class="notice-title">제목</th>
              <th class="notice-hit has-text-right"></th>
              <th class="notice-created-at has-text-right">등록일</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="{ id, title, created_at } in notices"
              :key="`${id}-desktop`"
              class="is-hidden-mobile">
              <td>{{ id }}</td>
              <td>
                <router-link
                  class="link"
                  :to="`/notice/${id}` + ($route.query.page ? `?page=${$route.query.page}` : '')">
                  {{ title }}
                </router-link>
              </td>
              <td class="has-text-right"></td>
              <td class="has-text-right">{{ date(created_at) }}</td>
            </tr>
            <tr
              v-for="{ id, title, created_at, hit } in notices"
              :key="`${id}-mobile`"
              class="is-hidden-tablet">
              <td>
                <div>
                  <router-link
                    class="link"
                    :to="`/notice/${id}` + ($route.query.page ? `?page=${$route.query.page}` : '')">
                    {{ title }}
                  </router-link>
                </div>
                <span>#{{ id }}</span> ·
                {{ date(created_at) }}
              </td>
            </tr>
          </tbody>
        </table>
        <div v-else>
          서버와 통신에 문제가 발생했습니다
        </div>
        <div class="notice-pagination has-text-centered">
          <router-link
            v-for="n in pages"
            :key="`${n}-page`"
            :to="`/notice?page=${n}`"
            :class="{'is-active': page === n}">
            {{ n }}
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { server } from '@/server.js'
import range from 'lodash/range'
import { notices_page, count } from '@/notices.js'

export default {
  name: 'notice-table',
  props: [ 'page', 'noticeId' ],
  data () {
    return {
      notices: [],
      count: 0,
      beforePage: 1,
      beforeNoticeId: undefined
    }
  },
  methods: {
    date (createdAt) {
      const date = new Date(createdAt)
      return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`
    }
  },
  computed: {
    pages () {
      if (!this.count) return []

      const page = this.page
      const maxPage = Math.ceil(this.count / 10)

      if (maxPage < 12) {
        return range(1, maxPage + 1)
      } else if (page > maxPage - 5) {
        return range(maxPage - 10, maxPage + 1)
      } else if (page < 5) {
        return range(1, 12)
      } else {
        return range(page - 5, page + 6)
      }
    }
  },
  async created () {

    const page = this.page
    this.beforePage = page
    this.notices = notices_page(page) /*await fetch(`${server}/notice?page=${page}`)
      .then(response => response.json())*/
    this.count = count() /* await fetch(`${server}/notice/count`)
      .then(response => response.json())
      .then(response => +response.count) */
  },
  async beforeUpdate () {
    const { page, beforePage, noticeId, beforeNoticeId } = this
    if (page !== beforePage || noticeId !== beforeNoticeId) {
      this.notices = notices_page(page) /* await fetch(`${server}/notice?page=${page}`)
        .then(response => response.json()) */
      this.beforePage = page
      this.beforeNoticeId = noticeId
    }
  }
}
</script>

<style lang="scss" scoped>
.notice-table {
  margin-top: 4rem;
  @media screen and (max-width: 768px) {
    padding: 0 1.5rem;
  }
  .notice-number {
    width: 2rem;
  }
  .notice-created-at {
    width: 10rem;
  }
  .notice-hit {
    width: 2rem;
  }
  .is-hidden-tablet {
    div {
      margin-bottom: 0.25rem;
    }
    td {
      padding: 0.5rem 0;
    }
  }
  a.link.router-link-exact-active {
    background-color: rgba(245,218,85,.65);
  }
  .notice-pagination {
    a {
      display: inline-block;
      margin: 0.25rem;
      padding: 0 0.25rem;
      background-color: rgba(245,218,85,.15);
      border-bottom: 1px solid rgba(0,0,0,.2);
      transition: all .25s ease-out;
      &:hover {
        background-color: rgba(245,218,85,.35);
        color: black;
      }
      &.is-active {
        background-color: rgba(245,218,85,.65);
      }
    }
  }
}
</style>
