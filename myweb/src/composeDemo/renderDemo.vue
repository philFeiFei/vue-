<template>
    <div>
        <el-table :data="table" style="width: 100%" stripe :border="bordered" height="300px">
            <el-table-column width="100px" fixed label="name" prop="name"></el-table-column>
            <el-table-column width="200px" label="年龄" prop="age"></el-table-column>
            <el-table-column width="200px" label="sex" prop="sex"></el-table-column>
            <el-table-column width="300px" label="site" prop="site"></el-table-column>
            <el-table-column width="300px" label="学校" prop="school"></el-table-column>
            <el-table-column width="100px" label="操作" fixed="right">
               <template  slot-scope="scope">
                <el-button type="text" size="small">修改</el-button>
               </template>
            </el-table-column>
        </el-table>
        <table class="table table-hover table-striped table-bordered table-sm">
            <thead>
                <tr>
                    <th>name</th>
                    <th>age</th>
                    <th>sex</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(per ,index) in table" :key="index">
                    <td>{{per.name}}</td>
                    <td>{{per.age}}</td>
                    <td>{{per.sex}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
  data() {
    return {
      bordered: false,
      table: [
        {
          name: "phil",
          age: 22,
          sex: "1",
          site: "恒大名都九号楼试好了哈哈哈",
          school: "清华大学五道口职业学院"
        },
        {
          name: "billy",
          age: 23,
          sex: "2",
          site: "恒大名都九号楼试好了哈哈哈",
          school: "清华大学五道口职业学院"
        },
        {
          name: "leon",
          age: 244,
          sex: "2",
          site: "恒大名都九号楼试好了哈哈哈",
          school: "清华大学五道口职业学院"
        },
        {
          name: "leon",
          age: 244,
          sex: "2",
          site: "恒大名都九号楼试好了哈哈哈",
          school: "清华大学五道口职业学院"
        },
        {
          name: "leon",
          age: 244,
          sex: "2",
          site: "恒大名都九号楼试好了哈哈哈",
          school: "清华大学五道口职业学院"
        },
        {
          name: "leon",
          age: 244,
          sex: "2",
          site: "恒大名都九号楼试好了哈哈哈",
          school: "清华大学五道口职业学院"
        },
        {
          name: "leon",
          age: 244,
          sex: "2",
          site: "恒大名都九号楼试好了哈哈哈",
          school: "清华大学五道口职业学院"
        }
      ]
    };
  }
};
</script>


