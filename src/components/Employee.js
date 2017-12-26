import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Card, CardSection } from './common';

const Employee = ({ item, pressFn }) => (
  <TouchableOpacity onPress={() => pressFn(item)}>
    <CardSection style={{ flexDirection: 'column' }}>
      <Text style={{ fontSize: 18 }}>{item.displayName}</Text>
      <Text>{item.phoneNumber}</Text>
      <Text>{item.shift}</Text>
    </CardSection>
  </TouchableOpacity>
);


export default Employee;
