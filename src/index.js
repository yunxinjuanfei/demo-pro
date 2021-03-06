//1.导入包
import React from 'react'
import ReactDOM from 'react-dom'


//导入子组件
import TopHeader from '@/components/header/topheader'
import BotFooter from '@/components/footer/botfooter'
import HomeIndex from '@/route/home/home'

//引用样式
import '@/zsqy_pc_public.css'
import '@/css/zsqy_pc_style.css'


//3.调用render函数渲染,jsx比XML比HTML严格多了
ReactDOM.render(<div className="zsqy_pc_conent">
    <TopHeader></TopHeader> 
    <HomeIndex></HomeIndex>
    <BotFooter></BotFooter>
</div>, document.getElementById('app'))