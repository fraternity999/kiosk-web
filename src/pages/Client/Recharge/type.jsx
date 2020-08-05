import React, { useState, useEffect } from 'react';
import {Card, Col, Modal, Row} from "antd";
import imgPa from "../../../assets/images/p_a.png"
import imgPb from "../../../assets/images/p_b.png"
import imgPc from "../../../assets/images/p_c.png"
import imgPw from "../../../assets/images/p_w.png"
import InputAmount from "@/pages/Client/Common/InputAmount";

class RechargeType extends React.Component{

  state={
    visible: false
  }

  aliPay(e){
    this.props.showAmount();
  }

  componentWillUnmount() {
    this.setState = (state,callback)=>{ return; };
  }


  render() {
    return(
      <div>
        <Row gutter={[16, 24]}>

          <Col className="gutter-row" span={12}>
            <Card onClick={event => this.aliPay()}>
              <img alt='支付宝' src={imgPa}/>
            </Card>
          </Col>

          <Col className="gutter-row" span={12}>
            <Card>
              <img alt='银联卡' src={imgPb}/>
            </Card>
          </Col>
        </Row>

        <Row gutter={[16, 24]}>
          <Col className="gutter-row" span={12}>
            <Card>
              <img alt='现金' src={imgPc}/>
            </Card>
          </Col>

          <Col className="gutter-row" span={12}>
            <Card>
              <img alt='微信' src={imgPw}/>
            </Card>
          </Col>
        </Row>



      </div>
    );
  }

}

export default RechargeType;
