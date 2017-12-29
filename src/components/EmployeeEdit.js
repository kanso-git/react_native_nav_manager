/* eslint-disable react/prop-types,no-empty */
import React, { Component } from 'react';
import { Alert, Text } from 'react-native';
import { connect } from 'react-redux';
import { text } from 'react-native-communications';
import { Card, Button, CardSection, ConfirmModal } from './common';
import { employeeActions } from './actions';
import EmployeeForm from './EmployeeForm';


class EmployeeEdit extends Component {
  state ={
    showModal: false,
  }
  componentWillMount() {
    const { employeeForm } = this.props.navigation.state.params;
    this.props.fillInEmployeeForm(employeeForm);
  }
  onSaveChangesEmployee= () => {
    console.log(this.props.employeeForm);
    this.props.saveChangesEmployee(this.props.employeeForm);
  }
  // this method used to send a text message
  onTextEmployee = () => {
    const { phoneNumber, shift } = this.props.employeeForm;
    text(phoneNumber, `your upcoming shift is on :${shift}`);
  }
  // case 1: this is an exmaple of using the ALert component
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
  // when user confirms the delete the deleteEmployee will be triggered with
  // the employee as argument
  confirmDelete = () => {
    this.props.deleteEmployee(this.props.employeeForm);
  }
  // case 2: use the confirm modal common component
  // the confirmModal needs the showModal component level state in order to switch its
  // visibility.
  // Confirm modal needs 3 propos: visible (true|false), onConfirm(Fn) and onCancel.

  onConfirm = () => {
    console.log('onConfirm was called ');
    this.props.deleteEmployee(this.props.employeeForm);
    this.setState(() => ({
      showModal: false,
    }));
  }
  onCancel = () => {
    console.log('onCancel was called ');
    this.setState(() => ({
      showModal: false,
    }));
  }

  onDeleteEmployeeModal = () => {
    this.setState(() => ({
      showModal: true,
    }));
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
            press={this.onDeleteEmployeeModal}
          >
            Delete Employee
          </Button>

        </CardSection>
        <ConfirmModal
          visible={this.state.showModal}
          onConfirm={this.onConfirm}
          onCancel={this.onCancel}
        ><Text>Are you sure ?</Text>
        </ConfirmModal>

      </Card>
    );
  }
}

const mapStateToProps = state => ({ employeeForm: state.employeeForm });

export default connect(mapStateToProps, employeeActions)(EmployeeEdit);
