<template>
  <div class="mdl-grid">
    <div class="mdl-cell mdl-cell--8-col">
      <div class="picture">
        <img :src="dog.url" />
      </div>
      <div class="info">
        <span>{{ dog.info }}</span>
      </div>
    </div>
    <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
      <div class="comment">
        <span>{{ dog.comment }}</span>
      </div>
      <div class="actions">
        <router-link class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" to="/post">
          ANSWER
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { find } from 'lodash'
import Vuefire from 'vuefire'
import firebase from '../service/firebase'

export default {
  data () {
    return {
      dog:null,
    }
  },

  mounted() {
    console.log(this.$route.params.id);
    console.log(this.$root.dogs)
    //console.log(firebase);

    }
  }
</script>

  }
}
</script>
<style scoped>
  .picture > img {
    color: #fff;
    width:100%;
  }
  .info {
    text-align: right;
    padding: 5px;
    color: #555;
    font-size: 10px;
  }
  .comment {
    padding: 10px;
    color: #555;
  }
  .actions {
    text-align: center;
  }
</style>
