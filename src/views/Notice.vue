<template>
  <div class="notice">
    <section class="hero is-light">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <h1 class="title column is-offset-3">
              게시판
            </h1>
          </div>
        </div>
      </div>
    </section>
    <NoticeTable :page="page"/>
  </div>
</template>

<script>
import NoticeTable from '@/components/NoticeTable.vue'

export default {
  metaInfo: {
    title: '게시판 | 몰입캠프'
  },
  data () {
    return {
      page: 1
    }
  },
  created () {
    this.page = (+this.$route.query.page) || 1
  },
  beforeRouteUpdate (to, from, next) {
    this.page = (+to.query.page) || 1
    next()
  },
  components: { NoticeTable }
}
</script>

<style lang="scss" scoped>
.notice {
  margin-top: 52px;
  min-height: 80vh;
}
</style>
