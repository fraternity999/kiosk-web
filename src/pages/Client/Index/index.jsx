import React from 'react';
import {Spin, Layout, Menu, Row, Col, Modal, notification} from "antd";
import styles from './index.less';
import imgUrl from "../../../assets/images/register.png"
import imgReservation from "../../../assets/images/reservation.png"
import imgTake from "../../../assets/images/take.png"
import imgPay from "../../../assets/images/pay.png"
import imgRecharge from "../../../assets/images/recharge.png"
import imgInquire from "../../../assets/images/inquire.png"
import imgPrint from "../../../assets/images/print.png"

import RechargeType from "@/pages/Client/Recharge/type";
import UserInfo from "@/pages/Client/Common/UserInfo";
import InputAmount from "@/pages/Client/Common/InputAmount";
import QrCode from "@/pages/Client/Common/QrCode";
import request from '@/utils/request';
import RegisterCardIndex from "@/pages/Client/RegisterCard";

const { Header, Footer, Content } = Layout;


class Index extends React.Component{

  state={
    visible: false,
    amountVisible:false,
    qrCodeVisible:false,
    insertCardVisible:false,
    patientInfo: {name:'',sex:'',account:''},
    loading:false,
    registerCardVisible:false,
  }

  //办卡
  registerCard(event) {
    //发送读取身份证请求
    this.setState({
      registerCardVisible:false,
      loading:true
    })
    request
      .get('/api/recharge/qrCode')
      .then(function(response) {
        if(response.code != 200){
          this.setState({
            loading:false
          })
          this.openNotification("系统提示",response.message);
          return ;
        }

      }.bind(this))
      .catch(function(error) {
        this.setState({
          loading:false
        })
      });
  }



  // 充值
  recharge=(e)=>{
    this.setState({
      loading:true
    })
    request
      .get('/api/recharge/index')
      .then(function(response) {
        console.log(response);
        if(response.code != 200){
          this.setState({
            loading:false
          })
          this.openNotification("系统提示",response.message);
          return ;
        }

        this.setState({
          patientInfo:response.data,
          visible:true,
          loading:false
        })


      }.bind(this))
      .catch(function(error) {
        this.setState({
          loading:false
        })
      });
  };



  showAmount=()=>{
    this.setState({
      visible: false,
      amountVisible:true
    });
  }

  showQrCode=()=>{
    this.setState({
      visible: false,
      amountVisible:false,
      qrCodeVisible:true
    });
  }

  openNotification = (message,description) => {
    notification.open({
      message: message,
      description: description,
    });
  };

  //确认金额
  confirmMoney=()=>{
    //请求银行二维码
    request
      .get('/api/recharge/qrCode')
      .then(function(response) {
        console.log(response);
        if(response.code != 200){
          this.setState({
            loading:false
          })
          this.openNotification("系统提示",response.message);
          return ;
        }

        this.setState({
          patientInfo:response.data,
          visible:true,
          loading:false
        })


      }.bind(this))
      .catch(function(error) {
        this.setState({
          loading:false
        })
      });

  }

  componentWillUnmount() {
    this.setState = (state,callback)=>{ return; };
  }

  render() {
    return(
      <Spin spinning={this.state.loading} size="large">
        <div>
          <Layout>
            <Header>
              <div className={styles.logo} />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">退卡</Menu.Item>
              </Menu>
            </Header>
            <Content>
              <div className={styles.desc}>
                <UserInfo patientInfo={this.state.patientInfo}/>
              </div>
              <div className={styles.content}>
                {/*<Row>*/}
                {/*  <Col span={6}>*/}
                {/*    <div className={styles.register}>*/}
                {/*      <div>*/}
                {/*        <img alt='挂号' src={imgUrl}/>*/}
                {/*        <div className={styles.appFont}>挂号</div>*/}
                {/*      </div>*/}
                {/*    </div>*/}
                {/*  </Col>*/}
                {/*  <Col span={6}>*/}
                {/*    <div className={styles.reservation}>*/}
                {/*      <img alt='预约' src={imgReservation}/>*/}
                {/*      <div className={styles.appFont}>预约</div>*/}
                {/*    </div>*/}
                {/*    <div className={styles.take}>*/}
                {/*      <img alt='取号' src={imgTake}/>*/}
                {/*      <div className={styles.appFont}>取号</div>*/}
                {/*    </div>*/}
                {/*  </Col>*/}
                {/*  <Col span={6}>*/}
                {/*    <div className={styles.pay}>*/}
                {/*      <img alt='缴费' src={imgPay}/>*/}
                {/*      <div className={styles.appFont}>缴费</div>*/}
                {/*    </div>*/}
                {/*    <div className={styles.recharge} onClick={event => this.recharge(event)}>*/}
                {/*      <img alt='充值' src={imgRecharge}/>*/}
                {/*      <div className={styles.appFont}>充值</div>*/}
                {/*    </div>*/}
                {/*  </Col>*/}
                {/*  <Col span={6}>*/}
                {/*    <div className={styles.inquire}>*/}
                {/*      <img alt='查询' src={imgInquire}/>*/}
                {/*      <div className={styles.appFont}>查询</div>*/}
                {/*    </div>*/}
                {/*    <div className={styles.print}>*/}
                {/*      <img alt='打印' src={imgPrint}/>*/}
                {/*      <div className={styles.appFont}>打印</div>*/}
                {/*    </div>*/}
                {/*  </Col>*/}
                {/*</Row>*/}
                <Row style={{marginTop:100}}>
                    <Col span={8}>
                          <div className={styles.take} onClick={event => this.setState({registerCardVisible:true})}>
                            <img alt='办卡' src={imgTake}/>
                            <div className={styles.appFont}>办卡</div>
                          </div>
                    </Col>
                  <Col span={8}>
                        <div className={styles.recharge} onClick={event => this.recharge(event)}>
                          <img alt='充值' src={imgRecharge}/>
                          <div className={styles.appFont}>充值</div>
                        </div>
                  </Col>
                  <Col span={8}>
                        <div className={styles.pay}>
                          <img alt='住院充值' src={imgPay}/>
                          <div className={styles.appFont}>住院充值</div>
                        </div>
                  </Col>
                </Row>
              </div>
            </Content>
            <Footer>西安新能技术有限公司</Footer>
          </Layout>

          <Modal
            title="请选择充值类型"
            visible={this.state.visible}
            onOk={e => this.setState({visible: false})}
            onCancel={e => this.setState({visible: false})}
          >
            <RechargeType showAmount={this.showAmount}/>
          </Modal>


          <Modal
            title="请选择充值金额"
            visible={this.state.amountVisible}
            onOk={e => this.setState({amountVisible: false,qrCodeVisible: true})}
            onCancel={e => this.setState({amountVisible: false})}
          >
            <InputAmount patientInfo={this.state.patientInfo} showQrCode={this.showQrCode}/>
          </Modal>

          <Modal
            title="请扫二维码付款"
            visible={this.state.qrCodeVisible}
            onOk={e => this.setState({qrCodeVisible: false})}
            onCancel={e => this.setState({qrCodeVisible: false})}
          >
            <QrCode patientInfo={this.state.patientInfo}/>
          </Modal>

          <Modal
            title="请扫描身份证"
            closable={false}
            maskClosable={false}
            width={600}
            visible={this.state.registerCardVisible}
            onOk={e => this.registerCard()}
            onCancel={e => this.setState({registerCardVisible: false})}
          >
            <RegisterCardIndex/>
          </Modal>

        </div>
      </Spin>

    );
  }



}
export default Index;

