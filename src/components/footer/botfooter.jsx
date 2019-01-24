import React from 'react'


//官网底部导航区
export default class BotFooter extends React.Component {
    constructor() {
        super()
        //私有数据
        this.state = {
        }
    }
    render() {
        return <div className="zsqy_index_footer">
            <div className="index_footer_top">
                <div className="interlinkage clearfix">
                     <div className="fl clearfix">
                        <div className="footer_list fl">
                            <a href="#" className="classNameify">产品中心</a>
                            <a href="#">产品介绍</a>
                            <a href="#">常见问题</a>
                        </div>
                        <div className="footer_list fl">
                            <a href="#" className="classNameify">新闻中心</a>
                            <a href="#">公司动态</a>
                            <a href="#">行业信息</a>
                            <a href="#">监管政策</a>
                            <a href="#">最新活动</a>
                        </div>
                        <div className="footer_list fl">
                            <a href="#" className="classNameify">移动端APP</a>
                            <a href="#">客户端下载</a>
                        </div>
                        <div className="footer_list fl footer_list2">
                            <a href="#" className="classNameify"><span>联系我们</span></a>
                            <a href="#"><span style={{width:'330px'}}>地 址：中盛普惠（北京）信息咨询服务有限公司</span></a>
                            <a href="#"><span>邮政编码：100000</span><span>传真：010-50981384</span> </a>
                            <a href="#"><span>电 话：010-50981384</span><span>手机：010-50981384</span></a>
                            <a href="#"><span style={{width:'330px'}}>邮 箱：zsph@zhongshengpuhui.com</span></a>
                        </div>
                    </div>
                    <div className="fr footer_ma">
                        <p>扫描二维码下载APP</p>
                        <img src={require('../../assets/images/footer_ma.png')} alt="" />
                    </div>
                </div>
            </div> 
            <div className="index_footer_bottom">Copyright ©中盛普惠,Inc.All rights reserved.  网站地图  京ICP备17060346号-1</div>
        </div>
    }
}
