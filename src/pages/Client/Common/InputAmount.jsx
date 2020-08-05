import React from 'react';
import UserInfo from "@/pages/Client/Common/UserInfo";
import {Button, Col, Input, Row} from "antd";
import styles from './InputAmount.less';
import { ArrowLeftOutlined } from '@ant-design/icons';

class InputAmount extends React.Component{

  componentWillUnmount() {

    this.setState = (state,callback)=>{ return; };
  }

  confirm=()=>{
    this.props.showQrCode();
  }

  render() {
    return(
      <div>
        <div>
          <UserInfo/>
        </div>

        <div className={styles.number}>
          <Row gutter={[16, 24]}>
            <Col>
              <Input size="large"/>
            </Col>
            <Col>
              <Button type="primary" size='large' icon={<ArrowLeftOutlined />}>
              </Button>
            </Col>
          </Row>

          <Row gutter={[16, 24]}>
            <Col className="gutter-row">
              <Button type="primary" size='large'>
                0
              </Button>
            </Col>
            <Col className="gutter-row">
              <Button type="primary" size='large'>
                1
              </Button>
            </Col>
            <Col className="gutter-row">
              <Button type="primary" size='large'>
                2
              </Button>
            </Col>
            <Col className="gutter-row">
              <Button type="primary" size='large'>
                3
              </Button>
            </Col>
          </Row>
          <Row gutter={[16, 24]}>
            <Col className="gutter-row">
              <Button type="primary" size='large'>
               4
              </Button>
            </Col>
            <Col className="gutter-row">
              <Button type="primary" size='large'>
                5
              </Button>
            </Col>
            <Col className="gutter-row">
              <Button type="primary" size='large'>
                6
              </Button>
            </Col>
            <Col className="gutter-row">
              <Button type="primary" size='large'>
                7
              </Button>
            </Col>
          </Row>
          <Row gutter={[16, 24]}>
            <Col className="gutter-row">
              <Button type="primary" size='large'>
                8
              </Button>
            </Col>
            <Col className="gutter-row">
              <Button type="primary" size='large'>
                9
              </Button>
            </Col>
            <Col className="gutter-row">
              <Button type="primary" size='large'>
                10
              </Button>
            </Col>
            <Col className="gutter-row">
              <Button type="primary" size='large' onClick={event => this.confirm()}>
                确定
              </Button>
            </Col>
          </Row>
        </div>

      </div>
    );
  }

}

export default InputAmount;
