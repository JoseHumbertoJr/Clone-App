import { colors } from '@/constants/theme/colors';
import { layout } from '@/constants/theme/layout';
import { spacing } from '@/constants/theme/spacing';
import { typography } from '@/constants/theme/typography';
import { typographyStyles } from '@/constants/theme/typographyStyles';
import { Image, StyleSheet, Text, View } from 'react-native';


export function VehicleInfos() {
    return (
        <View style={{marginTop: spacing.xxl, padding: spacing.xl}}>
            <View style={styles.updateScreen}>
                <Text style={typographyStyles.labelSmallLink}>Updating...</Text>
                <Image
                source={require('@/assets/images/VehicleStatus/refresh.svg')}
                style={{ width: spacing.xlg}}
                resizeMode="contain"
                />
            </View>
            <View style={{flexDirection: 'row', gap: spacing.lg, justifyContent: 'center'}}>
                <View style={styles.cardInfos}>
                    <Image
                    source={require('@/assets/images/VehicleStatus/Speed.svg')}
                    style={{ width: spacing.xlg}}
                    resizeMode="contain"
                    />
                    <Text style={typographyStyles.labelSmall}>Mileage</Text>
                    <View style={{flexDirection: 'row', gap: spacing.xs}}>
                         <Text  style={typographyStyles.titleSmall}>19.712 Km</Text>
                        <Text style={typographyStyles.labelSmall}>▲12 Km</Text>
                    </View>

                </View>
                <View style={styles.cardInfos}>
                    <Image
                    source={require('@/assets/images/VehicleStatus/directions_car.svg')}
                    style={{ width: spacing.xlg}}
                    resizeMode="contain"
                    />
                    <Text style={typographyStyles.labelSmall}>Engine status</Text>
                    <View style={[layout.rowCenter,{ gap: spacing.xs}]}>
                        <Image
                            source={require('@/assets/images/VehicleStatus/Ellipse.svg')}
                            style={{ width: spacing.xlg}}
                            resizeMode="contain"
                            />
                        <Text  style={typographyStyles.titleSmall}>On</Text>
                        <Text  style={typographyStyles.labelSmall}>14 min ago</Text>
                    </View>

                </View>
            </View>
            <View style={styles.CardFuel}>
                <View style={[layout.rowCenter,{ gap: spacing.xs}]}>
                    <Image
                    source={require('@/assets/images/VehicleStatus/fuel.svg')}
                    style={{ width: spacing.xlg}}
                    resizeMode="contain"
                    />
                    <Text style={typographyStyles.labelSmall}>Remaining Fuel</Text>
                </View>
                <Image
                source={require('@/assets/images/VehicleStatus/FuelBar.png')}
                style={{ width: '100%'}}
                resizeMode="contain"
                />
                <View style={{flexDirection: 'row', gap: spacing.lg, justifyContent: 'space-between'}}>
                        <View style={layout.rowCenter}>
                            <Image
                            source={require('@/assets/images/VehicleStatus/laurel1.svg')}
                            style={{ width: spacing.xlg}}
                            resizeMode="contain"
                            />
                            <Text style={typographyStyles.titleSmall}>5</Text>
                            <Image
                            source={require('@/assets/images/VehicleStatus/laurel2.svg')}
                            style={{ width: spacing.xlg}}
                            resizeMode="contain"
                            />
                            <Text style={typographyStyles.labelMedium}>500 / 1.500 XP</Text>
                        </View>
                    <Image
                    source={require('@/assets/images/VehicleStatus/chevron_right.svg')}
                    style={{ width: spacing.xlg}}
                    resizeMode="contain"
                    />
                </View>
            </View>
            <View style={[layout.rowCenter, styles.cardDiagnostic]}>
                <View style={styles.statusSucess}>
                    <Image
                        source={require('@/assets/images/VehicleStatus/fix.svg')}
                        resizeMode="contain"
                        />
                </View>
                    <View style={[layout.columnCenter, {alignItems: 'flex-start', paddingTop: spacing.xl, paddingBottom: spacing.xl}]}>
                        <Text style={typographyStyles.labelSmall}>Car diagnostic</Text>
                        <Text style={typographyStyles.titleSmall}>No issues identified</Text>
                    </View>
                    <Image
                            source={require('@/assets/images/VehicleStatus/chevron_right.svg')}
                            style={{paddingInline: spacing.xl}}
                            resizeMode="contain"
                            />
            </View>
            <View style={layout.columnCenter}>
                <Image
                        source={require('@/assets/images/VehicleStatus/Mapimage.png')}
                        style={{width: '100%'}}
                        resizeMode="contain"
                        />
                <View style={styles.cardMaps}>
                    <View style={[ layout.rowCenter,{gap: spacing.xs}]}>    
                        <Image
                        source={require('@/assets/images/VehicleStatus/seta_maps.svg')}
                        resizeMode="contain"
                        />
                        <Text style={typographyStyles.titleSmall}>Current location</Text>
                    </View>
                    <Text style={typographyStyles.labelSmall}>Near by</Text>
                    <Text style={typographyStyles.bodySmall}>Rua Treze de Maio, 1232 - Bairro São Paulo, SP</Text>
                </View>
            </View>
        </View>
    )
} 

const styles = StyleSheet.create({
    updateScreen: {
        flexDirection: "row",
        alignItems: "center",
        paddingTop: spacing.xl,
        paddingBottom: spacing.xl,
        justifyContent: 'center',
        fontFamily: typography.family.regular,
    },
    cardInfos: {
        width: '50%',
        flexDirection: "column",
        backgroundColor: colors.gray50,
        padding: spacing.lg,
        borderRadius: spacing.xs,
        gap: spacing.xs
    },
    CardFuel: {
        width: "100%",
        backgroundColor: colors.gray50,
        borderRadius: spacing.xs,
        padding: spacing.lg,
        marginTop: spacing.xlg,
        gap: spacing.xs
    },
    cardDiagnostic: {
        borderRadius: spacing.xs,
        backgroundColor: colors.gray50,
        justifyContent: 'space-between',
        marginTop: spacing.xlg,
        marginBottom: spacing.xlg,
    },
    statusSucess : {
        backgroundColor: colors.success,
        borderRadius: spacing.xs,
        height: '100%', 
        width: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: spacing.lg
    },
    cardMaps: {
        backgroundColor: colors.gray50,
        borderBottomLeftRadius: spacing.xs,
        borderBottomRightRadius: spacing.xs,
        gap: spacing.xs,
        width: '100%',
        padding: spacing.lg
    }
})