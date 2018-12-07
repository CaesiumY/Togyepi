<template>
  <v-container fluid>
    <v-layout row wrap align-center>
      <picture-input
        ref="pictureInput"
        @change="onChange"
        width="600"
        height="600"
        margin="16"
        accept="image/jpeg,image/png"
        size="50"
        buttonClass="v-btn success"
        removeButtonClass="v-btn error"
        :crop="true"
        :removable="true"
        :customStrings="{
          upload: '<h1>Bummer!</h1>',
          drag: 'Drag a 😺 GIF or GTFO',
          tap: '사진 업로드 하기',
          change: '사진 변경',
          remove: '사진 제거'
        }">
      </picture-input>
    </v-layout>
  </v-container>
</template>
<script>
import PictureInput from 'vue-picture-input'

export default {
  name: 'Topics',
  created () {
    window.bus.$on('emitListView', (args) => {
      this.isList = args.isList
    })
  },
  data: () => ({
    show: false,
    isList: false
  }),
  components: {
    PictureInput
  },
  methods: {
    onChange () {
      console.log('New picture selected!')
      if (this.$refs.pictureInput.image) {
        console.log('Picture loaded.')
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
`
