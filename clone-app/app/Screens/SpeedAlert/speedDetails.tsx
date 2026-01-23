import IconChevronRight from "@/assets/images/icons/chevron_right";
import HeaderArrowBack from "@/components/Headers/headerArrowBack";
import { colors } from "@/constants/colors";
import { typographyStyles } from "@/constants/theme";
import { Text, View } from "react-native";
import { styles } from "./ThemeSpeedDetails";

export default function SpeedDetails() {
    return(
        <View>
            <HeaderArrowBack title="Speeding details"></HeaderArrowBack>
            <View style={styles.bodyContainer}>
                <View style={styles.container}>
                    <View style={styles.tripList}>
                        {Array.from({ length: 3 }).map((_, index) => (
                        <View style={styles.card}>
                            <View style={styles.cardTrip}>
                                <View style={styles.content}>
                                    <View style={styles.information}>
                                        <Text style={typographyStyles.titleSmall}>Start Point: Street Name that is very long, 1.234</Text>
                                        <Text style={typographyStyles.titleSmall}>End Point:Street Name that is very long, 1.234</Text>
                                        <View>
                                            <Text style={[typographyStyles.labelMedium, {color: colors.gray400}]}>10/04/2022 • From 13:00 to 14:00</Text>
                                            <Text style={[typographyStyles.labelMedium, {color: colors.gray400}]}>Speed alert set at 70 km/h</Text>
                                        </View>
                                    </View>
                                    <View style={styles.iconArrowRigth}>
                                        <IconChevronRight size="24"/>
                                    </View>
                                </View>
                                <View>
                                </View>                                   
                                {index < 2 && <hr style={styles.line}></hr>}                            
                            </View>                            
                        </View>))}
                    </View>                    
                </View>
            </View>
        </View>
    )
}