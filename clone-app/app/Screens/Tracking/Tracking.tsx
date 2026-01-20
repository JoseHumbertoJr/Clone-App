import { HeaderArrowLargeTitle } from "@/components/Headers/headerArrowBackLargeTitle";
import { Text, View } from "react-native";
import { styles } from "./ThemeTracking";


export default function Tracking(){
    return(
        <View>
            <HeaderArrowLargeTitle title="Stolen vehicle tracking"/>
            <View  style={styles.description}>
                <Text>Find your vehicle in case of theft with the help of Toyota's Support Center. Follow the steps below to activate the service:</Text>
                <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        <Text style={styles.step}>1</Text>
                    </View>
                    <View style={styles.stepItem}>
                        <View><Text style={styles.stepTitle}>Service request</Text></View>
                        <Text>Request the service through the app or call center.</Text>
                    </View>
                </View>
                                <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        <Text style={styles.step}>2</Text>
                    </View>
                    <View style={styles.stepItem}>
                        <View><Text style={styles.stepTitle}>Identity confirmation</Text></View>
                        <Text>The Support Center will contact you to verify your identity. Once confirmed, the tracking request will begin.</Text>
                    </View>
                </View>
                                <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        <Text style={styles.step}>3</Text>
                    </View>
                    <View style={styles.stepItem}>
                        <View><Text style={styles.stepTitle}>Tracking started</Text></View>
                        <Text>Once tracking is activated, if you have Connected Insurance, the location will be shared with your insurer to aid recovery. Otherwise, the Support Center will share the last recorded location of your vehicle with you.</Text>
                    </View>
                </View>
            </View>
            <View style={styles.containerTracking}>
                <View>
                    <View>
                        <Text>Tracking inactive</Text>
                    </View>
                    <View>
                        <Text>You haven’t requested the stolen vehicle tracking service.</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
