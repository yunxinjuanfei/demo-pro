import React from 'react'

import Ldvant1 from '@/assets/images/advantage_icon1.png'
import Ldvant2 from '@/assets/images/advantage_icon2.png'
import Ldvant3 from '@/assets/images/advantage_icon3.png'
import Ldvant4 from '@/assets/images/advantage_icon4.png'
import Apply1 from '@/assets/images/apply_1.png'
import ApplySex from '@/assets/images/apply_sex.png'
import ApplyAge from '@/assets/images/apply_age.png'
import ApplyMoney from '@/assets/images/apply_money.png'
import ApplyInsurance from '@/assets/images/apply_insurance.png'
import ApplyCard from '@/assets/images/apply_card.png'
import ApplyPhone from '@/assets/images/apply_phone.png'
import Loading from '@/assets/images/loading_1.gif'
import Apply2 from '@/assets/images/apply_2.png'
import YangZheng from '@/assets/images/yangzheng.png'
import Ewm from '@/assets/images/footer_ma.png'
import ApplyName from '@/assets/images/apply_name.png'
import FlowDiagram from '@/assets/images/flow_diagram.png'
import Product1 from '@/assets/images/product_1.png'
import Product2 from '@/assets/images/product_2.png'
import Product3 from '@/assets/images/product_3.png'
import Product4 from '@/assets/images/product_4.png'
// import Product5 from '@/assets/images/product_5.png'
// import Product6 from '@/assets/images/product_6.png'
// import Product7 from '@/assets/images/product_7.png'
// import Product8 from '@/assets/images/product_8.png'
// import Product9 from '@/assets/images/product_9.png'
import LogoBai from '@/assets/images/logo_bai.png'
import Question from '@/assets/images/question.png'
import Answer from '@/assets/images/answer.png'
import ImgOne from '@/assets/images/one.jpg'
import ImgTwo from '@/assets/images/two.jpg'
import ImgThree from '@/assets/images/three.jpg'
import ImgFour from '@/assets/images/four.jpg'
import TxtRight from '@/assets/images/right.png'

export default  class HomeIndex extends React.Component{
    constructor(props){
        super(props)
        this.wode = this.wode.bind(this);
        this.hand = this.hand.bind(this);
        this.tade = this.tade.bind(this);
        this.nide = this.nide.bind(this);
        this.mone = this.mone.bind(this);
        this.sex = this.sex.bind(this);
        //私有数据
        //设置初始值  
        this.state = {
            a: '',
            b: '',
            c: '',
            d: '',
            f: '',
            g: ''
        }
    };
    wode(e) {
        let value = e.target.value;
        this.setState({ a: value })
    };
    hand(e) {
        let value = e.target.value;
        this.setState({ b: value })

    };
    tade(e) {
        let value = e.target.value;
        this.setState({ c: value })

    };
    nide(e) {
        let value = e.target.value;
        this.setState({ d: value })
    };
    mone(e) {
        let value = e.target.value;
        this.setState({ f: value })

    };
    sex(e) {
        let value = e.target.value;
        this.setState({ g: value })
    };

