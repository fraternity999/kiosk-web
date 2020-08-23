import React from 'react';
import UserInfo from "@/pages/Client/Common/UserInfo";
import {Button, Col, Input, Row} from "antd";
import styles from './InputAmount.less';
import { ArrowLeftOutlined } from '@ant-design/icons';

class InputAmount extends React.Component{

  state={
    amount:""
  }

  componentWillUnmount() {

    this.setState = (state,callback)=>{ return; };
  }



  inputNumber = (n)=>{
    console.log(n)
    var amount = this.state.amount+""+n
    this.setState({amount:amount})
  }

  render() {
    return(
      <div>
        <div>
          <UserInfo patientInfo={this.props.patientInfo}/>
        </div>

        <div className={styles.number}>
          <Row gutter={[16, 24]}>
            <Col>
              <Input size="large" value={this.state.amount}/>
            </Col>
            <Col>
              <Button type="primary" size='large' icon={<ArrowLeftOutlined />}>
              </Button>
            </Col>
          </Row>
          <Row gutter={[16, 24]}>

            <Col className="gutter-row">
              <Button type="primary" size='large' onClick={event => this.inputNumber(1)}>
                1
              </Button>
            </Col>
            <Col className="gutter-row">
              <Button type="primary" size='large' onClick={event => this.inputNumber(2)}>
                2
              </Button>
            </Col>
            <Col className="gutter-row">
              <Button type="primary" size='large' onClick={event => this.inputNumber(3)}>
                3
              </Button>
            </Col>
            <Col className="gutter-row">
              <Button type="primary" size='large' onClick={event => this.inputNumber(4)}>
                4
              </Button>
            </Col>
            <Col className="gutter-row">
              <Button type="primary" size='large' onClick={event => this.inputNumber(5)}>
                5
              </Button>
            </Col>
          </Row>
          <Row gutter={[16, 24]}>


            <Col className="gutter-row">
              <Button type="primary" size='large' onClick={event => this.inputNumber(6)}>
                6
              </Button>
            </Col>
            <Col className="gutter-row">
              <Button type="primary" size='large' onClick={event => this.inputNumber(7)}>
                7
              </Button>
            </Col>
            <Col className="gutter-row">
              <Button type="primary" size='large' onClick={event => this.inputNumber(8)}>
                8
              </Button>
            </Col>
            <Col className="gutter-row">
              <Button type="primary" size='large' onClick={event => this.inputNumber(9)}>
                9
              </Button>
            </Col>
            <Col className="gutter-row">
              <Button type="primary" size='large' onClick={event => this.inputNumber(0)}>
                0
              </Button>
            </Col>
          </Row>

        </div>

      </div>
    );
  }

}

export default InputAmount;
