import React from 'react'

//官网头部导航区
export default class TopBanner extends React.Component {
    constructor() {
        super()
        //私有数据
        this.state = {
        }
    }
    render() {
        return <div className="lcy_index_banner">
            <ul className="lcy_banner_bj">
                <li style=
                    {{ background:'url(../src/assets/images/banner1_bj.jpg) no-repeat center center',backgroundSize:'cover'}}></li>
                {/* <li style={{background:'#C2955D'}}></li> */}
            </ul>
            <ul className="DB_imgSet">
                <li>
                    <img className="DB_1_1" src={require('../../assets/images/banner1_1.png')} alt="" />
                    <img className="DB_1_2" src={require('../../assets/images/banner1_2.png')} alt="" />
                    <img className="DB_1_3" src={require('../../assets/images/banner1_ma.png')}  alt="" />
                </li>
                {/* <li>
                    <div className="lcy_download_app">
                        <h4>普惠APP</h4>
                        <p className="youshi">超低门槛、操作便捷、随时随地一触即发！</p>
                        <img src={require('../../assets/images/downloadapp/down_button.png')} alt="" className="lcy_download_botton" />
                        <div className="ld_app_down_entrance" style={{position: 'absolute',top: '70px',left:0,display: 'block'}}>
                            <div className="down_icon_erwm">
                                <p>推荐您到微信公众号或下载APP继续申请借款服务 <br />申请额度更高，撮合效率更快哟！</p>
                                <div className="ldDownloadApp_erw_img">
                                    <div className="erw_img">
                                        <img src={require('../../assets/images/downloadapp/erw01.png')} />
                                        <p>微信公众号</p>
                                        <i></i>
                                    </div>
                                    <div className="erw_img">
                                        <img src={require('../../assets/images/erw02.png')} />
                                        <p>下载APP</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="{DB_2_1" src={require('../../assets/images/banner2_1.png')} alt="1" />
                    <img className="DB_2_2" src={require('../../assets/images/banner2_2.png')}  alt="2" />
                    <img className="DB_2_3" src={require('../../assets/images/banner2_3.png')} alt="3" />
                </li> */}
            </ul>
            <div className="DB_menuWrap">
                <ul className="DB_menuSet">
                    <li><img src={require('../../assets/images/btn_on.png')} alt="" /></li>
                    <li><img src={require('../../assets/images/btn_off.png')} alt="" /></li>  
                </ul>
                <div className="DB_next"><img src={require('../../assets/images/banner_right.png')} alt="NEXT" /></div>
                <div className="DB_prev"><img src={require('../../assets/images/banner_left.png')}  alt="PREV" /></div>
            </div> 
        </div>
    }
}
