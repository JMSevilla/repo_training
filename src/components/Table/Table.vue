<template>
    <div>
        <table class="table table-bordered table-outline table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">About us image</th>
      <th scope="col">About Description</th>
      <th scope="col">About Title</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>


    <tr v-for="item in dataArray" :key="item.aboutUsID">
      <th scope="row">{{item.aboutUsID}}</th>
      <td>{{item.about_us_company_profile_image}}</td>
      <td>{{item.about_us_desc}}</td>
      <td>{{item.about_us_title}}</td>
       <td>
           <el-button type="primary" plain size="small">Edit</el-button> &nbsp;
           <el-button type="danger" plain size="small">Delete</el-button>
       </td>
    </tr>
    
    
  </tbody>
</table>
    </div>
</template>

<script>
export default {
    props : {
        dataArray : Array
    }
}
</script>