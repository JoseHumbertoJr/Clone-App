import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    bodyContainer: {
        display: 'flex',
        paddingTop: 8,
        paddingHorizontal: 24,
        paddingBottom: 24,
        alignItems: 'flex-start',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 20,
        width: '100%',
    },
    tripList: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 16,
        flexShrink: 0,
        width: '100%',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 16,
        width: '100%',
    },
    cardTrip: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 10,
        width: '100%',
    },
    content: {
        display: 'flex',
        paddingVertical: 8,
        paddingHorizontal: 0,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        flexDirection: 'row',
        width: '100%',
    }, 
    information: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 12,
    },
    iconArrowRigth: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        alignSelf: 'center',
    },
    line: {
        height: 0,               
        width: '100%',
        backgroundColor: '#CFCFCF',
    },
})