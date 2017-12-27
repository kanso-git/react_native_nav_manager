/* eslint-disable react/prop-types,no-empty */
import React, { Component } from 'react';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import { text } from 'react-native-communications';
import { Card, Button, CardSection } from './common';
import { employeeActions } from './actions';
import EmployeeForm from './EmployeeForm';


class EmployeeEdit extends Component {
  componentWillMount() {
    const { employeeForm } = this.props.navigation.state.params;
    this.props.fillInEmployeeForm(employeeForm);
  }
  onSaveChangesEmployee= () => {
    console.log(this.props.employeeForm);
    this.props.saveChangesEmployee(this.props.employeeForm);
  }
  onDeleteEmployee = () => {
    const { displayName } = this.props.employeeForm;
    Alert.alert(
      'Delete Employee',
      displayName,
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => this.confirmDelete(), style: 'delete' },
      ],
      { cancelable: false },
    );
  }

  onTextEmployee = () => {
    const { phoneNumber, shift } = this.props.employeeForm;
    text(phoneNumber, `your upcoming shift is on :${shift}`);
  }
  confirmDelete = () => {
    this.props.deleteEmployee(this.props.employeeForm);
  }
  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button
            press={this.onSaveChangesEmployee}
          >
            Save Changes
          </Button>
        </CardSection>
        <CardSection>
          <Button
            press={this.onTextEmployee}
          >
            Text
          </Button>
        </CardSection>
        <CardSection>
          <Button
            press={this.onDeleteEmployee}
          >
            Delete Employee
          </Button>

        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => ({ employeeForm: state.employeeForm });

export default connect(mapStateToProps, employeeActions)(EmployeeEdit);
