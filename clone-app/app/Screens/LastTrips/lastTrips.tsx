import IconChevronRight from "@/assets/images/icons/chevron_right";
import HeaderArrowBack from "@/components/Headers/headerArrowBack";
import { StyleSheet, View } from "react-native";


export default function LastTrips() {
    return (
        <View>
            <HeaderArrowBack title="Last Trips" />
            <View style={styles.body}>
                <View style={styles.bodyContainer}>
                    <View style={styles.tripList}>
                        <View style={styles.card}>
                            <View style={styles.cardTrip}>
                                <View style={styles.content}>
                                    <View style={styles.information}>
                                        <text>Start Point: Street Name that is very long, 1.234</text>
                                        <View style={styles.frame}>
                                            <text>10/04/2022 • From 13:00 to 15:00</text>
                                        </View>
                                    </View>
                                    <View style={styles.iconEnter}>
                                        <IconChevronRight size="24" />
                                    </View>
                                </View>
                            </View>
                            <hr style={styles.line}></hr>
                            <View>
                            </View>
                        </View>
                        <View style={styles.card}>
                            <View style={styles.cardTrip}>
                                <View style={styles.content}>
                                    <View style={styles.information}>
                                        <text>Start Point: Street Name that is very long, 1.234</text>
                                        <View style={styles.frame}>
                                            <text>10/04/2022 • From 13:00 to 15:00</text>
                                        </View>
                                    </View>
                                    <View style={styles.iconEnter}>
                                        <IconChevronRight size="24" />
                                    </View>
                                </View>
                            </View>
                            <hr style={styles.line}></hr>
                            <View>
                            </View>
                        </View>
                        <View style={styles.card}>
                            <View style={styles.cardTrip}>
                                <View style={styles.content}>
                                    <View style={styles.information}>
                                        <text>Start Point: Street Name that is very long, 1.234</text>
                                        <View style={styles.frame}>
                                            <text>10/04/2022 • From 13:00 to 15:00</text>
                                        </View>
                                    </View>
                                    <View style={styles.iconEnter}>
                                        <IconChevronRight size="24" />
                                    </View>
                                </View>
                            </View>
                            <View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        width: '100%',
        paddingTop: 8,
        paddingRight: 24,
        paddingBottom: 24,
        paddingLeft: 24,
        alignItems: 'flex-start',
    },

    bodyContainer: {
        width: '100%',
        alignItems: 'flex-start',
        flexDirection: 'column',
        gap: 20,
    },

    tripList: {
        width: '100%',
        flexDirection: 'column', 
        gap: 16,
        alignItems: 'flex-start',
    },

    card: {
        width: '100%',
        alignItems: 'flex-start',
        flexDirection: 'column',
        gap: 16,
    },

    cardTrip: {
        width: '100%',
        alignItems: 'flex-start',
        paddingVertical: 12,
        paddingHorizontal: 0,
        display: 'flex', 
        flexDirection: 'column',
        gap: 10,
    },

    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
        display: 'flex',
    },

    information: {
        alignItems: 'flex-start',
        gap: 12,
        display: 'flex', 
        flexDirection: 'column',
    },

    frame: {
        display: 'flex', 
        alignItems: 'center', 
        gap: 4,
    },

    iconEnter: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        display: 'flex', 
        gap: 10,
    },

    line: {
        height: 1,               
        width: '100%',
        backgroundColor: '#CFCFCF',
    },
})