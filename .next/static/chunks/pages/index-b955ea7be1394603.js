(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(4369)}])},4369:function(e,t,i){"use strict";i.r(t);var o=i(5893),l=i(1857),n=i.n(l),a=i(7294),r=i(959),s=i(82),p=i(749),d=i(7547),c=i(8545),b=i(888);let{Search:x}=r.Z;async function w(e,t,i){let o={question:e};t&&i&&(o={...o,parentMessageId:t,conversationId:i});let l=window.location.search.split("=");l.length>1&&l[1].length>0&&(o.apikey=l[1]);let n=await fetch("http://".concat(window.location.host,"/api/chatgpt?").concat(new URLSearchParams(o).toString()));return await n.json()}t.default=function(e){let{}=e,[t,i]=(0,a.useState)([]),[l,r]=(0,a.useState)(""),[f,h]=(0,a.useState)({});return(0,a.useEffect)(()=>{t.length>0&&window.scrollTo(0,1e8)},[t]),(0,o.jsxs)("div",{className:"jsx-c58eba4f1dab15b4",children:[(0,o.jsx)(s.ZP,{style:{paddingBottom:70},itemLayout:"horizontal",locale:{emptyText:"基于nextjs的chatGPT"},dataSource:t,renderItem:e=>(0,o.jsx)(s.ZP.Item,{style:1===e.type?{background:"#f7f7f8"}:{background:"#fff"},children:(0,o.jsx)(s.ZP.Item.Meta,{avatar:1===e.type?(0,o.jsx)(p.C,{size:"small",style:{backgroundColor:"#fde3cf",color:"#f56a00"},children:"AI"}):(0,o.jsx)(p.C,{size:"small",style:{backgroundColor:"#87d068"},icon:(0,o.jsx)(d.Z,{})}),title:e.title,description:e.content})})}),(0,o.jsx)(x,{placeholder:"",allowClear:!0,enterButton:(0,o.jsx)(c.Z,{}),size:"large",className:"questionInput",onChange:e=>{r(e.target.value)},value:l,onSearch:async e=>{if(t.length>0&&t[t.length-1].loading||""===e)return;t.push({title:"you",type:0,content:e}),t.push({title:"chatGPT",type:1,loading:!0,content:(0,o.jsx)(b.Z,{})}),r(""),i([...t]);let{parentMessageId:l,conversationId:n}=f,a=await w(e,l,n);t[t.length-1].content=a.text,t[t.length-1].loading=!1,i([...t]),!0!==a.error&&h(a)}}),(0,o.jsx)(n(),{id:"c58eba4f1dab15b4",children:'body,div,p,ul,li,label,i,dt,dd,dl,ol,form,input,select,section,button,h1,h2,h3,h4,h5,h6,option{margin:0;padding:0}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;outline:none}li{list-style:none}html,body{width:100%;height:100%;background-color:#f6f6f6;font:14px "微软雅黑",Helvetica,Arial,sans-serif}a{color:#00b7ff}a.reset{text-decoration:none;color:#333}a.reset:hover,a.reset:visited,a.reset:link,a.reset:active{color:#333}.btn:focus{outline:none}.float-right{float:right}.float-left{float:left}.text-right{text-align:right}.text-left{text-align:left}.text-center{text-align:center}.p-title{font-size:26px;color:#000;line-height:33px;margin-bottom:20px}.p-v-title{font-size:16px;color:#333;line-height:22px;margin-bottom:20px}.p-content{font-size:13px;color:#333;line-height:18px}.h-tab{font-size:16px;color:#7f7f7f;padding:0 5px 10px;cursor:pointer;margin:0 30px;width:90px;text-align:center}.h-tab.active{color:#333;border-bottom:2px solid#555}.d-iblock{display:inline-block}.d-block{display:block}.hide-imp{display:none!important}.p-relative{position:relative}.p-absolute{position:absolute}.text-ellipsis{display:inline-block;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;word-break:break-all}.text-ellipsis-0{overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;word-break:break-all;-webkit-line-clamp:0;-webkit-box-orient:vertical}.text-ellipsis-1{overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;word-break:break-all;-webkit-line-clamp:1;-webkit-box-orient:vertical}.text-ellipsis-2{overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;word-break:break-all;-webkit-line-clamp:2;-webkit-box-orient:vertical}.text-ellipsis-3{overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;word-break:break-all;-webkit-line-clamp:3;-webkit-box-orient:vertical}.text-ellipsis-4{overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;word-break:break-all;-webkit-line-clamp:4;-webkit-box-orient:vertical}.text-ellipsis-5{overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;word-break:break-all;-webkit-line-clamp:5;-webkit-box-orient:vertical}.text-ellipsis-6{overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;word-break:break-all;-webkit-line-clamp:6;-webkit-box-orient:vertical}.text-ellipsis-7{overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;word-break:break-all;-webkit-line-clamp:7;-webkit-box-orient:vertical}.item-cover-common{display:inline-block;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;background-repeat:no-repeat;background-position:center center}.news-item{padding:20px 20px;background-color:#efefef;margin-bottom:10px;height:180px;text-align:left}.news-item .item-cover{width:220px;height:140px;float:left;display:inline-block;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;background-repeat:no-repeat;background-position:center center}.news-item .item-main{height:140px;width:-webkit-calc(100% - 220px);width:-moz-calc(100% - 220px);width:calc(100% - 220px);float:left;padding-left:15px;display:inline-block}.news-item .item-main .item-top{font-size:16px;color:#333;line-height:22px;margin-bottom:20px;display:inline-block;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;word-break:break-all;width:100%}.news-item .item-main .item-middle{padding-top:15px;display:inline-block;height:70px;font-size:13px;color:#333;line-height:18px;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;word-break:break-all;-webkit-line-clamp:3;-webkit-box-orient:vertical}.news-item .item-main .item-bottom{padding-top:10px;display:inline-block;font-size:13px;color:#333;line-height:18px}.joinus-item{padding:20px 20px;background-color:#efefef;margin-bottom:35px;width:350px;height:180px;display:inline-block;text-align:left}.joinus-item:nth-of-type(3n-1){float:left;margin-left:35px}.joinus-item:nth-of-type(3n-2){float:left}.joinus-item:nth-of-type(3n){float:right}.joinus-item .item-top{width:310px;font-size:16px;color:#333;line-height:22px;margin-bottom:20px;display:inline-block;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;word-break:break-all}.joinus-item .item-middle{padding-top:20px;height:56px;font-size:13px;color:#333;line-height:18px;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;word-break:break-all;-webkit-line-clamp:3;-webkit-box-orient:vertical}.joinus-item .item-bottom{padding-top:30px;display:inline-block;font-size:13px;color:#333;line-height:18px}.joinus-item .item-bottom span:nth-of-type(1){padding-right:20px}.banner{width:100%}.banner img{width:100%}.detail-title{padding-top:40px}.publish-time{padding:20px 0 25px}.block-line{margin-bottom:40px;width:100%;height:0;border-top:1px solid#ccc}body{background:#fff}.questionInput{position:fixed;bottom:20px;right:20px;left:20px;width:auto;-webkit-box-shadow:0 0 15px#ccc;-moz-box-shadow:0 0 15px#ccc;box-shadow:0 0 15px#ccc}'})]})}}},function(e){e.O(0,[774,253,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);