<template>
  <div class="">
    <el-row style="margin: 0 40px;">
      <el-col :span="12" style="text-align: left">
        <!--        Start working progress-->
        <div class="working-progress">
          <h1 class="color-light">Working progress</h1>
          <!--          <div v-for="(value, key) in contents" :key="key">-->
          <el-row>
            <el-col :span="8">
              <div style="font-weight: bold">Start at</div>
            </el-col>
            <el-col :span="16">
              <div>{{ current_work.startAt }}</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div style="font-weight: bold">Remaining time</div>
            </el-col>
            <el-col :span="16">
              <div>{{ current_work.remainTime }}</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div style="font-weight: bold">Number of paved stones</div>
            </el-col>
            <el-col :span="16">
              <div>{{ current_work.stoneDone }}</div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <div style="font-weight: bold">Total of stones have to pave</div>
            </el-col>
            <el-col :span="16">
              <div>{{ current_work.totalStone }}</div>
            </el-col>
          </el-row>
          <!--          </div>-->
        </div>
        <!--        End  working progress-->

        <!--        Start pattern-->
<!--        <div class="pattern" style="margin-top: 20px">-->
<!--          <el-row style="align-items: center;display: flex;">-->
<!--            <el-col :span="11">-->
<!--              <h1 class="color-light">Current pattern</h1>-->
<!--              <img src="@/assets/current-pattern.png" alt="current-pattern" style="width: 100%">-->
<!--            </el-col>-->
<!--            <el-col :span="2"><i class="el-icon-right" style="font-size: 50px"></i></el-col>-->
<!--            <el-col :span="11">-->
<!--              <h1 class="color-light">Final pattern</h1>-->
<!--              <img src="@/assets/pattern.png" alt="final-pattern" style="width: 100%">-->
<!--            </el-col>-->
<!--          </el-row>-->

<!--        </div>-->

        <!--      End pattern-->
<!--        Video streaming-->
        <iframe src="http://192.168.0.105:8080/browserfs.html" width="700px" height="400px"/>
<!--        End video streaming-->
      </el-col>
      <el-col :span="12">
        <div class="remote-control">
          <el-row><i class="el-icon-arrow-up" @click="remote(1)"></i></el-row>
          <i class="el-icon-arrow-left" @click="remote(2)"></i>
          <img src="@/assets/robot.png" alt="" style="height: 300px">
          <i class="el-icon-arrow-right" @click="remote(3)"></i>
          <el-row><i class="el-icon-arrow-down" @click="remote(4)"></i></el-row>
        </div>
        <!--        Start remote control-->
        <div class="remote-control">
          <el-row>
            <i class="el-icon-video-pause" @click="setPause"></i>
            <i class="el-icon-video-play" @click="setPause"></i>
          </el-row>
          <i class="el-icon-upload2" @click="remote(5)"></i>
          <i class="el-icon-download" @click="remote(6)"></i>
        </div>
        <!--      End remote control-->
      </el-col>
    </el-row>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'active',
  data() {
    return {
      current_work: {
        "pattern": 1,
        "remainTime": "Thu, 29 Apr 2021 06:29:38 GMT",
        "startAt": "Thu, 29 Apr 2021 06:29:38 GMT",
        "status": 0,
        "stoneDone": 10,
        "totalStone": 100
      }
    }
  },
  created() {
    axios.get(`${axios.defaults.baseURL}/robots/worksprogress`, {params: {id: this.$store.state.robot.id}})
        .then(response => {
          this.current_work = response.data.current_work
        })
        .catch(e => {
          this.$notify.error({
            title: 'Error',
            message: e.response.data.Errormessage
          });
        })
  },
  methods: {
    setPause() {
      axios.get(`${axios.defaults.baseURL}/robots/set-pause-status`, {params: {robot_id: this.$store.state.robot.id}})
          .then(response => {
            console.log(response)
          })
          .catch(e => {
            this.$notify.error({
              title: 'Error',
              message: e.response.data.Errormessage
            });
          })
    },
    // eslint-disable-next-line no-unused-vars
    remote(command) {
      axios.get(`${axios.defaults.baseURL}/robots/remote`, {params: {
        robot_id: this.$store.state.robot.id,
        cmd_id: command
      }})
          .then(() => {
            // console.log(response)
          })
          .catch(e => {
            this.$notify.error({
              title: 'Error',
              message: e.response.data.Errormessage
            });
          })
    }
  }
}
</script>

<style>
.working-progress {
  line-height: 35px;
}

.pattern .color-light {
  margin-bottom: 0;
}

.remote-control i {
  font-size: 50px;
  margin: 20px;
}

.el-icon-arrow-right, .el-icon-arrow-left {
  vertical-align: top;
  line-height: 250px;
  margin-top: 0;
}

i::before {
  cursor: pointer;
}

.el-icon-right::before {
  cursor: auto;
}
</style>