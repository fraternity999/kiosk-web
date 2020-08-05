import React from 'react';
import {Descriptions, Layout, Menu, Row, Col, Modal} from "antd";
import styles from './index.less';
import imgUrl from "../../../assets/images/register.png"
import RechargeType from "@/pages/Client/Recharge/type";
import UserInfo from "@/pages/Client/Common/UserInfo";
import InputAmount from "@/pages/Client/Common/InputAmount";
import QrCode from "@/pages/Client/Common/QrCode";

const { Header, Footer, Content } = Layout;


class Index extends React.Component{

  state={
    visible: false,
    amountVisible:false,
    qrCodeVisible:false
  }

  // 充值
  recharge=(e)=>{
    //检测是否有卡
    this.setState({
      visible: true,
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

  componentWillUnmount() {
    this.setState = (state,callback)=>{ return; };
  }

  render() {
    return(
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
              <UserInfo/>
            </div>
            <div className={styles.content}>
              <Row>
                <Col span={6}>
                  <div className={styles.register}>
                    <div>
                      <img alt='挂号' src={imgUrl}/>
                      <div>挂号</div>
                    </div>
                  </div>
                </Col>
                <Col span={6}>
                  <div className={styles.reservation}>
                    <img alt='预约' src={imgUrl}/>
                    <div>预约</div>
                  </div>
                  <div className={styles.take}>
                    <img alt='取号' src={imgUrl}/>
                    <div>取号</div>
                  </div>
                </Col>
                <Col span={6}>
                  <div className={styles.pay}>
                    <img alt='预约' src={imgUrl}/>
                    <div>缴费</div>
                  </div>
                  <div className={styles.recharge} onClick={event => this.recharge(event)}>
                    <img alt='取号' src={imgUrl}/>
                    <div>充值</div>
                  </div>
                </Col>
                <Col span={6}>
                  <div className={styles.inquire}>
                    <img alt='预约' src={imgUrl}/>
                    <div>查询</div>
                  </div>
                  <div className={styles.print}>
                    <img alt='取号' src={imgUrl}/>
                    <div>打印</div>
                  </div>
                </Col>
              </Row>
            </div>
          </Content>
          <Footer>Footer</Footer>
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
          onOk={e => this.setState({amountVisible: false})}
          onCancel={e => this.setState({amountVisible: false})}
        >
          <InputAmount showQrCode={this.showQrCode}/>
        </Modal>

        <Modal
          title="请扫二维码付款"
          visible={this.state.qrCodeVisible}
          onOk={e => this.setState({qrCodeVisible: false})}
          onCancel={e => this.setState({qrCodeVisible: false})}
        >
          <QrCode />
        </Modal>

      </div>
    );
  }
}
export default Index;

