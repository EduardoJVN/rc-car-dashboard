import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider style={{ flex: 1, paddingTop: insets.top }}>
        <View className='flex w-full h-full bg-blue-50'>
            <View className='w-full h-20 bg-red-500'>
                <Text>Header</Text>
            </View>

            <View className='flex-1 w-full bg-red-50'>
                <Text>context aaaaa</Text>
            </View>

            <View className='w-full h-20 bg-red-100'>
                <Text>footer</Text>
            </View>
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