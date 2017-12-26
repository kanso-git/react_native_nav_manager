/* eslint-disable react/prop-types,no-empty */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text, View, StyleSheet } from 'react-native';
import { CardSection, Input } from './common';
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
class EmployeeForm extends Component {
  componentWillMount() {
    console.log('EmployeeForm componentWillMount');
    this.setupFrom();
  }
  onDisplayNameChange = (displayName) => {
    this.props.displayNameChange(displayName);
  }
  onPhoneNumberChange = (phoneNumber) => {
    this.props.phoneNumberChange(phoneNumber);
  }
  setupFrom = () => {
    const { shift } = this.props.employeeForm;
    console.log(`initial shift is ${shift}`);
    if (!shift) {
      this.props.shiftSelectChange('monday');
      console.log(`new shift is ${this.props.employeeForm.shift}`);
    }
  }
  selectShift= (shiftObj) => {
    this.props.shiftSelectChange(shiftObj.value);
  }
  render() {
    const { pickerWraper, pickerTitle } = styles;
    const { displayName, phoneNumber, shift } = this.props.employeeForm;
    return (
      <View>
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
      </View>
    );
  }
}

const mapStateToProps = state => ({ employeeForm: state.employeeForm });

export default connect(mapStateToProps, employeeActions)(EmployeeForm);
