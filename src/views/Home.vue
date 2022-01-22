<template>
  <div>
    <Navbar />

    <div style="margin-top: 100px;" class="container">
      <el-card shadow="always">
        <h3>Table List</h3>
        <el-button
        type="primary"
        plain
        size="medium"
        style="float: right; margin-top: 5px; margin-bottom: 5px;"
        >Add new data</el-button>
        <Table 
        :dataArray="arrayData"
        />
      </el-card>
    </div>

  </div>
</template>

<script>
import Table from "@/components/Table/Table"
import Navbar from "@/components/Navbar/Navbar"
import {mapGetters} from "vuex"
export default {
  data : () => ({
    arrayData : []
  }),
  components: {
    Navbar, Table
  },
  computed: {
    ...mapGetters({
      fetchData : 'getter_data'
    })
  },
  created() {
    this.getData();
  },
  methods : {
    getData: function() {
      this.$store.dispatch(`action_get_data`).then(() => {
        this.arrayData = this.fetchData.data
      })
    }
  }
}
</script>