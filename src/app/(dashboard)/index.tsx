import ProgressBar from '@/src/components/ProgressBar';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider style={{ flex: 1, paddingTop: insets.top }}>
        <View className='flex w-full h-full bg-blue-50'>
            <View className='flex flex-row items-center justify-between w-full h-20 px-4 bg-red-500'>
                <FontAwesome name="battery-4" size={24} color="black" />
                <FontAwesome name="ellipsis-v" size={24} color="black" />
            </View>

            <View className='flex-1 w-full h-full bg-red-50'>
                <View className='flex flex-row h-full'>
                    <View className='w-[10%] h-full bg-blue-50'>
                        <Text>Left</Text>
                    </View>
                    <View className='w-[80%] h-full bg-blue-100'>
                        <Text>Center</Text>
                        <ProgressBar />
                    </View>
                    <View className='w-[10%] h-full bg-blue-50 flex items-center justify-center'>
                        <View className='flex justify-center flex-1 w-full h-full'>
                            <Button title="AWD" onPress={() => alert('AWD')} />
                        </View>
                        <View className='flex justify-center flex-1 w-full h-full'>
                            <Button title="FWD" onPress={() => alert('FWD')} />
                        </View>
                        <View className='flex justify-center flex-1 w-full h-full'>
                            <Button title="RWD" onPress={() => alert('RWD')} />
                        </View>
                    </View>
                </View>
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