import { VehicleStatus } from '@/app/screens/VehicleStatus/VehicleStatus';
import { ScrollView } from 'react-native';
import { Services } from './screens/VehicleStatus/Services';
import { VehicleInfos } from './screens/VehicleStatus/Vehicle_infos';

export default function VehicleScreen() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <VehicleStatus />
      < VehicleInfos />
      < Services />
    </ScrollView>
  );
}
