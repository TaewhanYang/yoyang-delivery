import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

export default function IndexScreen() {
  useEffect(() => {
    console.log("✅ THIS IS MY REAL APP - FROM INDEX");
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>🚚 Welcome to Yoyang Delivery App!</Text>
    </View>
  );
}
