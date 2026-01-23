import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    speedContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 16,
        padding: 24,
    },
    card: {
        display: 'flex',
        width: '100%',
        alignItems: 'flex-start',
        gap: 8,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        backgroundColor: '#F5F5F5',
    },
    cardBody: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 4,
        flex: 1,
    },
    cardContainer: {
        flexDirection: 'row',
        gap: 8,
        width: '100%',
    },
    cardToggle: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'center',
    },
    cardDetails: {
        display: 'flex',
        width: '100%',
        paddingVertical: 12,
        paddingHorizontal: 16,
        alignItems: 'flex-start',
        gap: 8,
        borderRadius: 8,
        backgroundColor:'#F5F5F5',
    },
    carDetailsContainer: {
        flexDirection: 'row',
        width: '100%',
    },
    cardDetailsBody: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 4,
        flex: 1,
    }

})
