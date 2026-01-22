
import { ScrollView } from 'react-native';
import SpeedAlert from './Screens/SpeedAlert/speedAlert';

export default function VehicleScreen() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <SpeedAlert/>
    </ScrollView>
  );
}
