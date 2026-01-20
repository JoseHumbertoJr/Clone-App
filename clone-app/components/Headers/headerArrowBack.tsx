import IconArrowBack from "@/assets/images/icons/arrow_back";
import { StyleSheet, View } from "react-native";

type HeaderText = {
  title: string;
};

export default function HeaderArrowBack({title}: HeaderText){
    return (
        <View style={styles.container}>
            <div style={styles.iconBack}>
                <div><IconArrowBack size="24"/></div>
                <div style={styles.titleHeader}>{title}</div>
            </div>
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
        alignItems: 'center',
    },
    iconBack: {
        width: '100%',
        display: 'flex',
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        flexShrink: 0,
    },
    titleHeader: {
        width: '100%',
        fontSize: 16,
        fontWeight: 600,
    },
    
})