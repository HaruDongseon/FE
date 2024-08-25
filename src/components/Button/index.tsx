import Colors from '@/styles/Color';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  GestureResponderEvent,
} from 'react-native';
import Icon from '../icon/Common';

type ButtonType = 'filled' | 'outline' | 'text';
type ButtonSize = 'l' | 'm' | 'r' | 's';
type ButtonColor = 'Primary' | 'Gray';
type IconPosition = 'none' | 'leading' | 'trailing';

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  type: ButtonType;
  size: ButtonSize;
  color: ButtonColor;
  iconPosition?: IconPosition;
  disabled?: boolean;
  width?: number;
}

const colors = {
  Primary: {
    background: {
      default: Colors.primary300,
      pressed: Colors.primary500,
      disabled: Colors.primary50,
    },
    text: {
      filled: {
        default: Colors.white,
        pressed: Colors.white,
        disabled: Colors.white,
      },
      outline: {
        default: Colors.primary300,
        pressed: Colors.primary500,
        disabled: Colors.primary50,
      },
      text: {
        default: Colors.primary300,
        pressed: Colors.primary500,
        disabled: Colors.primary50,
      },
    },
  },
  Gray: {
    background: {
      default: Colors.grayScale50,
      pressed: Colors.grayScale100,
      disabled: Colors.grayScale50,
    },
    text: {
      filled: {
        default: Colors.grayScale400,
        pressed: Colors.grayScale600,
        disabled: Colors.white,
      },
      outline: {
        default: Colors.grayScale400,
        pressed: Colors.grayScale500,
        disabled: Colors.grayScale50,
      },
      text: {
        default: Colors.grayScale400,
        pressed: Colors.grayScale500,
        disabled: Colors.grayScale50,
      },
    },
  },
};

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  type,
  size,
  color,
  iconPosition = 'none',
  disabled = false,
  width,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const getBackgroundColor = () => {
    const state = disabled ? 'disabled' : isPressed ? 'pressed' : 'default';
    return type === 'filled' ? colors[color].background[state] : Colors.white;
  };

  const getTextStyle = () => {
    const textDecorationLine =
      type === 'text' && isPressed ? 'underline' : 'none';
    return textDecorationLine;
  };

  const getTextColor = () => {
    const state = disabled ? 'disabled' : isPressed ? 'pressed' : 'default';
    return colors[color].text[type][state];
  };

  const handlePressIn = () => {
    if (!disabled) setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled}
      style={[
        styles.button,
        styles[size],
        { backgroundColor: getBackgroundColor() },
        type === 'outline' && {
          borderWidth: 1,
          borderColor: colors[color].background.default,
        },
        { width: width },
      ]}
    >
      <View style={styles.content}>
        {iconPosition === 'leading' && (
          <Icon type="Before1LineM" style={styles.iconLeading} />
        )}
        <Text
          style={[
            styles.text,
            {
              color: getTextColor(),
              textDecorationLine: getTextStyle(),
              marginLeft: iconPosition === 'leading' ? 4 : 0,
              marginRight: iconPosition === 'trailing' ? 4 : 0,
            },
          ]}
        >
          {title}
        </Text>
        {iconPosition === 'trailing' && (
          <Icon type="Next1LineM" style={styles.iconTrailing} />
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontWeight: '500',
    fontSize: 14,
  },
  iconLeading: {
    marginRight: 4,
  },
  iconTrailing: {
    marginLeft: 4,
  },
  l: {
    height: 56,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  m: {
    height: 48,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  r: {
    height: 40,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  s: {
    height: 32,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
});

export default Button;
