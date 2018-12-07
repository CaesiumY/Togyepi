<template>
    <v-app
      id="inspire"
      style="background-color: #ffffff !important;"
    >
    <v-container fluid>
      <v-layout row wrap align-center>

        <v-flex v-for="item in items" key="item.id" style="text-align: center">
          <div v-if="!item.image">
            <!-- <v-text-field
              xs12 sm6 md3
              value="사진을 넣어주세요"
              readonly
              center
            ></v-text-field> -->
            <!-- <div style="font-size: 21px">
              사진을 넣어주세요
            </div> -->
            <!-- <br />
            <v-divider></v-divider>
            <br /> -->
            <input type="file" @change="onFileChange(item, $event)">
          </div>

          <div v-else style="text-align: center">
            <img :src="item.image" />
            <v-btn outline color="teal" @click="removeImage(item)">Remove image</v-btn>
          </div>
        </v-flex>

      </v-layout>
    </v-container>
  </v-app>
</template>
<script>

export default {
  name: 'Topics',
  created () {
    // window.bus.$on('emitListView', (args) => {
    //   this.isList = args.isList
    // })
  },
  data: () => ({
    show: false,
    isList: false,
    items: [
      {image: false}
    ]
  }),
  components: {
  },
  methods: {
    onFileChange (item, e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      this.createImage(item, files[0])
    },
    createImage (item, file) {
      // var image = new Image()
      var reader = new FileReader()
      reader.onload = (e) => {
        item.image = e.target.result
      }
      reader.readAsDataURL(file)
    },
    removeImage: function (item) {
      item.image = false
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  img {
    width: 100%;
    margin: auto;
    display: block;
    margin-bottom: 10px;
  }

</style>
`
