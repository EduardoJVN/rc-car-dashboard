import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
export default function DefaultView() {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider style={{ flex: 1, paddingTop: insets.top }}>
        <View className='flex w-full h-full '>
           <Text className='mt-4 text-2xl font-bold text-center'>Estado del Vehículo</Text>
        </View>
    </SafeAreaProvider>
  );
}