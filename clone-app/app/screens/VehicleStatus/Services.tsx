import { colors } from '@/constants/theme';
import { layout } from '@/constants/theme/layout';
import { spacing } from '@/constants/theme/spacing';
import { typographyStyles } from '@/constants/theme/typographyStyles';
import { Image, StyleSheet, Text, View } from 'react-native';

export function Services() {
    return (
        <View style={styles.container}>
            <View style={[layout.rowCenter,styles.cardService]}>
                <View style={[layout.rowCenter, {gap: spacing.sm}]}>
                    <Image
                    source={require('@/assets/images/Services/tracking.svg')}
                    resizeMode="contain"
                    />
                    <View style={layout.columnCenter}>
                        <Text style={typographyStyles.titleSmall}>Stolen Vehicle Tracking</Text>
                        <Text style={[typographyStyles.bodySmall, {color: colors.gray400}]}>Locate your stolen vehicle</Text>
                    </View>
                </View>
                <Image
                source={require('@/assets/images/VehicleStatus/chevron_right.svg')}
                resizeMode="contain"
                />
            </View>
            <View style={[layout.rowCenter,styles.cardService]}>
                <View style={[layout.rowCenter, {gap: spacing.sm}]}>
                    <Image
                    source={require('@/assets/images/Services/geofence.svg')}
                    resizeMode="contain"
                    />
                    <View style={layout.columnStart}>
                        <Text style={typographyStyles.titleSmall}>Geofence</Text>
                        <Text style={[typographyStyles.bodySmall, {color: colors.gray400}]}>Create and activate geofences</Text>
                    </View>
                </View>
                <Image
                source={require('@/assets/images/VehicleStatus/chevron_right.svg')}
                resizeMode="contain"
                />
            </View>
            <View style={[layout.rowCenter,styles.cardService]}>
                <View style={[layout.rowCenter, {gap: spacing.sm}]}>
                    <Image
                    source={require('@/assets/images/Services/request_assistance.svg')}
                    resizeMode="contain"
                    />
                    <View style={layout.columnStart}>
                        <Text style={typographyStyles.titleSmall}>24 hour assistance</Text>
                        <Text style={[typographyStyles.bodySmall, {color: colors.gray400}]}>Car emergency management</Text>
                    </View>
                </View>
                <Image
                source={require('@/assets/images/VehicleStatus/chevron_right.svg')}
                resizeMode="contain"
                />
            </View>
            <View style={[layout.rowCenter,styles.cardService]}>
                <View style={[layout.rowCenter, {gap: spacing.sm}]}>
                    <Image
                    source={require('@/assets/images/Services/speed_alert.svg')}
                    resizeMode="contain"
                    />
                    <View style={layout.columnStart}>
                        <Text style={typographyStyles.titleSmall}>Speed alert</Text>
                        <Text style={[typographyStyles.bodySmall]}>Off</Text>
                    </View>
                </View>
                <Image
                source={require('@/assets/images/VehicleStatus/chevron_right.svg')}
                resizeMode="contain"
                />
            </View>
            <View style={[layout.rowCenter,styles.cardService]}>
                <View style={[layout.rowCenter, {gap: spacing.sm}]}>
                    <Image
                    source={require('@/assets/images/Services/wifi.svg')}
                    resizeMode="contain"
                    />
                    <View style={layout.columnStart}>
                        <Text style={typographyStyles.titleSmall}>Wi-Fi Hotspot</Text>
                        <Text style={[typographyStyles.bodySmall, {color: colors.gray400}]}>Use Wi-Fi Hotspot service</Text>
                    </View>
                </View>
                <Image
                source={require('@/assets/images/VehicleStatus/chevron_right.svg')}
                resizeMode="contain"
                />
            </View>
            <View style={[layout.rowCenter,styles.cardService]}>
                <View style={[layout.rowCenter, {gap: spacing.sm}]}>
                    <Image
                    source={require('@/assets/images/Services/last_trips.svg')}
                    resizeMode="contain"
                    />
                    <View style={layout.columnStart}>
                        <Text style={typographyStyles.titleSmall}>Last trips</Text>
                        <Text style={[typographyStyles.bodySmall, {color: colors.gray400}]}>View info about recent trips</Text>
                    </View>
                </View>
                <Image
                source={require('@/assets/images/VehicleStatus/chevron_right.svg')}
                resizeMode="contain"
                />
            </View>
            <View style={[layout.rowCenter,styles.cardService]}>
                <View  style={[layout.rowCenter, {gap: spacing.sm}]}>
                    <Image
                    source={require('@/assets/images/Services/subscription.svg')}
                    resizeMode="contain"
                    />
                    <View style={layout.columnStart}>
                        <Text style={typographyStyles.titleSmall}>Subscriptions</Text>
                        <Text style={[typographyStyles.bodySmall, {color: colors.gray400}]}>See options</Text>
                    </View>
                </View>
                <Image
                source={require('@/assets/images/VehicleStatus/chevron_right.svg')}
                resizeMode="contain"
                />
            </View>
            <View style={[layout.rowCenter,styles.cardService]}>
                <View  style={[layout.rowCenter, {gap: spacing.sm}]}>
                    <Image
                    source={require('@/assets/images/Services/Insurance.svg')}
                    resizeMode="contain"
                    />
                    <View style={layout.columnStart}>
                        <Text style={typographyStyles.titleSmall}>Connected Insurance</Text>
                        <Text style={[typographyStyles.bodySmall, {color: colors.gray400}]}>Insurance information</Text>
                    </View>
                </View>
                <Image
                source={require('@/assets/images/VehicleStatus/chevron_right.svg')}
                resizeMode="contain"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: spacing.xl,
        gap: spacing.xl,
    },
    cardService: {
        justifyContent: 'space-between',
        padding: spacing.lg,
        backgroundColor: colors.gray50,
        borderRadius: spacing.xs
    }
})