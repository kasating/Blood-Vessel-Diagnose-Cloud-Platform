"use strict";(self["webpackChunkcrm_vue"]=self["webpackChunkcrm_vue"]||[]).push([[443],{5434:function(e,t,l){l.r(t),l.d(t,{default:function(){return L}});var i=l(6252),s=l(9963),n=l(3577);const o=(0,i._)("span",null,"专家意见：",-1),a=(0,i.Uk)("返回"),r=(0,i.Uk)("提交"),u={style:{margin:"10px 0px",display:"flex"}},h=(0,i.Uk)("撤销"),m=(0,i.Uk)("重置"),d=(0,i.Uk)("下载图片"),p=(0,i._)("span",{style:{"margin-left":"5px"}},"选择绘制图案：",-1),g=(0,i.Uk)("画多边形"),c=(0,i._)("span",{style:{"margin-left":"10px","text-align":"right"}},"请输入三个Cobb角判断脊椎侧凸类型：",-1),f=(0,i._)("span",{style:{"margin-left":"10px","text-align":"right"}},"上胸弯：",-1),y=(0,i._)("span",{style:{"margin-left":"10px","text-align":"right"}},"主胸弯：",-1),w=(0,i._)("span",{style:{"margin-left":"10px","text-align":"right"}},"腰胸弯/腰弯：",-1),x=(0,i.Uk)("判断"),v=(0,i._)("span",{style:{"margin-left":"10px"}},"是否填充所画区域：",-1),_={style:{"margin-left":"10px"}},T=(0,i._)("span",{style:{"margin-left":"10px","text-align":"right"}},"请顺序打点描出脊椎图案",-1),V=(0,i.Uk)("描出脊椎");function W(e,t,l,W,b,k){const P=(0,i.up)("el-col"),C=(0,i.up)("el-input"),$=(0,i.up)("el-button"),U=(0,i.up)("el-row"),D=(0,i.up)("el-option"),S=(0,i.up)("el-select"),M=(0,i.up)("el-color-picker");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",null,[(0,i.Wm)(U,null,{default:(0,i.w5)((()=>[(0,i.Wm)(P,{span:12},{default:(0,i.w5)((()=>[(0,i._)("canvas",{ref:"cont",style:{border:"2px solid #aaaaaa",display:"block"},onClick:t[0]||(t[0]=(...e)=>k.handleEvent&&k.handleEvent(...e))},null,512)])),_:1}),(0,i.Wm)(P,{span:2,style:{"margin-left":"20px"}},{default:(0,i.w5)((()=>[o])),_:1}),(0,i.Wm)(P,{span:9,style:{"text-align":"left"}},{default:(0,i.w5)((()=>[(0,i.Wm)(C,{type:"textarea",rows:27,placeholder:"请输入内容",modelValue:this.form.result,"onUpdate:modelValue":t[1]||(t[1]=e=>this.form.result=e)},null,8,["modelValue"]),(0,i.Wm)($,{type:"primary",style:{"margin-left":"430px","text-align":"right"},onClick:t[2]||(t[2]=t=>e.$router.push("/Img"))},{default:(0,i.w5)((()=>[a])),_:1}),(0,i.Wm)($,{type:"primary",style:{"margin-left":"20px","text-align":"right"},onClick:k.submit},{default:(0,i.w5)((()=>[r])),_:1},8,["onClick"])])),_:1})])),_:1})]),(0,i._)("div",u,[(0,i.wy)((0,i.Wm)($,{type:"primary",style:{"margin-left":"5px","text-align":"right"},onClick:k.cancel},{default:(0,i.w5)((()=>[h])),_:1},8,["onClick"]),[[s.F8,!b.isPolygon]]),(0,i.Wm)($,{type:"primary",style:{"margin-left":"5px","text-align":"right"},onClick:k.resetMap},{default:(0,i.w5)((()=>[m])),_:1},8,["onClick"]),(0,i.Wm)($,{type:"primary",style:{"margin-left":"5px","text-align":"right"},onClick:k.download},{default:(0,i.w5)((()=>[d])),_:1},8,["onClick"]),p,(0,i.Wm)(S,{modelValue:b.tool,"onUpdate:modelValue":t[3]||(t[3]=e=>b.tool=e),clearable:"",onChange:k.changeTool,size:"small"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(b.tools,(e=>((0,i.wg)(),(0,i.j4)(D,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","onChange"]),(0,i._)("div",null,[(0,i.wy)((0,i._)("span",{style:{"margin-left":"5px","text-align":"right"}},"最新两条直线的夹角为："+(0,n.zw)(b.angle),513),[[s.F8,b.isLine]]),(0,i.wy)((0,i.Wm)($,{type:"primary",style:{"margin-left":"5px","text-align":"right"},onClick:k.drawPolygon},{default:(0,i.w5)((()=>[g])),_:1},8,["onClick"]),[[s.F8,b.isPolygon]]),(0,i.wy)((0,i._)("span",{style:{"margin-left":"5px","text-align":"right"}},"最新图形的面积为："+(0,n.zw)(b.area),513),[[s.F8,b.isArea]])])]),(0,i.wy)((0,i._)("div",null,[c,f,(0,i.Wm)(C,{modelValue:b.PT,"onUpdate:modelValue":t[4]||(t[4]=e=>b.PT=e),style:{width:"80px"}},null,8,["modelValue"]),y,(0,i.Wm)(C,{modelValue:b.MT,"onUpdate:modelValue":t[5]||(t[5]=e=>b.MT=e),style:{width:"80px"}},null,8,["modelValue"]),w,(0,i.Wm)(C,{modelValue:b.TL,"onUpdate:modelValue":t[6]||(t[6]=e=>b.TL=e),style:{width:"80px"}},null,8,["modelValue"]),(0,i.Wm)($,{type:"primary",style:{"margin-left":"10px","text-align":"right"},onClick:k.judge},{default:(0,i.w5)((()=>[x])),_:1},8,["onClick"])],512),[[s.F8,b.isLine]]),(0,i._)("div",null,[(0,i.wy)((0,i._)("div",null,[v,(0,i.Wm)(S,{modelValue:b.fill,"onUpdate:modelValue":t[7]||(t[7]=e=>b.fill=e),clearable:"",onChange:k.changeFill,size:"small"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(b.fills,(e=>((0,i.wg)(),(0,i.j4)(D,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","onChange"]),(0,i.wy)((0,i._)("span",_,"请选择填充颜色：",512),[[s.F8,b.isColor]]),(0,i.wy)((0,i.Wm)(M,{modelValue:b.color,"onUpdate:modelValue":t[8]||(t[8]=e=>b.color=e)},null,8,["modelValue"]),[[s.F8,b.isColor]])],512),[[s.F8,b.isArea]])]),(0,i.wy)((0,i._)("div",null,[T,(0,i.Wm)($,{type:"primary",style:{"margin-left":"10px","text-align":"right"},onClick:k.outline},{default:(0,i.w5)((()=>[V])),_:1},8,["onClick"])],512),[[s.F8,b.isPoint]])],64)}var b=l(4471);let k=[];function P(e,t,l){this.x=e,this.y=t,this.type=l}function C(e,t){let l=t.getBoundingClientRect();return new P(e.offsetX-l.left*(t.width/l.width),e.offsetY-l.top*(t.height/l.height),e.which)}function $(e,t){e.putImageData(t[t.length-1].data,0,0)}function U(e,t,l){e.push({data:t.getImageData(0,0,l.width,l.height)})}var D={name:"Canvas",data(){return{ctx:null,mycanvas:null,textarea:"",tool:"",tempPos:[],posArray:[],form:{},Cwidth:.5*window.screen.width,Cheight:.7*window.screen.height,tools:[{value:"3",label:"直线"},{value:"1",label:"矩形"},{value:"2",label:"圆形"},{value:"4",label:"任意多边形"},{value:"5",label:"点"}],point:[],angle:"",area:"",isPolygon:!1,isLine:!1,isArea:!1,isPoint:!1,fill:"",fills:[{value:"0",label:"不填充"},{value:"1",label:"填充"}],color:"",isColor:!1,PT:"",MT:"",TL:"",imgUrl:""}},mounted(){let e=sessionStorage.getItem("img")||"{}";this.form=JSON.parse(e),this.mycanvas=this.$refs.cont,this.ctx=this.mycanvas.getContext("2d"),this.mycanvas.width=.5*window.screen.width,this.mycanvas.height=.7*window.screen.height,this.drawImg(),this.drawer()},methods:{download(){let e=this.mycanvas.toDataURL("image/png");this.imgUrl=e;let t=document.createElement("a"),l=new MouseEvent("click");t.download="labelPicture",t.href=this.imgUrl,t.dispatchEvent(l)},submit(){this.form.state="已评阅",b.Z.put("/img",this.form).then((e=>{"0"===e.code?this.$message({type:"success",message:"提交成功"}):this.$message({type:"error",message:e.message}),sessionStorage.removeItem("img"),this.$router.push("/img")}))},judge(){if(""==this.PT||""==this.MT||""==this.TL)return this.$alert("请输入三个Cobb角后再点击按钮","提示",{confirmButtonText:"确定",type:"warning"}),!1;this.PT<25&&this.MT>=25&&this.TL<25?this.$alert("脊椎侧凸类型：主胸弯","判断结果",{confirmButtonText:"确定",type:"info"}):this.PT>=25&&this.MT>=25&&this.TL<25&&this.MT>this.PT?this.$alert("脊椎侧凸类型：双胸弯","判断结果",{confirmButtonText:"确定",type:"info"}):this.PT<25&&this.MT>=25&&this.TL>=25&&this.MT>this.TL?this.$alert("脊椎侧凸类型：双主弯","判断结果",{confirmButtonText:"确定",type:"info"}):this.PT>=25&&this.MT>=25&&this.TL>=25&&this.MT>this.PT&&this.TL>this.PT?this.$alert("脊椎侧凸类型：三主弯","判断结果",{confirmButtonText:"确定",type:"info"}):this.PT<25&&this.MT<25&&this.TL>=25?this.$alert("脊椎侧凸类型：胸腰弯/腰弯","判断结果",{confirmButtonText:"确定",type:"info"}):this.PT<25&&this.MT>=25&&this.TL>=25&&this.TL>this.MT?this.$alert("脊椎侧凸类型：胸腰弯/腰弯-主胸弯","判断结果",{confirmButtonText:"确定",type:"info"}):this.$alert("没有该类型的侧凸","提示",{confirmButtonText:"确定",type:"warning"})},handleEvent(e){this.drawer()},changeFill(){0==this.fill?this.isColor=!1:this.isColor=!0},changeTool(e){this.point=[],this.angle="",this.drawer(),"1"==e?(this.isArea=!0,this.isLine=!1,this.isPolygon=!1,this.fill="",this.isColor=!1,this.isPoint=!1):"2"==e?(this.isArea=!0,this.isPolygon=!1,this.isLine=!1,this.fill="",this.isColor=!1,this.isPoint=!1):"3"==e?(this.isArea=!1,this.isPolygon=!1,this.isLine=!0,this.isColor=!1,this.isPoint=!1):"4"==e?(this.isArea=!0,this.isPolygon=!0,this.isLine=!1,this.fill="",this.isColor=!1,this.isPoint=!1):"5"==e&&(this.isArea=!1,this.isPolygon=!1,this.isLine=!1,this.isColor=!1,this.isPoint=!0)},drawImg(){let e=new Image;e.src=this.form.img,e.crossOrigin="",e.onload=()=>{this.ctx.drawImage(e,this.Cwidth/3,0,300,this.Cheight)}},getTan(e,t,l,i){let s=(t.y-e.y)/(t.x-e.x),n=(i.y-l.y)/(i.x-l.x),o=(s-n)/(1+s*n);return Math.abs(o)},myAngle(e){let t=180*Math.atan(e)/Math.PI;return t},getPolygonArea(){let e=0,t=this.point.length;for(let l=0;l<t;l++)e+=this.point[l].x*this.point[(l+1)%t].y-this.point[(l+1)%t].x*this.point[l].y;this.area=Math.abs(e)/2,this.area=this.area/100},outline(){let e=this.point,t=e.length;this.ctx.save(),this.ctx.globalAlpha=1,this.ctx.fillStyle="#100f0f",this.ctx.rect(this.Cwidth/3,0,this.Cwidth/2.5,this.Cheight),this.ctx.fill(),this.ctx.beginPath(),this.ctx.lineWidth="2",this.ctx.strokeStyle="#100f0f",this.ctx.moveTo(e[0].x,e[0].y);for(let l=0;l<t;l++)this.ctx.lineTo(e[l].x,e[l].y);this.ctx.lineTo(e[0].x,e[0].y),this.ctx.stroke(),this.ctx.closePath(),this.ctx.globalAlpha=1,this.ctx.fillStyle="#f3f2ec",this.ctx.fill(),this.ctx.restore(),this.point=[],e=[]},drawerRect(e,t,l,i,s){return e.strokeStyle="#f00000",1==this.fill&&(e.fillStyle=this.color,e.fill()),e.lineWidth="2",e.save(),e.beginPath(),e.rect(t,l,i,s),e.stroke(),e.restore(),{data:[t,l,i,s]}},drawerCircle(e,t,l,i){return e.strokeStyle="#f00000",1==this.fill&&(e.fillStyle=this.color,e.fill()),e.lineWidth="2",e.beginPath(),e.arc(t,l,i,0,2*Math.PI,!0),e.stroke(),e.restore(),{data:[t,l,i]}},drawerLine(e,t,l,i,s){return e.save(),e.fillStyle="#f00000",e.lineWidth="2",e.strokeStyle="#f00000",e.beginPath(),e.moveTo(t,l),e.lineTo(i,s),e.stroke(),e.restore(),{data:[t,l,i,s]}},drawerPoint(e,t,l){e.save(),e.fillStyle="#f00000",e.strokeStyle="#f00000",e.beginPath(),e.arc(t,l,3,0,2*Math.PI,!0),e.closePath(),e.fill(),e.restore(),this.posArray.push({data:[t,l]})},drawPolygon(){this.sortPoints(this.point)},sortPoints(e){if(""==e)return!1;let t=e.sort(((e,t)=>e.x-t.x)),l=t[0],i=t[t.length-1],s=t.filter((e=>e.x===l.x)),n=t.filter((e=>e.x===i.x));s.length>1&&s.sort(((e,t)=>t.y-e.y)),n.length>1&&n.sort(((e,t)=>t.y-e.y)),l=s[0],i=n[0];let o=Math.atan2(i.y-l.y,i.x-l.x),a=[],r=[];t.forEach((e=>{if(e===l||e===i)return!1;let t=Math.atan2(e.y-l.y,e.x-l.x);t>o?r.push(e):a.push(e)})),r=r.sort(((e,t)=>e.x!==t.x?e.x-t.x:t.y-e.y)),a=a.sort(((e,t)=>e.x!==t.x?t.x-e.x:t.y-e.x));let u=[l].concat(r,[i],a),h=u.length;this.ctx.save(),this.ctx.beginPath(),this.ctx.lineWidth="2",this.ctx.strokeStyle="#f00000",this.ctx.moveTo(u[0].x,u[0].y);for(let m=0;m<h;m++)this.ctx.lineTo(u[m].x,u[m].y);this.ctx.lineTo(u[0].x,u[0].y),this.ctx.stroke(),1==this.fill&&(this.ctx.fillStyle=this.color,this.ctx.fill()),this.ctx.restore(),this.getPolygonArea(),this.point=[],u=[]},drawer(){let e=this.$refs.cont,t=e.getContext("2d"),l=this;"1"===l.tool?(e.onclick=null,e.onmousedown=function(i){l.tempPos=[],i.preventDefault();let s=C(i,e);e.onmousemove=function(i){i.preventDefault(),$(t,k);let n=C(i,e),o=Math.abs(n.x-s.x),a=Math.abs(n.y-s.y),r=n.x>s.x?s.x:n.x,u=n.y>s.y?s.y:n.y,h=l.drawerRect(t,r,u,o,a);l.area=o*a/100,l.tempPos.push(h)},e.onmouseup=function(t){t.preventDefault(),e.onmousemove=null,l.posArray.push(l.tempPos[l.tempPos.length-1])}},U(k,t,e)):"2"===l.tool?(e.onmousedown=null,e.onmousemove=null,e.onmouseup=null,e.onclick=null,e.onmousedown=function(i){l.tempPos=[],i.preventDefault();let s=C(i,e);e.onmousemove=function(i){i.preventDefault(),$(t,k);let n=C(i,e),o=(n.x-s.x)/2,a=(n.y-s.y)/2,r=Math.sqrt(o*o+a*a);l.area=Math.PI*r*r/100,l.area=Math.round(1e3*l.area)/1e3;let u=l.drawerCircle(t,o+s.x,a+s.y,r);l.tempPos.push(u)},e.onmouseup=function(t){t.preventDefault(),e.onmousemove=null,l.posArray.push(l.tempPos[l.tempPos.length-1])}},U(k,t,e)):"3"===l.tool?(e.onmousedown=null,e.onmousemove=null,e.onmouseup=null,e.onclick=null,e.onmousedown=function(i){l.tempPos=[],i.preventDefault();let s=C(i,e);e.onmousemove=function(i){i.preventDefault(),$(t,k);let n=C(i,e),o=l.drawerLine(t,s.x,s.y,n.x,n.y);l.tempPos.push(o)},e.onmouseup=function(t){let i=C(t,e);l.point.push(i),l.point.push(s),this.point=l.point;let n=l.point.length;if(n>=4){let e=l.getTan(l.point[n-4],l.point[n-3],l.point[n-2],l.point[n-1]),t=l.myAngle(e);l.angle=Math.round(1e3*t)/1e3,l.angle=l.angle+"°"}t.preventDefault(),e.onmousemove=null,l.posArray.push(l.tempPos[l.tempPos.length-1])}},U(k,t,e)):"4"===l.tool?(e.onmousedown=null,e.onmousemove=null,e.onmouseup=null,e.onclick=function(i){let s=C(i,e);l.point.push(s),l.drawerPoint(t,s.x,s.y)},U(k,t,e)):"5"===l.tool&&(e.onmousedown=null,e.onmousemove=null,e.onmouseup=null,e.onclick=function(i){let s=C(i,e);l.point.push(s),l.drawerPoint(t,s.x,s.y)},U(k,t,e))},resetMap(){this.posArray=[],k=[k[0]];let e=this.$refs.cont,t=e.getContext("2d");t.clearRect(0,0,e.width,e.height),U(k,t,e),this.drawImg(),this.tool="",this.point=[],this.isPolygon=!1,this.isLine=!1,this.isArea=!1,this.isColor=!1,this.isPoint=!1},cancel(){if(k.length>1){this.posArray.pop(),k.pop(),3==this.tool&&(this.point.pop(),this.point.pop());let e=this.$refs.cont,t=e.getContext("2d");$(t,k)}else this.drawImg()}}},S=l(3744);const M=(0,S.Z)(D,[["render",W]]);var L=M},2151:function(e,t,l){l.r(t),l.d(t,{default:function(){return B}});var i=l(6252);const s={style:{width:"100%",height:"100vh","background-color":"darkgreen",overflow:"hidden"}},n={style:{width:"400px",margin:"150px auto"}},o=(0,i._)("div",{style:{color:"#cccccc","font-size":"30px","text-align":"center",padding:"30px 0"}},"脊柱病理分析云平台",-1),a=(0,i._)("span",{style:{color:"#cccccc"}}," 管理员 ",-1),r=(0,i._)("span",{style:{color:"#cccccc"}}," 病人 ",-1),u=(0,i._)("span",{style:{color:"#cccccc"}}," 专家 ",-1),h=(0,i.Uk)("登陆"),m=(0,i.Uk)("注册");function d(e,t,l,d,p,g){const c=(0,i.up)("el-input"),f=(0,i.up)("el-form-item"),y=(0,i.up)("el-radio"),w=(0,i.up)("el-button"),x=(0,i.up)("el-form"),v=(0,i.up)("register");return(0,i.wg)(),(0,i.iD)("div",s,[(0,i._)("div",n,[o,(0,i.Wm)(x,{ref:"formLogin",model:p.form,size:"normal",rules:p.rulesLogin},{default:(0,i.w5)((()=>[(0,i.Wm)(f,{prop:"username"},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{modelValue:p.form.username,"onUpdate:modelValue":t[0]||(t[0]=e=>p.form.username=e),placeholder:"用户名"},null,8,["modelValue"])])),_:1}),(0,i.Wm)(f,{prop:"password"},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{modelValue:p.form.password,"onUpdate:modelValue":t[1]||(t[1]=e=>p.form.password=e),placeholder:"密码","show-password":""},null,8,["modelValue"])])),_:1}),(0,i.Wm)(f,{prop:"role"},{default:(0,i.w5)((()=>[(0,i.Wm)(y,{modelValue:p.form.role,"onUpdate:modelValue":t[2]||(t[2]=e=>p.form.role=e),label:"0",style:{width:"31%"}},{default:(0,i.w5)((()=>[a])),_:1},8,["modelValue"]),(0,i.Wm)(y,{modelValue:p.form.role,"onUpdate:modelValue":t[3]||(t[3]=e=>p.form.role=e),label:"1",style:{width:"31%"}},{default:(0,i.w5)((()=>[r])),_:1},8,["modelValue"]),(0,i.Wm)(y,{modelValue:p.form.role,"onUpdate:modelValue":t[4]||(t[4]=e=>p.form.role=e),label:"2"},{default:(0,i.w5)((()=>[u])),_:1},8,["modelValue"])])),_:1}),(0,i.Wm)(f,null,{default:(0,i.w5)((()=>[(0,i.Wm)(w,{style:{width:"100%"},type:"primary",onClick:g.login},{default:(0,i.w5)((()=>[h])),_:1},8,["onClick"])])),_:1}),(0,i.Wm)(f,null,{default:(0,i.w5)((()=>[(0,i.Wm)(w,{style:{width:"100%"},type:"primary",onClick:g.register},{default:(0,i.w5)((()=>[m])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])]),(0,i.Wm)(v,{ref:"register"},null,512)])}var p=l(4471),g=l(9963);const c=e=>((0,i.dD)("data-v-f6918204"),e=e(),(0,i.Cn)(),e),f=c((()=>(0,i._)("span",null,"欢迎注册",-1))),y=c((()=>(0,i._)("span",null,"用户类别：",-1))),w=c((()=>(0,i._)("span",null,"　用户名：",-1))),x=c((()=>(0,i._)("span",null,"密　　码：",-1))),v=c((()=>(0,i._)("span",null,"确认密码：",-1))),_=c((()=>(0,i._)("span",null,"姓　　名：",-1))),T=c((()=>(0,i._)("span",null,"性　别：",-1))),V=c((()=>(0,i._)("span",null,"年　　龄：",-1))),W=c((()=>(0,i._)("span",null,"手机号码：",-1))),b=c((()=>(0,i._)("span",null,"家庭住址：",-1))),k=(0,i.Uk)("确定"),P=(0,i.Uk)("取消");function C(e,t,l,s,n,o){const a=(0,i.up)("el-header"),r=(0,i.up)("el-option"),u=(0,i.up)("el-select"),h=(0,i.up)("el-col"),m=(0,i.up)("el-row"),d=(0,i.up)("el-input"),p=(0,i.up)("el-main"),c=(0,i.up)("el-button"),C=(0,i.up)("el-footer"),$=(0,i.up)("el-container"),U=(0,i.up)("el-dialog");return(0,i.wg)(),(0,i.j4)(U,{ref:"dialog",modelValue:n.dialogVisible,"onUpdate:modelValue":t[11]||(t[11]=e=>n.dialogVisible=e),width:"40%"},{default:(0,i.w5)((()=>[(0,i.Wm)($,null,{default:(0,i.w5)((()=>[(0,i.Wm)(a,{class:"el-menu__title",style:{"margin-bottom":"2px","text-align":"center"}},{default:(0,i.w5)((()=>[f])),_:1}),(0,i.Wm)(p,null,{default:(0,i.w5)((()=>[(0,i._)("div",null,[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Wm)(h,{style:{"text-align":"center","margin-top":"10px"}},{default:(0,i.w5)((()=>[y,(0,i.Wm)(u,{modelValue:n.user.role,"onUpdate:modelValue":t[0]||(t[0]=e=>n.user.role=e),clearable:"",onChange:o.isShow,size:"small"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.SystemRole,(e=>((0,i.wg)(),(0,i.j4)(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","onChange"])])),_:1})])),_:1}),(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Wm)(h,{style:{"text-align":"center","margin-top":"10px"}},{default:(0,i.w5)((()=>[w,(0,i.Wm)(d,{modelValue:n.user.username,"onUpdate:modelValue":t[1]||(t[1]=e=>n.user.username=e),size:"small",style:{width:"200px"}},null,8,["modelValue"])])),_:1})])),_:1}),(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Wm)(h,{style:{"text-align":"center","margin-top":"10px"}},{default:(0,i.w5)((()=>[x,(0,i.Wm)(d,{modelValue:n.user.password,"onUpdate:modelValue":t[2]||(t[2]=e=>n.user.password=e),size:"small",style:{width:"200px"},"show-password":""},null,8,["modelValue"])])),_:1})])),_:1}),(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Wm)(h,{style:{"text-align":"center","margin-top":"10px"}},{default:(0,i.w5)((()=>[v,(0,i.Wm)(d,{modelValue:n.user.confirm,"onUpdate:modelValue":t[3]||(t[3]=e=>n.user.confirm=e),size:"small",style:{width:"200px"},"show-password":""},null,8,["modelValue"])])),_:1})])),_:1}),(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Wm)(h,{style:{"text-align":"center","margin-top":"10px"}},{default:(0,i.w5)((()=>[_,(0,i.Wm)(d,{modelValue:n.user.nickName,"onUpdate:modelValue":t[4]||(t[4]=e=>n.user.nickName=e),size:"small",style:{width:"200px"}},null,8,["modelValue"])])),_:1})])),_:1}),(0,i.wy)((0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Wm)(h,{style:{"text-align":"center","margin-top":"10px"}},{default:(0,i.w5)((()=>[T,(0,i.Wm)(u,{modelValue:n.user.sex,"onUpdate:modelValue":t[5]||(t[5]=e=>n.user.sex=e),clearable:"",size:"small"},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.gender,(e=>((0,i.wg)(),(0,i.j4)(r,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])),_:1})])),_:1},512),[[g.F8,n.isShowData]]),(0,i.wy)((0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Wm)(h,{style:{"text-align":"center","margin-top":"10px"}},{default:(0,i.w5)((()=>[V,(0,i.Wm)(d,{modelValue:n.user.age,"onUpdate:modelValue":t[6]||(t[6]=e=>n.user.age=e),size:"small",style:{width:"200px"}},null,8,["modelValue"])])),_:1})])),_:1},512),[[g.F8,n.isShowData]]),(0,i.wy)((0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Wm)(h,{style:{"text-align":"center","margin-top":"10px"}},{default:(0,i.w5)((()=>[W,(0,i.Wm)(d,{modelValue:n.user.tel,"onUpdate:modelValue":t[7]||(t[7]=e=>n.user.tel=e),size:"small",style:{width:"200px"}},null,8,["modelValue"])])),_:1})])),_:1},512),[[g.F8,n.isShowData]]),(0,i.wy)((0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Wm)(h,{style:{"text-align":"center","margin-top":"10px"}},{default:(0,i.w5)((()=>[b,(0,i.Wm)(d,{modelValue:n.user.address,"onUpdate:modelValue":t[8]||(t[8]=e=>n.user.address=e),size:"small",style:{width:"200px"}},null,8,["modelValue"])])),_:1})])),_:1},512),[[g.F8,n.isShowData]])])])),_:1}),(0,i.Wm)(C,{style:{"text-align":"center"}},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{size:"mini",type:"primary",onClick:t[9]||(t[9]=e=>o.register())},{default:(0,i.w5)((()=>[k])),_:1}),(0,i.Wm)(c,{size:"mini",type:"primary",onClick:t[10]||(t[10]=e=>o.modifyBillDialogCancel())},{default:(0,i.w5)((()=>[P])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])}var $={name:"Register",data(){return{dialogVisible:!1,user:{},isShowData:!0,SystemRole:[{value:"0",label:"管理员"},{value:"1",label:"病人"},{value:"2",label:"专家"}],gender:[{value:"男",label:"男"},{value:"女",label:"女"}]}},methods:{init(){this.setDialogVisible(!0)},setDialogVisible(e){this.dialogVisible=e,this.user={}},modifyBillDialogCancel(){this.setDialogVisible(!1),this.user={}},isShow(e){"0"===e?(this.isShowData=!1,this.user={},this.user.role=e):(this.isShowData=!0,this.user={},this.user.role=e)},commitData(){let e=/^([\u4e00-\u9fa5]{2,5})$/,t=/^.*(?=.{8,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/;if(""==this.user.role||void 0==this.user.role||null==this.user.role)return this.$alert("请选择用户类别","提示",{confirmButtonText:"确定",type:"warning"}),!1;if(""==this.user.username||void 0==this.user.username||null==this.user.username)return this.$alert("用户名不能为空","提示",{confirmButtonText:"确定",type:"warning"}),!1;if(this.user.username.length<6||this.user.username.length>20)return this.$alert("用户名的长度不能小于6或者大于20","提示",{confirmButtonText:"确定",type:"warning"}),!1;if(""==this.user.password||void 0==this.user.password||null==this.user.password)return this.$alert("密码不能为空","提示",{confirmButtonText:"确定",type:"warning"}),!1;if(!t.test(this.user.password))return this.$alert("密码最少8位，包括至少1个大写字母，1个小写字母，1个数字","提示",{confirmButtonText:"确定",type:"warning"}),!1;if(""==this.user.confirm||void 0==this.user.confirm||null==this.user.confirm)return this.$alert("确认密码不能为空","提示",{confirmButtonText:"确定",type:"warning"}),!1;if(this.user.password!=this.user.confirm)return this.$alert("两次密码输入不一致，请重新输入","提示",{confirmButtonText:"确定",type:"warning"}),!1;if(""==this.user.nickName||void 0==this.user.nickName||null==this.user.nickName)return this.$alert("姓名不能为空","提示",{confirmButtonText:"确定",type:"warning"}),!1;if(!e.test(this.user.nickName))return this.$alert("姓名的长度不能小于2个汉字或者大于5个汉字","提示",{confirmButtonText:"确定",type:"warning"}),!1;if("1"===this.user.role||"2"===this.user.role){let e=/^1[3456789]\d{9}$/;if(""==this.user.sex||void 0==this.user.sex||null==this.user.sex)return this.$alert("请选择性别","提示",{confirmButtonText:"确定",type:"warning"}),!1;if(""==this.user.age||void 0==this.user.age||null==this.user.age)return this.$alert("请填写您的年龄","提示",{confirmButtonText:"确定",type:"warning"}),!1;if(this.user.age<0||this.user.age>120)return this.$alert("请填写0到120岁的年龄","提示",{confirmButtonText:"确定",type:"warning"}),!1;if(""==this.user.tel||void 0==this.user.tel||null==this.user.tel)return this.$alert("请填写您的手机号码","提示",{confirmButtonText:"确定",type:"warning"}),!1;if(!e.test(this.user.tel))return this.$alert("请填写正确的手机号码","提示",{confirmButtonText:"确定",type:"warning"}),!1;if(""==this.user.address||void 0==this.user.address||null==this.user.address)return this.$alert("请填写您的家庭住址","提示",{confirmButtonText:"确定",type:"warning"}),!1}},register(){let e=this.commitData();if(0==e)return;let t="";t="0"===this.user.role?"/root/register":"1"===this.user.role?"/patient/register":"/specialist/register",p.Z.post(t,this.user).then((e=>{"0"===e.code?(this.$message({type:"success",message:"注册成功"}),this.setDialogVisible(!1)):this.$message({type:"error",message:e.msg})}))}}},U=l(3744);const D=(0,U.Z)($,[["render",C],["__scopeId","data-v-f6918204"]]);var S=D,M={name:"Login",components:{Register:S},data(){return{specialist:[],patient:[],form:{},rulesLogin:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],role:[{required:!0,message:"请选择用户类别",trigger:"blur"}]}}},created(){sessionStorage.removeItem("user"),this.get()},methods:{login(){this.$refs["formLogin"].validate((e=>{if(e){let e="",t="";"0"===this.form.role?(e="/root/login",t="/patient"):"1"===this.form.role?(e="/patient/login",t="/img"):(e="/specialist/login",t="/img"),p.Z.post(e,this.form).then((e=>{"0"===e.code?(this.$message({type:"success",message:"登陆成功"}),sessionStorage.setItem("user",JSON.stringify(e.data)),this.$router.push(t)):this.$message({type:"error",message:e.msg})}))}}))},get(){p.Z.get("/specialist/get",{}).then((e=>{this.specialist=e,sessionStorage.setItem("specialist",JSON.stringify(e))})),p.Z.get("/patient/get",{}).then((e=>{this.patient=e,sessionStorage.setItem("patient",JSON.stringify(e))}))},register(){this.$refs.register.init(),this.form={}}}};const L=(0,U.Z)(M,[["render",d]]);var B=L}}]);
//# sourceMappingURL=about.f4d4c84a.js.map