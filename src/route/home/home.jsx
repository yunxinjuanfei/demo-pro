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
                                <img src={{ ApplySex}} className="apply_icon" />
                                <select value={this.state.a} onChange={this.wode}>
                                    <option disabled selected hidden>性别</option>
                                    <option>男</option>
                                    <option>女</option>
                                </select>                                    
                            </span>
                            <span className="fl lcy_kuang">
                                <img src={{ ApplyAge }} className="apply_icon" />
                                    <select value={this.state.b} onChange={this.hand}>
                                    <option disabled selected hidden>年龄</option>
                                    <option>21-30</option>
                                    <option>31-40</option>
                                </select>
                            </span>
                            <span className="fl lcy_kuang">
                                <img src={{ ApplyMoney}} className="apply_icon" />
                                <select value={this.state.c} onChange={this.tade}>
                                    <option disabled selected hidden>是否有公积金</option>
                                    <option>有</option>
                                    <option>无</option>
                                </select>
                            </span>
                            <span className="fl lcy_kuang">
                                <img src={{ApplyInsurance}} className="apply_icon" />
                                <select value={this.state.d} onChange={this.nide}>
                                    <option disabled selected hidden>是否有社保</option>
                                    <option>有</option>
                                    <option>无</option>
                                </select>
                            </span>
                            <span className="fl lcy_kuang">
                                <img src={{ApplyCard}} className="apply_icon" />
                                <select value={this.state.f} onChange={this.mone}>
                                    <option disabled selected hidden>信用卡额度</option>
                                    <option>10万-20万</option>
                                    <option>20万-30万</option>
                                </select>
                            </span>
                            <span className="fl lcy_kuang">
                                <img src={{ ApplyPhone}} className="apply_icon" />
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
                    <img src={{Apply2}} className="lcy_speediness" />
                    <div className="lcy_proposer">
                        <div className="proposer_text1 clearfix">
                            <img src={{ ApplyName}} className="apply_icon" />
                            <input type="text" placeholder="请输入您的姓名" className="fl" />
                            <select className="fl" value={this.state.g} onChange={this.sex}>
                                <option>先生</option>
                                <option>女士</option>
                            </select>
                        </div>
                        <div className="proposer_text1">
                            <img src={{ApplyPhone}} className="apply_icon" />
                            <input type="tel" placeholder="请输入手机号" onkeyup="this.value=this.value.replace(/[^\d]/g,'');" style={{border:'none'}} />                              
                        </div>
                        <div className="clearfix lcy_yanzheng">
                            <div className="fl proposer_text1 security_code clearfix">
                                <input type="text" placeholder="验证码" className="fl" />
                                <img src={{YangZheng}} alt="" className="lcy_yanzheng fr" />
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
                            <img src={{Ewm}} alt="" className="lcy_download" />
                            <p className="lcy_progress">下载APP，查看借款进度</p>
                    </div>
                </div>
            </div>
        </div>                                                                  
    </div>
    }
}