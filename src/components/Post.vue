<template>
  <form>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--8-col">
        <div class="card-image__picture">
          <img :src="this.dogUrl"/>
        </div>
      </div>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="username" v-model="title" type="text" class="mdl-textfield__input"/>
          <label for="username" class="mdl-textfield__label">Describe me</label>
        </div>
        <div class="actions">
          <a @click.prevent="postDog" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            POST A DOG
          </a>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
import data from '../data'
import parse from 'xml-parser'

export default {
  data () {
    return {
      dogUrl:'',
      title:'',
      comment:'',
    }
  },

  mounted () {
    this.$http.get('https://dog.ceo/api/breeds/image/random/get?format=xml&results_per_page=1').then(response => {
      this.dogUrl = response.body.message
    })
  },

  methods: {
    postDog() {
      this.$root.$firebaseRefs.dogs.push({
        'url': this.dogUrl,
        'comment':'',
        'info':this.title,
        'created_at': -1 * new Date().getTime()
      }).then(res => {
        console.log(res);
        this.$router.push('/')
    })
  }
}
}

</script>
