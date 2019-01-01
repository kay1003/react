import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Button, Col, Form, Input, Row } from 'antd';
import Panel from '../../../components/Panel';
import Grid from '../../../components/Sword/Grid';
import { CODE_LIST } from '../../../actions/code';

const FormItem = Form.Item;

@connect(({ code, loading }) => ({
  code,
  loading: loading.models.code,
}))
@Form.create()
class Code extends PureComponent {
  // ============ 查询 ===============
  handleSearch = params => {
    const { dispatch } = this.props;
    dispatch(CODE_LIST(params));
  };

  // ============ 查询表单 ===============
  renderSearchForm = onReset => {
    const { form } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
        <Col md={6} sm={24}>
          <FormItem label="模块名">
            {getFieldDecorator('codeName')(<Input placeholder="请输入模块名" />)}
          </FormItem>
        </Col>
        <Col md={6} sm={24}>
          <FormItem label="表名">
            {getFieldDecorator('tableName')(<Input placeholder="请输入表名" />)}
          </FormItem>
        </Col>
        <Col md={6} sm={24}>
          <FormItem label="实体名">
            {getFieldDecorator('modelName')(<Input placeholder="请输入实体名" />)}
          </FormItem>
        </Col>
        <Col>
          <div style={{ float: 'right' }}>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={onReset}>
              重置
            </Button>
          </div>
        </Col>
      </Row>
    );
  };

  render() {
    const code = 'code';

    const {
      form,
      loading,
      code: { data },
    } = this.props;

    const columns = [
      {
        title: '模块名',
        dataIndex: 'codeName',
      },
      {
        title: '表名',
        dataIndex: 'tableName',
      },
      {
        title: '主键名',
        dataIndex: 'pkName',
      },
      {
        title: '实体名',
        dataIndex: 'modelName',
      },
      {
        title: '包名',
        dataIndex: 'packageName',
      },
    ];

    return (
      <Panel>
        <Grid
          code={code}
          form={form}
          onSearch={this.handleSearch}
          renderSearchForm={this.renderSearchForm}
          loading={loading}
          data={data}
          columns={columns}
        />
      </Panel>
    );
  }
}
export default Code;
