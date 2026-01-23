import IconChevronRight from "@/assets/images/icons/chevron_right";
import { HeaderArrowLargeTitle } from "@/components/Headers/headerArrowBackLargeTitle";
import { colors } from "@/constants/colors";
import { typographyStyles } from "@/constants/theme";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, Switch, Text, View } from "react-native";
import { styles } from "./ThemeSpeedAlert";

export default function SpeedAlert() {
    const [isEnabled, setIsEnabled] = useState(false);
    return (
        <View>
            <HeaderArrowLargeTitle title="Speed Alert" />
            <View style={styles.speedContainer}>
                <Text style={typographyStyles.titleMedium}>Speed alert setting</Text>
                <View style={styles.card}>
                    <View style={{width: '100%'}}>
                        <View style={styles.cardContainer}>
                            <View style={styles.cardBody}>
                                <Text style={typographyStyles.titleSmall}>Alert name</Text>
                                <Text style={typographyStyles.labelSmall}>100 km/h</Text>
                                <Text style={typographyStyles.labelSmall}>Every time</Text>
                            </View>
                            <View style={styles.cardToggle}>
                                <Switch
                                    value={isEnabled}
                                    onValueChange={setIsEnabled}
                                    trackColor={{ false: "#ccc", true: "#EB0A1E" }}
                                    thumbColor={isEnabled ? "#ffffff" : "#ffffff"}                                    
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <Text style={typographyStyles.titleMedium}>Speed alert historical behavior</Text>
                <View style={styles.cardDetails}>
                    <View style={styles.carDetailsContainer}>
                        <View style={styles.cardDetailsBody}>
                            <Text style={typographyStyles.titleSmall}>Speeding details</Text>
                            <Text style={[typographyStyles.labelSmall, { color: colors.gray400 }]}>Speed statistics and travel information</Text>
                        </View>
                        
                        <View style={styles.cardToggle}>
                            <Pressable onPress={() => router.push("/Screens/SpeedAlert/speedDetails")}>
                                <IconChevronRight size="20" />
                            </Pressable>                            
                        </View>                        
                    </View>
                </View>                
            </View>
        </View>
    )
}