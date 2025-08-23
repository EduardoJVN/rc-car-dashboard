import { useFonts } from 'expo-font';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import "../../global.css";

import Videoview from '@/src/components/VideoView';
import { StyleSheet, View } from 'react-native';
import DefaultView from '../components/DefaultView';

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) return null;


  return (
    <GestureHandlerRootView style={{ flex: 1 , backgroundColor: 'red'}}>
      <SafeAreaProvider>
        <View style={[styles.container , {'backgroundColor': 'green'}]}>
          {/* Video de fondo */}
          <Videoview />

          {/* Contenido sobre el video */}
          <View style={styles.overlay}>
            <DefaultView />
          </View>
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    position: 'absolute', // encima del video
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
});