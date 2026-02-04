import  React,{ReactNode} from 'react';
import { StyleSheet, Text, StyleProp,TextStyle,TextProps } from 'react-native';
import { fontPath } from '../Constant /fontPath';
import { textScale } from '../responsiveSize';

const Theme = StyleSheet.create({
    Popins_Regular_16:{
        fontFamily:fontPath.Regular,
        fontSize:textScale(16),
        fontWeight:'100'
    },
    Popins_Bold_22:{
        fontFamily:fontPath.Bold,
        fontSize:textScale(22),
        fontWeight:'bold'
    },
    Popins_Bold_24:{
        fontFamily:fontPath.Bold,
        fontSize:textScale(24),
        fontWeight:'bold'
    },
     Popins_Bold_12:{
        fontFamily:fontPath.Bold,
        fontSize:textScale(12),
        fontWeight:'bold'
    },
    Popins_Regular_14:{
        fontFamily:fontPath.Regular,
        fontSize:textScale(14),
        fontWeight:'100'
    },
     Popins_Regular_12:{
        fontFamily:fontPath.Regular,
        fontSize:textScale(12),
        fontWeight:'100'
    },
    Popins_Medium_18:{
        fontFamily:fontPath.Medium,
        fontSize:textScale(18),
        fontWeight:'100'
    },
      Popins_Regular_18:{
        fontFamily:fontPath.Regular,
        fontSize:textScale(18),
        fontWeight:'100'
    },
      Popins_Bold_32:{
        fontFamily:fontPath.Bold,
        fontSize:textScale(32),
        fontWeight:'bold'
    }

})

type Props = {
  children: ReactNode;
  variant: keyof typeof Theme;
  style?: StyleProp<TextStyle>;
} & TextProps;

export function ThemeText({
  children,
  variant,
  style,
  ...props
}: Props) {
  return (
    <Text style={[Theme[variant], style]} {...props}>
      {children}
    </Text>
  );
}
