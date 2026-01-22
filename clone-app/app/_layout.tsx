import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';

export default function Layout() {
  const [loaded] = useFonts({
    'ToyotaType-Light': require('../assets/fonts/ToyotaType-Light.ttf'),
    'ToyotaType-Regular': require('../assets/fonts/ToyotaType-Regular.ttf'),
    'ToyotaType-Bold': require('../assets/fonts/ToyotaType-Bold.ttf'),
    'ToyotaType-Semibold': require('../assets/fonts/ToyotaType-Semibold.ttf'),
    'ToyotaType-book': require('../assets/fonts/ToyotaType-Book.ttf'),
    'ToyotaType-Black': require('../assets/fonts/ToyotaType-Black.ttf'),
  });

  if (!loaded) return null;

  return <Slot />;
}