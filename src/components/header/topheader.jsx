import React from 'react'

//logo
import Logo from '@/assets/images/logo1.png'


//官网头部导航区
export default class TopHeader extends React.Component {
    constructor() {
        super()
        this.state = {
            index:'首页',
            product:'产品中心',
            news:'新闻中心',
            download:'移动端APP',
            about:'关于我们'
        }
        this.handleScroll = this.handleScroll.bind(this)
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll(e) {
        console.log('浏览器滚动事件');
    }

    render() {
        return <div className="zsqy_index_header"> 
            <div className="header_content1 clearfix">
                <div className="logo fl">
                    <img src={Logo} alt="" />
                </div>
                <div className="header_nav  fr">
                    <a href="#">{this.state.index}</a>
                    <a href="product.html">{this.state.product}</a>
                    <a href="news.html">{this.state.news}</a>
                    <a href="download_app.html">{this.state.download}</a>
                    <a href="aboutUs.html">{this.state.about}</a>
                </div>
            </div>
        </div>
    }

}
