/* eslint-disable react/prop-types,no-empty */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Button, CardSection } from './common';
import { employeeActions } from './actions';
import EmployeeForm from './EmployeeForm';


class EmployeeCreate extends Component {
  componentWillMount() {
    this.props.resetEmployeeForm();
  }
  onSaveNewEmploye= () => {
    this.props.saveNewEmployee(this.props.employeeForm);
  }
  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button
            press={this.onSaveNewEmploye}
          >
          Save
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => ({ employeeForm: state.employeeForm });

export default connect(mapStateToProps, employeeActions)(EmployeeCreate);
