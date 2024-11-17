/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, FlatList, Image, Pressable, Linking } from 'react-native';
import product from '~/data/Amazon products search.json';
const Page = () => {
  const products = product.slice(0, 20);

  return (
    <View className="m-3">
      <FlatList
        data={products}
        contentContainerClassName="p-3 gap-2"
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.asin}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => Linking.openURL(item.url)}
            className="flex-row items-center gap-3 bg-white p-3">
            <Image source={{ uri: item.image }} className="h-20 w-20" />
            <Text className="flex-1" numberOfLines={4}>
              {item.name}
            </Text>

            <Text>${item.final_price}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default Page;


// Standout12345benjaminchidera;