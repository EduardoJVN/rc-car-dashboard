import Videoview from '@/src/components/VideoView';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
export default function VideoScreen() {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider style={{ flex: 1, paddingTop: insets.top }}>
        <View className='flex w-full h-full bg-blue-50'>
            <Videoview />
        </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, },
  map: { flex: 1 },
  content: {
    minHeight: Dimensions.get('window').height * 0.5,
    maxHeight: Dimensions.get('window').height * 0.9,
    padding: 16,
    flexGrow: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});