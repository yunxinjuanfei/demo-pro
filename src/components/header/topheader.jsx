import React from 'react'

//logo
import Logo from '@/assets/images/logo.png'
import Logo1 from '@/assets/images/logo1.png'

//官网头部导航区
export default class TopHeader extends React.Component {
    constructor() {
        super()
        this.state = {
            top: false 
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this))
    }
    componentDidUpdate() {
        window.addEventListener('scroll', this.handleScroll.bind(this))
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this))
    }
    //导航吸顶
    handleScroll(ev) {
        let HT = ev.srcElement;
        var top = HT.documentElement.scrollTop || HT.body.scrollTop;
        console.log(top, this.state)
        if (this.state && ((!!top) !== this.state.top)) {
            this.setState({
                top: (!!top)
            })
        }
    }

    render() {
        return <div className={(!this.state.top) ? "zsqy_index_header" : "zsqy_index_header header_bj"}> 
            <div className="header_content1 clearfix">
                <div className="logo fl">
                    <img src={(!this.state.top) ? Logo1 : Logo} alt="" />
                </div>
                <div className={(!this.state.top) ? "header_nav fr" : "header_nav item fr"}>
                    <a href="#" className={(this.state.top) ? "on" : ''}>首页</a>
                    <a href="product.html">产品中心</a>
                    <a href="news.html">新闻中心</a>
                    <a href="download_app.html">APP下载</a>
                    <a href="aboutUs.html">关于我们</a>
                </div>
            </div>
        </div>
    }

}
