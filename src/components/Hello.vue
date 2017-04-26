<template>
  <div class="hello">
    <div v-for="show in data">
      {{show.ssid}} <br>
      {{show.mac}} <br>
      {{show.rssi}} <br> <hr>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'hello',
  data () {
    return {
      data: []
    }
  },
  mounted () {
    var vm = this
    axios.get('http://localhost:4000/api').then(res => {
      vm.data = res.data
    })
  }
}
</script>
