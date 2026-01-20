import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    description: {
        marginLeft: 24,
        marginRight: 24,
        gap: 12,
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 12,
    },
    card: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 12,
    },
    step: {
        display: 'flex',
        width: 32,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 0,
        paddingTop: 5,
        paddingBottom: 7,
        borderRadius: 64,
        margin: 0,
        backgroundColor: '#9999',
        fontSize: 14,
        fontWeight: 600,

    },
    stepItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 4,
        flexWrap: 'wrap',
        flexShrink: 1,
    },
    stepTitle: {
        display: 'flex',
        fontSize: 14,
        fontWeight: 600,
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignSelf: 'stretch',
        gap: 4,
    },
    containerTracking: {
        display: 'flex',
        padding: 16,
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderRadius: 8,
        backgroundColor: '#9999',
        marginLeft: 24,
        marginRight: 24,
        position: 'fixed',
        bottom: 80,
    }
})