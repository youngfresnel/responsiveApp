import React , {useState} from 'react';
import { TextInputProps, View, TextInput, Text, Pressable,  } from 'react-native';
import { scale } from '../responsiveSize';
import { EyeIcon, EyeSlashIcon } from 'phosphor-react-native';
import { ThemeText } from './ThemeText';
import useAppTheme from '../Hooks/useAppTheme';

 export interface Input extends TextInputProps {
    labelone:string;
    isHere:boolean;
    placeone:string;
    placetwo:string;
    labeltwo:string;

  }

 export const Textfill = ({labelone, placetwo,placeone, labeltwo, isHere, }:Input) =>{

        const [isVisible, setIsVisible] = useState(false)

        const {colors} = useAppTheme();

    return(
        <View style={{flexDirection:'column', gap:scale(18)}}>
            <View>
                <View>
                    <ThemeText variant='Popins_Regular_14' style={{color:'#858597'}}>{labelone}</ThemeText>
                </View>
                <View>
                    <TextInput placeholder={placeone} style={{ 
                        backgroundColor:colors.bgOnboardingColor, 
                        width:scale(327),
                         height:scale(50), 
                         borderRadius:scale(12), 
                         color:'#1F1F39',
                         borderWidth:scale(1),
                         borderColor:'#B8B8D2'
                         }} 
                         placeholderTextColor={colors.subtitle} 
                         
                         />
                </View>
            </View>
            <View style={{flexDirection:'column'}}>
                <View>
                    <ThemeText variant='Popins_Regular_14' style={{color:'#858597'}}>{labeltwo}</ThemeText>
                </View>
                <View>
                    <TextInput placeholder={placetwo} style={{ 
                        backgroundColor:colors.bgOnboardingColor, 
                        width:scale(327), height:scale(50), 
                        borderRadius:scale(12), 
                        color:'#1F1F39',
                        borderWidth:scale(1),
                        borderColor:'#B8B8D2'
                        }} placeholderTextColor={colors.subtitle}
                        secureTextEntry={!isVisible}
                        />
                        { isHere && 
                        <Pressable style={{marginLeft:scale(280), bottom:scale(38)}} onPress={()=>setIsVisible(!isVisible)}>
                        {isVisible ? <EyeIcon color="black"/> : <EyeSlashIcon color="black" />}
                    </Pressable>}
                </View>
            </View>
        </View>
    )
}
