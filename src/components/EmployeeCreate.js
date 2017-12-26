/* eslint-disable react/prop-types,no-empty */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text, StyleSheet } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { employeeActions } from './actions';

const styles = StyleSheet.create({
  pickerTitle: {
    fontSize: 18,
    marginLeft: 20,
  },
  pickerWraper: {
    flexDirection: 'column',
  },

});
class EmployeeCreate extends Component {
  componentWillMount() {
    if (this.props.employeeForm.shift.trim().length === 0) {
      console.log('set the shift........');
      this.props.shiftSelectChange('monday');
    }
  }
  onDisplayNameChange = (displayName) => {
    console.log(`name is ${displayName}`);
    console.log(this.props);
    this.props.displayNameChange(displayName);
  }
  onPhoneNumberChange = (phoneNumber) => {
    console.log(`phoneNumber is ${phoneNumber}`);
    this.props.phoneNumberChange(phoneNumber);
  }
  onSaveNewEmploye= () => {
    this.props.saveNewEmployee(this.props.employeeForm);
  }
  selectShift= (shiftObj) => {
    this.props.shiftSelectChange(shiftObj.value);
  }
  render() {
    const { pickerWraper, pickerTitle } = styles;
    const { displayName, phoneNumber, shift } = this.props.employeeForm;
    return (
      <Card>
        <CardSection >
          <Input
            autoFocus
            label="Name"
            placeholder="Eric"
            value={displayName}
            onChangeText={this.onDisplayNameChange}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="074 800 30 30"
            value={phoneNumber}
            onChangeText={this.onPhoneNumberChange}
          />
        </CardSection>

        <CardSection style={pickerWraper}>
          <Text style={pickerTitle}>Shift</Text>
          <Picker
            selectedValue={shift}
            onValueChange={(itemValue, itemIndex) =>
                this.selectShift({ value: itemValue, index: itemIndex })}
          >
            <Picker.Item label="Monday" value="monday" />
            <Picker.Item label="Tuesday" value="tuesday" />
            <Picker.Item label="Friday" value="friday" />
            <Picker.Item label="Sunday" value="sunday" />
          </Picker>
        </CardSection>

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

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  console.log(ownProps);
  return { employeeForm: state.employeeForm };
};

export default connect(mapStateToProps, employeeActions)(EmployeeCreate);
