"use strict";(self["webpackChunkcrm_vue"]=self["webpackChunkcrm_vue"]||[]).push([[449],{449:function(e,l,a){a.r(l),a.d(l,{default:function(){return _}});var t=a(6252);const o={style:{padding:"10px"}},d={style:{margin:"10px 0px"}},m=(0,t.Uk)("查询"),r=(0,t.Uk)("编辑"),s=(0,t.Uk)("删除"),i={style:{margin:"10px 0px",float:"right"}},n=(0,t.Uk)("男"),u=(0,t.Uk)("女"),p=(0,t.Uk)("未知"),h={class:"dialog-footer"},f=(0,t.Uk)("取消"),g=(0,t.Uk)("确定");function c(e,l,a,c,w,V){const b=(0,t.up)("el-input"),W=(0,t.up)("el-button"),_=(0,t.up)("el-table-column"),y=(0,t.up)("el-popconfirm"),x=(0,t.up)("el-table"),C=(0,t.up)("el-pagination"),k=(0,t.up)("el-form-item"),U=(0,t.up)("el-radio"),z=(0,t.up)("el-form"),v=(0,t.up)("el-dialog");return(0,t.wg)(),(0,t.iD)("div",o,[(0,t._)("div",d,[(0,t.Wm)(b,{modelValue:w.search,"onUpdate:modelValue":l[0]||(l[0]=e=>w.search=e),placeholder:"请输入姓名",clearable:"",style:{width:"20%","margin-left":"950px"}},null,8,["modelValue"]),(0,t.Wm)(W,{type:"primary",style:{"margin-left":"5px"},onClick:V.load},{default:(0,t.w5)((()=>[m])),_:1},8,["onClick"])]),(0,t.Wm)(x,{data:w.tableData,border:"",style:{width:"100%"},stripe:""},{default:(0,t.w5)((()=>[(0,t.Wm)(_,{prop:"username",label:"用户名"}),(0,t.Wm)(_,{prop:"nickName",label:"姓名"}),(0,t.Wm)(_,{prop:"password",label:"密码"}),(0,t.Wm)(_,{prop:"age",label:"年龄"}),(0,t.Wm)(_,{prop:"sex",label:"性别"}),(0,t.Wm)(_,{prop:"tel",label:"手机号"}),(0,t.Wm)(_,{prop:"address",label:"家庭住址"}),(0,t.Wm)(_,{label:"操作"},{default:(0,t.w5)((e=>[(0,t.Wm)(W,{size:"mini",onClick:l=>V.handleEidt(e.row)},{default:(0,t.w5)((()=>[r])),_:2},1032,["onClick"]),(0,t.Wm)(y,{title:"你确认删除吗?",onConfirm:l=>V.handleDelete(e.row.id)},{reference:(0,t.w5)((()=>[(0,t.Wm)(W,{size:"mini",type:"danger"},{default:(0,t.w5)((()=>[s])),_:1})])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["data"]),(0,t._)("div",i,[(0,t.Wm)(C,{currentPage:w.currentPage,"onUpdate:currentPage":l[1]||(l[1]=e=>w.currentPage=e),"page-size":w.pageSize,"page-sizes":[5,10,20],layout:"total, sizes, prev, pager, next, jumper",total:w.total,onSizeChange:V.handleSizeChange,onCurrentChange:V.handleCurrentChange},null,8,["currentPage","page-size","total","onSizeChange","onCurrentChange"]),(0,t.Wm)(v,{modelValue:w.dialogVisible,"onUpdate:modelValue":l[12]||(l[12]=e=>w.dialogVisible=e),title:"修改病人信息",width:"30%"},{footer:(0,t.w5)((()=>[(0,t._)("span",h,[(0,t.Wm)(W,{onClick:l[11]||(l[11]=e=>w.dialogVisible=!1)},{default:(0,t.w5)((()=>[f])),_:1}),(0,t.Wm)(W,{type:"primary",onClick:V.save},{default:(0,t.w5)((()=>[g])),_:1},8,["onClick"])])])),default:(0,t.w5)((()=>[(0,t.Wm)(z,{model:w.form,"label-width":"120px"},{default:(0,t.w5)((()=>[(0,t.Wm)(k,{label:"用户名"},{default:(0,t.w5)((()=>[(0,t.Wm)(b,{modelValue:w.form.username,"onUpdate:modelValue":l[2]||(l[2]=e=>w.form.username=e),style:{width:"160px"},disabled:""},null,8,["modelValue"])])),_:1}),(0,t.Wm)(k,{label:"昵称"},{default:(0,t.w5)((()=>[(0,t.Wm)(b,{modelValue:w.form.nickName,"onUpdate:modelValue":l[3]||(l[3]=e=>w.form.nickName=e),style:{width:"160px"}},null,8,["modelValue"])])),_:1}),(0,t.Wm)(k,{label:"密码"},{default:(0,t.w5)((()=>[(0,t.Wm)(b,{modelValue:w.form.password,"onUpdate:modelValue":l[4]||(l[4]=e=>w.form.password=e),style:{width:"160px"}},null,8,["modelValue"])])),_:1}),(0,t.Wm)(k,{label:"年龄"},{default:(0,t.w5)((()=>[(0,t.Wm)(b,{modelValue:w.form.age,"onUpdate:modelValue":l[5]||(l[5]=e=>w.form.age=e),style:{width:"160px"}},null,8,["modelValue"])])),_:1}),(0,t.Wm)(k,{label:"手机号"},{default:(0,t.w5)((()=>[(0,t.Wm)(b,{modelValue:w.form.tel,"onUpdate:modelValue":l[6]||(l[6]=e=>w.form.tel=e),style:{width:"160px"}},null,8,["modelValue"])])),_:1}),(0,t.Wm)(k,{label:"性别"},{default:(0,t.w5)((()=>[(0,t.Wm)(U,{modelValue:w.form.sex,"onUpdate:modelValue":l[7]||(l[7]=e=>w.form.sex=e),label:"男"},{default:(0,t.w5)((()=>[n])),_:1},8,["modelValue"]),(0,t.Wm)(U,{modelValue:w.form.sex,"onUpdate:modelValue":l[8]||(l[8]=e=>w.form.sex=e),label:"女"},{default:(0,t.w5)((()=>[u])),_:1},8,["modelValue"]),(0,t.Wm)(U,{modelValue:w.form.sex,"onUpdate:modelValue":l[9]||(l[9]=e=>w.form.sex=e),label:"未知"},{default:(0,t.w5)((()=>[p])),_:1},8,["modelValue"])])),_:1}),(0,t.Wm)(k,{label:"地址"},{default:(0,t.w5)((()=>[(0,t.Wm)(b,{type:"textarea",modelValue:w.form.address,"onUpdate:modelValue":l[10]||(l[10]=e=>w.form.address=e),style:{width:"200px"}},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue"])])])}var w=a(4471),V={name:"Patient",data(){return{search:"",currentPage:1,pageSize:10,total:1,tableData:[],form:[],dialogVisible:!1}},created(){this.load()},methods:{load(){w.Z.get("/patient",{params:{pageNum:this.currentPage,pageSize:this.pageSize,search:this.search}}).then((e=>{this.tableData=e.data.records,this.total=e.data.total}))},save(){this.form.id&&w.Z.put("/patient",this.form).then((e=>{"0"===e.code?this.$message({type:"success",message:"更新成功"}):this.$message({type:"error",message:e.message}),this.load(),this.dialogVisible=!1}))},handleSizeChange(e){this.pageSize=e,this.load()},handleCurrentChange(e){this.currentPage=e,this.load()},handleEidt(e){this.form=JSON.parse(JSON.stringify(e)),this.dialogVisible=!0},handleDelete(e){w.Z["delete"]("/patient/"+e).then((e=>{"0"===e.code?this.$message({type:"success",message:"删除成功"}):this.$message({type:"error",message:e.message}),this.load()}))}}},b=a(3744);const W=(0,b.Z)(V,[["render",c]]);var _=W}}]);
//# sourceMappingURL=449.1c9e3cf2.js.map