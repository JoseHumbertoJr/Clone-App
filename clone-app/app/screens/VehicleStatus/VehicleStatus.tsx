import { colors } from '@/constants/theme/colors';
import { layout } from '@/constants/theme/layout';
import { spacing } from '@/constants/theme/spacing';
import { typographyStyles } from '@/constants/theme/typographyStyles';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const HEADER_HEIGHT = SCREEN_HEIGHT * 0.4;

export function VehicleStatus() {
  return (
    <LinearGradient
      colors={['#000000', '#333333']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.background}
    >
    <SafeAreaView style={styles.safeArea}>
        <View style={layout.rowCenter}>
            <Text style={[typographyStyles.bodyMediumStrong,{color: colors.gray75}]}>
                Hilux Conquest
            </Text>
            <Image
            source={require('@/assets/images/VehicleStatus/setinha.svg')}
            style={{ width: spacing.xlg}}
            resizeMode="contain"
            />
        </View>

        <Text style={[typographyStyles.titleLarge, {color: colors.white,}]}>
            Nickname
        </Text>

        <View style={styles.bottomRow}>
            <View style={layout.rowCenter}>
                <Text style={[typographyStyles.labelSmall, {color: colors.gray75}]}>
                Specifications
                </Text>
                <Image
                source={require('@/assets/images/VehicleStatus/info.svg')}
                style={{ width: spacing.xlg}}
                resizeMode="contain"
                />
            </View>

            <TouchableOpacity style={layout.columnCenter}>
                 <Image
            source={require('@/assets/images/VehicleStatus/pencil.svg')}
            style={{ width: spacing.xlg}}
            resizeMode="contain"
            />
            <Text style={[typographyStyles.bodySmallStrong, {color: colors.white}]}>
                Customize
            </Text>
            </TouchableOpacity>
        </View>
         <Image
      source={require('@/assets/images/VehicleStatus/hillux.png')}
      style={styles.carImage}
      resizeMode="contain"
    />
    </SafeAreaView>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
    background: {
    width: '100%',
    height: HEADER_HEIGHT, 
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    position: "relative"
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: spacing.xlg,
    paddingTop: spacing.xxl,
  },
  carImage: {
  width: '100%',
  height: 200,
  position: 'absolute',
  top: HEADER_HEIGHT - 100,
  zIndex: 999
  },
  container: {
    paddingHorizontal: spacing.xlg,
    flex: 1,
    paddingTop: spacing.lg,
    paddingBottom: spacing.lg,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
