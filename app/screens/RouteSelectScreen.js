
import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const nursingHomes = ['행복요양원', '편안한집', '사랑노인복지센터'];

export default function RouteSelectScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>요양원 목록에서 배송 루트를 선택하세요:</Text>
      <FlatList
        data={nursingHomes}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Button title={item} onPress={() => navigation.navigate('DeliveryProgress', { selected: item })} />
        )}
      />
    </View>
  );
}
