import Colors from '@/styles/Color';
import React, { useState } from 'react';
import {
  Pressable,
  Text,
  ViewStyle,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import Google from '../icon/SNS/Google';
import Naver from '../icon/SNS/Naver';
import Kakao from '../icon/SNS/Kakao';

export enum SNSType {
  KAKAO = 'KAKAO',
  NAVER = 'NAVER',
  GOOGLE = 'GOOGLE',
}

interface LoginButtonProps {
  text: string;
  type: SNSType;
  onPress: (event: GestureResponderEvent) => void;
  style?: ViewStyle;
  textStyle?: ViewStyle;
}

const LoginButton: React.FC<LoginButtonProps> = ({
  text,
  type,
  style,
  textStyle,
  onPress,
}) => {
  let IconComponent = null;

  switch (type) {
    case 'KAKAO':
      IconComponent = Kakao;
      break;
    case 'NAVER':
      IconComponent = Naver;
      break;
    case 'GOOGLE':
      IconComponent = Google;
      break;
    default:
      break;
  }

  return (
    <Pressable onPress={onPress} style={[styles.container, style]}>
      {IconComponent && <IconComponent />}
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </Pressable>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 320,
    height: 56,
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.gray200,
    gap: 4,
    backgroundColor: Colors.white,
  },
  text: {
    color: Colors.gray300,
    marginLeft: 4,
  },
});
