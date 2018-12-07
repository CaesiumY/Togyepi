<template>
    <v-app
      id="inspire"
      style="background-color: #ffffff !important;"
    >
    <v-container fluid>
      <v-layout row wrap align-center>
        <v-flex v-for="item in items" key="item.id" style="text-align: center" ma-3>
          <v-icon x-large>camera_enhance</v-icon>
          <!-- 이미지 input  -->
          <div v-if="!item.image">
            <input type="file" @change="onFileChange(item, $event)">
          </div>
          <!-- 이미지 캔버스 -->
          <div v-else style="text-align: center">
            <img style="display:none" id="frame" :src="item.image" />
            <v-btn outline color="teal" @click="removeImage(item)">Remove image</v-btn>
          </div>
        </v-flex>

        <v-flex ma-3 style="text-align: center">
          <canvas id="snapshot" width=300 height=300 style="border:1px solid #BBB;">
            </canvas>
            <v-text-field
              v-for="num in numOfText"
              :key = "num.id"
              v-model="exampleContent[num-1]"
              label= "입력 값"
              solo
            ></v-text-field>
            <v-btn @click="numOfText += 1">속성 추가</v-btn>
            <v-btn @click="drawCanvas">그리기</v-btn>
            <span>{{ numOfText }}</span>
            <span>{{ exampleContent }}</span>
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
    ],
    exampleContent: [],
    numOfText: 1,
    location_x: 10,
    location_y: 50
  }),
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
      var snapshotCanvas = document.getElementById('snapshot')
      var ctx = snapshotCanvas.getContext('2d')
      item.image = false
      ctx.clearRect(0, 0, 1080, 720)
    },
    drawCanvas: function () {
      var frame = document.getElementById('frame')
      var snapshotCanvas = document.getElementById('snapshot')
      var ctx = snapshotCanvas.getContext('2d')
      ctx.font = '20px Nanum Gothic extra-bold'

      ctx.fillStyle = 'white'
      // ctx.strokeStyle = 'white'
      ctx.lineWidth = '0.5'

      ctx.drawImage(frame, 0, 0, snapshotCanvas.width, snapshotCanvas.height)
      for (var i = 0; i < this.exampleContent.length; i++) {
        ctx.fillText(this.exampleContent[i], 10, 25 + i * 20)
        ctx.strokeText(this.exampleContent[i], 10, 25 + i * 20)
      }
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
