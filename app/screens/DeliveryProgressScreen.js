
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DeliveryProgressScreen({ navigation, route }) {
  const selected = route.params?.selected || '선택 없음';

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 18 }}>현재 배송 중: {selected}</Text>
      <Button title="운행 거리 입력" onPress={() => navigation.navigate('DistanceInput')} />
    </View>
  );
}
