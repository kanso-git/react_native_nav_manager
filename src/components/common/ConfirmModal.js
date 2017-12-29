import React from 'react';
import { Modal, View, Text } from 'react-native';
import { Card } from './Card';
import { CardSection } from './CardSection';
import { Button } from './Button';


const ConfirmModal = ({ visible, onAccept, onCancel }) => (
  <Modal
    visible={visible}
    onRequestClose={() => console.log('onRequestClose')}
    transparent
    animationType="slide"
    presentationStyle="overFullScreen"
  >
    <Card>
      <CardSection>
        <View>
          <Text> Delete this Employee ? </Text>
        </View>
      </CardSection>
      <CardSection>
        <Button press={() => console.log('Ok clicked')}>Ok</Button>
        <Button press={() => console.log('Cancel clicked')}>Cancel</Button>
      </CardSection>
    </Card>
  </Modal>
);
export default ConfirmModal;
