import { useColorScheme } from "react-native";
import { imgPath } from "../Constant /imgPath";
import { Colors } from "../Constant /Colors";

const useAppTheme = () => {
    const systemeColorsSheme = useColorScheme();
    const isDarkMode = systemeColorsSheme === 'dark';


    const images ={
        illustrator:isDarkMode ? imgPath.illustration1:imgPath.illustration2
    }

    const theme = isDarkMode ? 'dark' : 'light'

    return{
        isDarkMode,
        images,
        colors : Colors[theme]

    }
}

export default useAppTheme;