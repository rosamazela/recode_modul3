import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Button } from 'native-base';

// Functional Component with props
const CustomButton = (props) => {
  return (
    <Button block style={styles.container} onPress={props.onPress}>
      <Text style={styles.text}>{props.text}</Text>
    </Button>
  );
};

// Styles
const styles = {
  container: {
    backgroundColor: '#dddddd',
    padding: 15,
    alignItems: 'center',
    borderRadius: 30,
  },
  text: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
};

export default CustomButton;
