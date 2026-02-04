import * as React from 'react';
import { Pressable, PressableProps, StyleSheet, Text, View,  } from 'react-native';
import { scale, textScale } from '../responsiveSize'; // Utilise tes outils de scaling
import useAppTheme from '../Hooks/useAppTheme';
import { fontPath } from '../Constant /fontPath';
import { useState } from 'react';

export interface ButtonProps extends PressableProps {
    name: string;
    
    largeur?: number | string; 
    isFill:boolean;
    isColor?:boolean;
}

export const Boutton = ({ name, onPress, isFill , largeur, style,isColor, ...props }: ButtonProps) => {
    const { colors } = useAppTheme();
    

    return (
        <Pressable 
            onPress={onPress}
            style={({ pressed }) => [
                styles.container,
                { 
                    backgroundColor: isFill ? colors.BoutonColor : isColor ? "#FFFFFF":'#858597',
                    width: largeur || scale(160), 
                    borderColor:colors.BoutonColor
                    
                },
                style as any 
            ]} 
            {...props} 
        >
            <View>
                <Text style={[styles.text, { color: isFill ? '#FFFFFF' : isColor ? colors.BoutonColor : "#FFFFFF"  }]}>
                    {name}
                </Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        height: scale(50), 
        borderRadius: scale(12), 
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth:scale(1),
    },
    text: {
        fontFamily: fontPath.Medium,
        fontSize: textScale(16),
    }
});

 