    render(){
        return <div className="zsqy_index_middle">
        {/* banner  */}
        <div className="lcy_index_banner">
            <ul className="lcy_banner_bj">
                <li style=
                    {{ background: 'url(../src/assets/images/banner1_bj.jpg) no-repeat center center', backgroundSize: 'cover' }}></li>
                {/* <li style={{background:'#C2955D'}}></li> */}
            </ul>
            <ul className="DB_imgSet">
                <li>
                    <img className="DB_1_1" src={require('../../assets/images/banner1_1.png')} alt="" />
                    <img className="DB_1_2" src={require('../../assets/images/banner1_2.png')} alt="" />
                    <img className="DB_1_3" src={require('../../assets/images/banner1_ma.png')} alt="" />
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
                <div className="DB_prev"><img src={require('../../assets/images/banner_left.png')} alt="PREV" /></div>
            </div>
        </div>
        {/* 我们的优势 */}
        <div className="lcy_superiority">
            <div className="lcy_index_title">
                <p className="title">我们的优势</p>
                <p className="xian"></p>
            </div>
            <ul className="lcy_superiority_list clearfix">
                <li className="fl">
                    <img src={Ldvant1} alt="" />
                    <p>快速/高效</p>
                </li>
                <li className="fl">
                    <img src={Ldvant2} alt="" />
                    <p>便捷</p>
                </li>
                <li className="fl">
                    <img src={Ldvant3} alt="" />
                    <p>合规</p>
                </li>
                <li className="fl">
                    <img src={Ldvant4} alt="" />
                    <p>优质</p>
                </li>
            </ul>
        </div>
        {/* 借款申请 */}
        <div className="lcy_loan_application">
            <div className="lcy_apply_cont clearfix">
                <div className="fl lcy_calculate">
                    {/* <!-- one --> */}
                    <div className="lcy_calculate_mian">
                        <img src={Apply1} alt="" className="mian_title" />
                        <p className="calculate_botton immediately_calculate">立即计算</p>
                        {/* 填写信息 */}
                        <div className="personal_information clearfix" style={{display: 'none'}}>
                            <span className="fl lcy_kuang">
                                <img src={ApplySex} className="apply_icon" />
                                <select value={this.state.a} onChange={this.wode}>
                                    <option disabled selected hidden>性别</option>
                                    <option>男</option>
                                    <option>女</option>
                                </select>                                    
                            </span>
                            <span className="fl lcy_kuang">
                                <img src={ApplyAge} className="apply_icon" />
                                    <select value={this.state.b} onChange={this.hand}>
                                    <option disabled selected hidden>年龄</option>
                                    <option>21-30</option>
                                    <option>31-40</option>
                                </select>
                            </span>
                            <span className="fl lcy_kuang">
                                <img src={ApplyMoney} className="apply_icon" />
                                <select value={this.state.c} onChange={this.tade}>
                                    <option disabled selected hidden>是否有公积金</option>
                                    <option>有</option>
                                    <option>无</option>
                                </select>
                            </span>
                            <span className="fl lcy_kuang">
                                <img src={ApplyInsurance} className="apply_icon" />
                                <select value={this.state.d} onChange={this.nide}>
                                    <option disabled selected hidden>是否有社保</option>
                                    <option>有</option>
                                    <option>无</option>
                                </select>
                            </span>
                            <span className="fl lcy_kuang">
                                <img src={ApplyCard} className="apply_icon" />
                                <select value={this.state.f} onChange={this.mone}>
                                    <option disabled selected hidden>信用卡额度</option>
                                    <option>10万-20万</option>
                                    <option>20万-30万</option>
                                </select>
                            </span>
                            <span className="fl lcy_kuang">
                                <img src={ApplyPhone} className="apply_icon" />
                                <input type="tel" placeholder="请输入手机号" onkeyup="this.value=this.value.replace(/[^\d]/g,'');" />
                            </span>
                        </div>
                        {/* 转圈  */}
                        <div className="lcy_whirl" style={{display: 'none'}}><img src={Loading} /></div>
                        {/* 计算结果 */}
                        <div className="lcy_result" style={{ display: 'none' }}>
                            <p className="title">您的借款额度范围为</p>
                            <p className="money">30000~60000</p>
                            <p className="calculate_again">重新测算</p>
                        </div>
                    </div>   
                </div>
                <div className="fr lcy_apply">
                    <img src={Apply2} className="lcy_speediness" />
                    <div className="lcy_proposer">
                        <div className="proposer_text1 clearfix">
                            <img src={ApplyName} className="apply_icon" />
                            <input type="text" placeholder="请输入您的姓名" className="fl" />
                            <select className="fl" value={this.state.g} onChange={this.sex}>
                                <option>先生</option>
                                <option>女士</option>
                            </select>
                        </div>
                        <div className="proposer_text1">
                            <img src={ApplyPhone} className="apply_icon" />
                            <input type="tel" placeholder="请输入手机号" onkeyup="this.value=this.value.replace(/[^\d]/g,'');" style={{border:'none'}} />                              
                        </div>
                        <div className="clearfix lcy_yanzheng">
                            <div className="fl proposer_text1 security_code clearfix">
                                <input type="text" placeholder="验证码" className="fl" />
                                <img src={YangZheng} alt="" className="lcy_yanzheng fr" />
                            </div>
                            <div className="fr proposer_text1 city">
                                <input type="text" placeholder="输入城市" style={{border:'none'}} />
                            </div>
                        </div>
                        <div className="lcy_error"><p>错误：</p></div>
                        <div className="lcy_add_up">
                            <p>累计申请人数<span>766854</span></p>
                            <p>累计放款金额<span>766854元</span></p>
                        </div>
                        <p className="calculate_botton apply_immediately">立即申请</p>
                    </div>
                    {/* 下载app */}
                    <div className="lcy_apply_succeed" style={{display:'none'}}>
                        <p className="lcy_succeed_title">申请成功！</p>
                        <p className="lcy_call_tel">请您注意手机来电，稍后我们业务人员会联系您。</p>
                            <img src={Ewm} alt="" className="lcy_download" />
                            <p className="lcy_progress">下载APP，查看借款进度</p>
                    </div>
                </div>
            </div>
        </div>                                                                  
        {/* 申请流程 */}
        <div className="lcy_flow_diagram">
            <div className="lcy_little_title">
                <i></i>
                <span>申请流程</span>
            </div>
            <img src={FlowDiagram} alt="" />
        </div>
        {/* 产品介绍 */}
        <div className="lcy_presentation">
            <div className="lcy_index_title">
                <p className="title">产品介绍</p>
                <p className="xian"></p>
            </div>
                <div className="lcy_product_list" style={{ display: 'none' }}>
                <a href="#" className="slide">
                    <div className="lcy_slide_cont">
                        <p className="type">在线申请模式</p>
                        <img src={Product1} alt="" className="product" />
                        <p className="explain">APP专属，一触即发，轻松申请。</p>
                        <img src={LogoBai} alt="" className="logo_bai" />
                    </div>                            
                </a>
                <a href="#" className="slide">
                    <div className="lcy_slide_cont">
                        <p className="type">精英类</p>
                        <img src={Product2} alt="" className="product" />
                        <p className="explain">适用于拥有稳定工作及收入的中高端授薪人群。</p>
                        <img src={LogoBai} alt="" className="logo_bai" />
                    </div>                            
                </a>
                <a href="#" className="slide">
                    <div className="lcy_slide_cont">
                        <p className="type">惠农类</p>
                        <img src={Product3} alt="" className="product"/>
                        <p className="explain">适用于村委会成员、农村合作社核心成员和从事稳定农业生产的农户。</p>
                        <img src={LogoBai} alt="" className="logo_bai" />
                    </div>                            
                </a>
                <a href="#" className="slide">
                    <div className="lcy_slide_cont">
                        <p className="type">助业类</p>
                        <img src={Product4} alt="" className="product"/>
                        <p className="explain">适用于一般自雇类人群。</p>
                        <img src={LogoBai} alt="" className="logo_bai" />
                    </div>                            
                </a>
                {/* <a href="#" className="slide">
                    <div className="lcy_slide_cont">
                        <p className="type">慧丽类</p>
                        <img src={Product5} alt="" className="product" />
                        <p className="explain">适用于拥有稳定工作及收入的中高端女性授薪人群。</p>
                        <img src={LogoBai} alt="" className="logo_bai" />
                    </div>                            
                </a>
                <a href="#" className="slide">
                    <div className="lcy_slide_cont">
                        <p className="type">工薪类</p>
                        <img src={Product6} alt="" className="product"/>
                        <p className="explain">适用于拥有稳定工作及固定收入的普通授薪人群。</p>
                        <img src={LogoBai} alt="" className="logo_bai" />
                    </div>                            
                </a>
                <a href="#" className="slide">
                    <div className="lcy_slide_cont">
                        <p className="type">优技类</p>
                        <img src={Product7} alt="" className="product"/>
                        <p className="explain">适用于拥有足疗保健高级技师等级证书且已实现就业的授薪类人群。</p>
                        <img src={LogoBai} alt="" className="logo_bai" />
                    </div>                            
                </a>
                <a href="#" className="slide">
                    <div className="lcy_slide_cont">
                        <p className="type">5060类</p>
                        <img src={Product8} alt="" className="product"/>
                        <p className="explain">适用于所在城市拥有房产的退休人群。</p>
                        <img src={LogoBai} alt="" className="logo_bai" />
                    </div>                            
                </a>
                <a href="#" className="slide">
                    <div className="lcy_slide_cont">
                        <p className="type">保单类</p>
                        <img src={Product9} alt="" className="product"/>
                        <p className="explain">适用于具有本人投保的保单(寿险)自然人。</p>
                        <img src={LogoBai} alt="" className="logo_bai" />
                    </div>                            
                </a> */}
            </div>
        </div>
        {/* 新闻中心 */}
        <div className="lcy_new_center">
            <div className="lcy_index_title">
                <p className="title">新闻中心</p>
                <p className="xian"></p>
            </div>
            <div className="lcy_new_show clearfix">
                {/* ---轮播--- */}
                <div className="fl lcy_new_left">
                    <div className="lcy_new_carousel">
                        <a className="slide" href="#">
                            <img src={ImgOne}/>
                            <p className="lcy_newintroduce">新闻中心111111111ddddd新闻中心111111111ddddd</p>
                        </a>
                        {/* <a className="slide" href="#">
                            <img src={ImgTwo}/>
                            <p className="lcy_newintroduce">新闻中心22222222222</p>
                        </a>
                        <a className="slide" href="#">
                            <img src={ImgThree}/>
                            <p className="lcy_newintroduce">新闻中心3333333333333</p>
                        </a>
                        <a className="slide" href="#">
                            <img src={ImgFour}/>
                            <p className="lcy_newintroduce">新闻中心4444444444444d</p>
                        </a>         */}
                    </div>
                </div>
                {/* ---切换--- */}
                <div className="fr lcy_new_right">
                    <div className="lcy_new_type clearfix">
                        <ul className="clearfix fl">
                            <li className="on">公司动态</li>
                            <li>行业信息</li>
                            <li>监管政策</li>
                            <li>最新活动</li>
                        </ul>
                        <a href="#" className="fl">更多》</a>
                    </div>
                    <div className="lcy_new_kuang">
                        <div className="lcy_new_list" style={{display: 'block'}}>
                            <ul>
                                <li className="clearfix">
                                    <p>【司聊】手机里全是钱，万一丢了怎么办？111111111111</p>
                                    <span>2018-10-16</span>
                                    <img src={TxtRight} alt="" className="right"/>
                                </li>
                                <li className="clearfix">
                                    <p>【司聊】手机里全是钱，万一丢了怎么办？111111111111</p>
                                    <span>2018-10-16</span>
                                    <img src={TxtRight} alt="" className="right"/>
                                </li>
                                <li className="clearfix">
                                    <p>【司聊】手机里全是钱，万一丢了怎么办？111111111111</p>
                                    <span>2018-10-16</span>
                                    <img src={TxtRight} alt="" className="right"/>
                                </li>
                                <li className="clearfix">
                                    <p>【司聊】手机里全是钱，万一丢了怎么办？111111111111</p>
                                    <span>2018-10-16</span>
                                    <img src={TxtRight} alt="" className="right"/>
                                </li>
                                <li className="clearfix">
                                    <p>【司聊】手机里全是钱，万一丢了怎么办？111111111111</p>
                                    <span>2018-10-16</span>
                                    <img src={TxtRight} alt="" className="right"/>
                                </li>
                            </ul>
                        </div>
                        <div className="lcy_new_list">
                            <ul>
                                <li className="clearfix">
                                    <p>【司聊】手机里全是钱，万一丢了怎么办？111111111111</p>
                                    <span>2018-10-16</span>
                                    <img src={TxtRight} alt="" className="right"/>
                                </li>
                                <li className="clearfix">
                                    <p>【司聊】手机里全是钱，万一丢了怎么办？111111111111</p>
                                    <span>2018-10-16</span>
                                    <img src={TxtRight} alt="" className="right"/>
                                </li>
                                <li className="clearfix">
                                    <p>【司聊】手机里全是钱，万一丢了怎么办？111111111111</p>
                                    <span>2018-10-16</span>
                                    <img src={TxtRight} alt="" className="right"/>
                                </li>
                                <li className="clearfix">
                                    <p>【司聊】手机里全是钱，万一丢了怎么办？111111111111</p>
                                    <span>2018-10-16</span>
                                    <img src={TxtRight} alt="" className="right"/>
                                </li>
                                <li className="clearfix">
                                    <p>【司聊】手机里全是钱，万一丢了怎么办？111111111111</p>
                                    <span>2018-10-16</span>
                                    <img src={TxtRight} alt="" className="right"/>
                                </li>
                            </ul>
                        </div>
                        <div className="lcy_new_list">
                            <ul>
                                <li className="clearfix">
                                    <p>【司聊】手机里全是钱，万一丢了怎么办？111111111111</p>
                                    <span>2018-10-16</span>
                                    <img src={TxtRight} alt="" className="right"/>
                                </li>
                                <li className="clearfix">
                                    <p>【司聊】手机里全是钱，万一丢了怎么办？111111111111</p>
                                    <span>2018-10-16</span>
                                    <img src={TxtRight} alt="" className="right"/>
                                </li>
                                <li className="clearfix">
                                    <p>【司聊】手机里全是钱，万一丢了怎么办？111111111111</p>
                                    <span>2018-10-16</span>
                                    <img src={TxtRight} alt="" className="right"/>
                                </li>
                                <li className="clearfix">
                                    <p>【司聊】手机里全是钱，万一丢了怎么办？111111111111</p>
                                    <span>2018-10-16</span>
                                    <img src={TxtRight} alt="" className="right"/>
                                </li>
                                <li className="clearfix">
                                    <p>【司聊】手机里全是钱，万一丢了怎么办？111111111111</p>
                                    <span>2018-10-16</span>
                                    <img src={TxtRight} alt="" className="right"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* 常见问题 */}
        <div className="lcy_faq">
            <div className="lcy_index_title">
                <p className="title">常见问题</p>
                <p className="xian"></p>
            </div>
            <div className="lcy_example">
                <ul className="clearfix">
                    <li>
                        <p className="lcy_question clearfix">
                            <img src={Question} alt="" className="icon fl"/>
                            <span className="lcy_question_cont fr">什么是网络借贷？</span>
                        </p>
                        <p className="lcy_answer clearfix">
                            <img src={Answer} alt="" className="icon fl"/>
                            <span className="lcy_answer_cont fr">网络借贷是指个体和个体之间通过互联网平台实现的直接借贷。个体包含自然人、法人及其他组织。</span>
                        </p>
                    </li>
                    <li>
                        <p className="lcy_question clearfix">
                            <img src={Question} alt="" className="icon fl"/>
                            <span className="lcy_question_cont fr">什么是网络借贷信息中介机构？</span>
                        </p>
                        <p className="lcy_answer clearfix">
                            <img src={Answer} alt="" className="icon fl"/>
                            <span className="lcy_answer_cont fr">网络借贷信息中介机构是指依法设立，专门从事网络借贷信息中介业务活动的金融信息中介公司。该类机构以互联网为主要渠道，为借款人与出借人（即贷款人）实现直接借贷提供信息搜集、信息公布、资信评估、信息交互、借贷撮合等服务。</span>
                        </p>
                    </li>
                    <li style={{borderBottom: 'none'}}>
                        <p className="lcy_question clearfix">
                            <img src={Question} alt="" className="icon fl" />
                            <span className="lcy_question_cont fr">申请借款的利息是怎么计算的？是否有其它手续费？</span>
                        </p>
                        <p className="lcy_answer clearfix">
                            <img src={Answer} alt="" className="icon fl"/>
                            <span className="lcy_answer_cont fr">中盛普惠为有资金需求的客户提供借贷信息咨询服务，不直接提供借款服务，因此不收取客户借款利息；基于中盛普惠为客户提供的信息咨询服务，当客户借款成功后，需根据服务协议约定支付一定金额的服务费；如借款不成功，客户无需支付服务费。</span>
                        </p>
                    </li>
                    <li style={{ borderBottom: 'none' }}>
                        <p className="lcy_question clearfix">
                            <img src={Question} alt="" className="icon fl"/>
                            <span className="lcy_question_cont fr">实现资金存管对用户有哪些好处及平台的变化是什么？</span>
                        </p>
                        <p className="lcy_answer clearfix">
                            <img src={Answer} alt="" className="icon fl"/>
                            <span className="lcy_answer_cont fr">首先，资金存管实现了网络借贷信息中介平台自有资金和用户资金的分离，避免网络借贷信息中介平台自有资金与用户资金发生混同，当网络借贷信息中介平台自身发生负债、破产时，用户资金不会受到网络借贷信息中介平台债权人的追索。其次，资金存管是由银行业金融机构根据出借人、借款人的指令和合同约定对用户资金的使用、划付进行管理、监督，且由银行对客户资金交易进行记录，能够尽可能地避免网络借贷信息中介平台非法动用出借人、借款人的资金，保障出借人、借款人的资金安全。</span>
                            </p>
                        </li>
                    </ul>
                    <a href="faq1.html" className="lcy_see_more">查看更多》</a>
                </div>
        </div>                               
        {/* 合作伙伴 */}
        <div className="lcy_partner">
            <div className="lcy_partner_list clearfix">
                <a href="#" className="lcy_irb_logo"></a>
                <a href="#" className="lcy_brjf_logo"></a>
                <a href="#" className="lcy_bts_logo"></a>
                <a href="#" className="lcy_mxkj_logo" style={{marginRight: '0'}}></a>
            </div>
        </div>
                                
    </div>
    }
}