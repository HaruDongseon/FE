import Colors from '@/styles/Color';
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

type ButtonActionProps = {
  title: string;
  status: 'default' | 'active' | 'disabled';
  onPress: () => void;
};

const ButtonAction: React.FC<ButtonActionProps> = ({
  title,
  status,
  onPress,
}) => {
  const style = styles[status];
  const textStyle = textStyles[status];

  return (
    <Pressable
      style={[styles.button, style]}
      disabled={status === 'disabled'}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 32,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: Colors.white,
  },
  text: {
    textAlign: 'center',
  },
  default: {
    borderColor: '#EBEDED',
  },
  active: {
    backgroundColor: Colors.primary25,
    borderColor: Colors.primary200,
  },
  disabled: {
    backgroundColor: Colors.primary25,
    borderColor: Colors.primary75,
  },
});

const textStyles = StyleSheet.create({
  default: {
    color: Colors.grayScale300,
  },
  active: {
    color: Colors.primary300,
  },
  disabled: {
    color: Colors.primary50,
  },
});

export default ButtonAction;
