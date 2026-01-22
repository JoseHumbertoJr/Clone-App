import IconPhoneBlack from "@/assets/images/icons/phoneBlack";
import IconStatusDisable from "@/assets/images/icons/statusDisable";
import { HeaderArrowLargeTitle } from "@/components/Headers/headerArrowBackLargeTitle";
import { colors } from '@/constants/theme/colors';
import { typographyStyles } from '@/constants/theme/typographyStyles';
import { Pressable, Text, View } from "react-native";
import { styles } from "./ThemeTracking";

type ButtonProps = {
  onPress: () => void;
};

export default function Tracking({onPress}: ButtonProps) {
    return (
        <View>
            <HeaderArrowLargeTitle title="Stolen vehicle tracking" />
            <View style={styles.description}>
                <Text style={[typographyStyles.bodySmall, { color: colors.gray400 }]}>Find your vehicle in case of theft with the help of Toyota's Support Center. Follow the steps below to activate the service:</Text>
                <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        <Text style={styles.step}>1</Text>
                    </View>
                    <View style={styles.stepItem}>
                        <View><Text style={[styles.stepTitle, typographyStyles.titleSmall]}>Service request</Text></View>
                        <Text style={[typographyStyles.bodySmall, { color: colors.gray400 }]}>Request the service through the app or call center.</Text>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        <Text style={styles.step}>2</Text>
                    </View>
                    <View style={styles.stepItem}>
                        <View><Text style={[styles.stepTitle, typographyStyles.titleSmall]}>Identity confirmation</Text></View>
                        <Text style={[typographyStyles.bodySmall, { color: colors.gray400 }]}>The Support Center will contact you to verify your identity. Once confirmed, the tracking request will begin.</Text>
                    </View>
                </View>
                <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        <Text style={styles.step}>3</Text>
                    </View>
                    <View style={styles.stepItem}>
                        <View><Text style={[styles.stepTitle, typographyStyles.titleSmall]}>Tracking started</Text></View>
                        <Text style={[typographyStyles.bodySmall, { color: colors.gray400 }]}>Once tracking is activated, if you have Connected Insurance, the location will be shared with your insurer to aid recovery. Otherwise, the Support Center will share the last recorded location of your vehicle with you.</Text>
                    </View>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.containerTracking}>
                    <View style={styles.containerBody}>
                        <View style={styles.cardTracking}>
                            <View style={styles.titleContainer}>
                                <IconStatusDisable size="8"/>
                                <Text style={typographyStyles.titleMedium}>Tracking inactive</Text>
                            </View>
                            <View>
                                <Text style={[typographyStyles.bodySmall, typographyStyles.labelMedium,{ color: colors.gray400 }]}>You haven’t requested the stolen vehicle tracking service.</Text>
                            </View>
                            <Pressable onPress={onPress} style={styles.trackingButton}>
                                <Text style={[typographyStyles.labelLarge, {color: colors.white}]}>Request tracking</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
                <View style={styles.callCenterButton}>
                    <IconPhoneBlack size="16"/>
                    <Pressable><Text style={typographyStyles.titleMedium}>Call Center</Text></Pressable>
                </View>
            </View>
        </View>
    )
}
