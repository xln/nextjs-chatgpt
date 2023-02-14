import React,{useState,useEffect} from "react";
import {Avatar,List,Input} from "antd";
import { MessageOutlined,UserOutlined,LoadingOutlined } from '@ant-design/icons';
const { Search } = Input;
async function talk(question,parentMessageId,conversationId){
    let payload = {question};
    if(parentMessageId&&conversationId){
        payload = {...payload,parentMessageId,conversationId}
    }
    const res = await fetch(`http://${window.location.host}/api/chatgpt?${new URLSearchParams(payload).toString()}`);
    return await res.json();
}
function HomePage({}) {
    const [recordList, setRecordList] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [resData,setResData] = useState({});
    useEffect(() => {
      if(recordList.length>0){
        window.scrollTo(0,100000000);
      }
    }, [recordList])
    
    return <div>
        <List
            style={{paddingBottom:70}}
            itemLayout="horizontal"
            locale={{emptyText:'基于nextjs的chatGPT'}}
            dataSource={recordList}
            renderItem={(item) => (
            <List.Item style={item.type===1?{background:'#f7f7f8'}:{background:'#fff'}}>
                <List.Item.Meta
                avatar={item.type===1?<Avatar size="small" style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>AI</Avatar>:<Avatar size="small" style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />}
                title={item.title}
                description={item.content}
                />
            </List.Item>
            )}
        />
        <Search
            placeholder=""
            allowClear
            enterButton={<MessageOutlined />}
            size="large"
            className="questionInput"
            onChange={(e)=>{setInputValue(e.target.value)}}
            value={inputValue}
            onSearch={async(value)=>{
                if(recordList.length>0&&recordList[recordList.length-1].loading){
                    return;
                }
                recordList.push({
                    title:'you',
                    type:0,
                    content:value
                })
                recordList.push({
                    title:'chatGPT',
                    type:1,
                    loading:true,
                    content:<LoadingOutlined />
                })
                setInputValue('');
                setRecordList([...recordList]);
                const {parentMessageId,conversationId} = resData;
                const data = await talk(value,parentMessageId,conversationId);
                recordList[recordList.length-1].content = data.text;
                recordList[recordList.length-1].loading = false;
                setRecordList([...recordList]);
                if(data.error!==true){
                    setResData(data);
                }
            }}
        />
        <style global jsx>{`
        body,div,p,ul,li,label,i,dt,dd,dl,ol,form,input,select,section,button,h1,h2,h3,h4,h5,h6,option{margin:0;padding:0}*{box-sizing:border-box;outline:none}li{list-style:none}html,body{width:100%;height:100%;background-color:#f6f6f6;font:14px "微软雅黑",Helvetica,Arial,sans-serif}a{color:#00B7FF}a.reset{text-decoration:none;color:#333}a.reset:hover,a.reset:visited,a.reset:link,a.reset:active{color:#333}.btn:focus{outline:none}.float-right{float:right}.float-left{float:left}.text-right{text-align:right}.text-left{text-align:left}.text-center{text-align:center}.p-title{font-size:26px;color:#000;line-height:33px;margin-bottom:20px}.p-v-title{font-size:16px;color:#333;line-height:22px;margin-bottom:20px}.p-content{font-size:13px;color:#333;line-height:18px}.h-tab{font-size:16px;color:#7f7f7f;padding:0 5px 10px;cursor:pointer;margin:0 30px;width:90px;text-align:center}.h-tab.active{color:#333;border-bottom:2px solid #555}.d-iblock{display:inline-block}.d-block{display:block}.hide-imp{display:none!important}.p-relative{position:relative}.p-absolute{position:absolute}.text-ellipsis{display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-break:break-all}.text-ellipsis-0{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;word-break:break-all;-webkit-line-clamp:0;-webkit-box-orient:vertical}.text-ellipsis-1{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;word-break:break-all;-webkit-line-clamp:1;-webkit-box-orient:vertical}.text-ellipsis-2{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;word-break:break-all;-webkit-line-clamp:2;-webkit-box-orient:vertical}.text-ellipsis-3{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;word-break:break-all;-webkit-line-clamp:3;-webkit-box-orient:vertical}.text-ellipsis-4{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;word-break:break-all;-webkit-line-clamp:4;-webkit-box-orient:vertical}.text-ellipsis-5{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;word-break:break-all;-webkit-line-clamp:5;-webkit-box-orient:vertical}.text-ellipsis-6{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;word-break:break-all;-webkit-line-clamp:6;-webkit-box-orient:vertical}.text-ellipsis-7{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;word-break:break-all;-webkit-line-clamp:7;-webkit-box-orient:vertical}.item-cover-common{display:inline-block;background-size:cover;background-repeat:no-repeat;background-position:center center}.news-item{padding:20px 20px;background-color:#efefef;margin-bottom:10px;height:180px;text-align:left}.news-item .item-cover{width:220px;height:140px;float:left;display:inline-block;background-size:cover;background-repeat:no-repeat;background-position:center center}.news-item .item-main{height:140px;width:calc(100% - 220px);float:left;padding-left:15px;display:inline-block}.news-item .item-main .item-top{font-size:16px;color:#333;line-height:22px;margin-bottom:20px;display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-break:break-all;width:100%}.news-item .item-main .item-middle{padding-top:15px;display:inline-block;height:70px;font-size:13px;color:#333;line-height:18px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;word-break:break-all;-webkit-line-clamp:3;-webkit-box-orient:vertical}.news-item .item-main .item-bottom{padding-top:10px;display:inline-block;font-size:13px;color:#333;line-height:18px}.joinus-item{padding:20px 20px;background-color:#efefef;margin-bottom:35px;width:350px;height:180px;display:inline-block;text-align:left}.joinus-item:nth-of-type(3n-1){float:left;margin-left:35px}.joinus-item:nth-of-type(3n-2){float:left}.joinus-item:nth-of-type(3n){float:right}.joinus-item .item-top{width:310px;font-size:16px;color:#333;line-height:22px;margin-bottom:20px;display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-break:break-all}.joinus-item .item-middle{padding-top:20px;height:56px;font-size:13px;color:#333;line-height:18px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;word-break:break-all;-webkit-line-clamp:3;-webkit-box-orient:vertical}.joinus-item .item-bottom{padding-top:30px;display:inline-block;font-size:13px;color:#333;line-height:18px}.joinus-item .item-bottom span:nth-of-type(1){padding-right:20px}.banner{width:100%}.banner img{width:100%}.detail-title{padding-top:40px}.publish-time{padding:20px 0 25px}.block-line{margin-bottom:40px;width:100%;height:0;border-top:1px solid #ccc}
        body{background:#fff}
        .questionInput{
            position: fixed;
            bottom: 20px;
            right: 20px;
            left: 20px;
            width: auto;
            box-shadow: 0 0 15px #ccc;
        }
      `}</style>
    </div>
}
  
export default HomePage