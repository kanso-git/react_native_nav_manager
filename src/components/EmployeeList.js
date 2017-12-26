import _ from 'lodash';
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { employeeActions } from './actions';
import Employee from './Employee';

class EmployeeList extends Component {
  componentWillMount() {
    console.log('>>>>>>>>>>>>>> componentWillMount');
    this.props.fetchEmployeeListFromFirebase();
  }
  onPressItem = (item) => {
    console.log(item);
    // onPressItem={this.onPressItem}
    Actions.push('employeeForm',item);
  };
  renderItem = ({ item }) => (
    <Employee item={item} pressFn={this.onPressItem}/>
  );
  render() {
    console.log(this.props.employeeList);
    return (
      <FlatList
        data={this.props.employeeList}
        extraData={this.props.employeeList}
        renderItem={this.renderItem}
      />
    );
  }
}

const mapStateToProps = state => (
  {
    employeeList: _.map(state.employeeList, (val, key) => ({ ...val, key })),
  }
);

export default connect(mapStateToProps, employeeActions)(EmployeeList);
