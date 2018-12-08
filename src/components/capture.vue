<template>
    <v-app
      id="inspire"
      style="background-color: #ffffff !important;"
    >
    <v-container fluid>
      <v-layout row wrap align-center>
        <v-flex v-for="item in items" key="item.id" style="text-align: center" xs12 sm6 ma-3>
          <!-- 이미지 input  -->
          <div v-if="!item.image">
              <!-- <v-icon x-large>add_a_photo</v-icon> -->
              <v-btn
                color="teal lighten-2"
                dark
                fab
                fixed
                bottom
                right
                @click="onPickFile"
              >
              <v-icon>add_a_photo</v-icon>
              </v-btn>
              <input style="display:none" type="file" ref="fileInput" accept="image/*" capture="camera" id="camera" @change="onFileChange(item, $event)">
          </div>

          <!-- alert를 활용한 현재 위치 호출 -->
          <div>
           <v-alert
             v-model="alert"
             dismissible
             color="teal lighten-2"
             transition="scale-transition"
             icon="info"
           >
           현재 위도는: <p id='startLat'></p> 현재 경도는: <p id='startLon'></p>
           </v-alert>
         </div>

         <!-- alert 호출 버튼 -->
         <v-btn
           v-if="!alert"
           color="teal"
           dark
           outline
           round
           large
           @click="dialog2 = true"
         >
           내 위치 받아오기
           <v-icon right>my_location</v-icon>
         </v-btn>

          <!-- 이미지 캔버스 -->
          <div v-else style="text-align: center">
            <img style="display:none" id="frame" :src="item.image" />
            <v-btn color="teal lighten-2"
            dark
            fab
            fixed
            bottom
            right
            @click="removeImage(item)"
            >
            <v-icon>videocam_off</v-icon>
          </v-btn>
          </div>
        </v-flex>
        <v-divider></v-divider>

        <v-flex xs12 sm6 ma-3 style="text-align: center">
          <canvas id="snapshot" width=295 height=300 style="border:1px solid #BBB;">
            </canvas>
            <v-spacer></v-spacer>
            <v-text-field
              v-for="num in numOfText"
              :key = "num.id"
              v-model="exampleContent[num-1]"
              label= "입력 값"
              solo xs6
            ></v-text-field>
            <v-btn color="primary" @click="numOfText += 1">
              추가
              <v-icon right dark>add</v-icon>
            </v-btn>
            <v-btn color="error" @click="removeText">
              빼기
              <v-icon right dark>remove</v-icon>
            </v-btn>
            <v-btn
            outline large dark color="blue-grey"
            style="font-size: 15px"
            @click="drawCanvas"
            round
            >
              그리기
              <v-icon right dark>edit</v-icon>
            </v-btn>

            <!-- <span>{{ exampleContent }}</span> -->

            <!-- 모달 다이얼로그 창, 값을 더 빼지 못하게 -->
            <v-dialog
              v-model="dialog"
              max-width="290"
            >
            <v-card>
                <v-card-title class="headline">더 뺄 수 없어요!</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="green darken-1"
                    flat="flat"
                    @click="dialog = false"
                  >
                    그치만...
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <!-- 2번 다이얼로그, 위치 약관 동의 -->
          <v-dialog
            v-model="dialog2"
            max-width="290"
          >
            <v-card>
              <v-card-title class="headline">위치 정보 제공 동의</v-card-title>

              <v-card-text>
                현재 위치 정보를 받아오려 합니다.
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                  color="green darken-1"
                  flat="flat"
                  @click="dialog2 = false"
                >
                  거부
                </v-btn>

                <v-btn
                  color="green darken-1"
                  flat="flat"
                  @click="dialog2 = false; getLocation(); alert = true"
                >
                  동의
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
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
    location_x: 0,
    location_y: 0,
    dialog: false,
    dialog2: false,
    currentLat: '0',
    currentLon: '0',
    alert: false
  }),
  methods: {
    getLocation () {
      if (navigator.geolocation) console.log('Geolocation is supported!')
      else console.log('Geolocation is not supported for this Browser/OS.')
      var startPos

      var geoSuccess = function (position) {
        startPos = position
        // startPos.coords.accuracy = 100
        console.log(startPos)
        // this.currentLat = startPos.coords.latitude
        // this.currentLon = startPos.coords.longitude
        document.getElementById('startLat').innerHTML = startPos.coords.latitude
        document.getElementById('startLon').innerHTML = startPos.coords.longitude
      }

      var geoError = function (error) {
        console.log('Error occurred. Error code: ' + error.code)
        // error.code can be:
        //   0: unknown error
        //   1: permission denied
        //   2: position unavailable (error response from location provider)
        //   3: timed out
      }
      navigator.geolocation.getCurrentPosition(geoSuccess, geoError)
      this.alert = true
    },
    removeText () {
      this.numOfText -= 1
      if (this.numOfText < 0) {
        this.numOfText = 0
        this.dialog = true
      }
    },
    onPickFile () {
      this.$refs.fileInput[0].click()
      // this.dialog = true
    },
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
      ctx.clearRect(0, 0, snapshotCanvas.width, snapshotCanvas.height)
    },
    drawCanvas: function () {
      var frame = document.getElementById('frame')
      var snapshotCanvas = document.getElementById('snapshot')
      var ctx = snapshotCanvas.getContext('2d')
      ctx.clearRect(0, 0, snapshotCanvas.width, snapshotCanvas.height)

      ctx.font = '20px Nanum Gothic extra-bold'
      ctx.fillStyle = 'white'
      ctx.lineWidth = '0.5'
      ctx.drawImage(frame, 0, 0, snapshotCanvas.width, snapshotCanvas.height)
      // ctx.fillRect(0, 0, 150, 100)
      for (var i = 0; i < this.exampleContent.length; i++) {
        ctx.fillStyle = 'white'
        ctx.fillRect(0, 0, this.exampleContent[i].length * 10 + 50, 40 + i * 20)
      }
      for (var j = 0; j < this.exampleContent.length; j++) {
        ctx.fillStyle = 'black'
        ctx.fillText(this.exampleContent[j], 10, 25 + j * 20)
        // ctx.strokeText(this.exampleContent[i], 10, 25 + i * 20)
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
