import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

const ModalComponent = ({
  children,
  isVisible = false,
  onBackdropPress = () => {},
  style = {},
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onBackdropPress}
      style={{...style, ...styles.style}}>
      {children}
    </Modal>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
  style: {},
});
