import IconArrowBack from "@/assets/images/icons/arrow_back";
import { typographyStyles } from "@/constants/theme";
import { StyleSheet, Text, View } from "react-native";

type HeaderText = {
  title: string;
};

export default function HeaderArrowBack({title}: HeaderText){
    return (
        <View style={styles.container}>
            <View style={styles.iconBack}>
                <View><IconArrowBack size="24"/></View>
                <View><Text style={typographyStyles.titleMedium}>{title}</Text></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        display: 'flex',
        width: 'auto',
        gap: 4,
        paddingVertical: 8,
        paddingHorizontal: 12,
        alignItems: 'flex-start',
    },
    iconBack: {
        width: '100%',
        display: 'flex',
        padding: 12,
        justifyContent: 'flex-start',
        gap: 8,
        flexShrink: 0,
        flexDirection: 'row',
    },
    titleHeader: {
        width: '100%',
        fontSize: 16,
        fontWeight: 600,
    },
    
})