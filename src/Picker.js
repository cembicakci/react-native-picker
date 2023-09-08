import React from 'react';
import {
    FlatList,
    ListRenderItemInfo,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const Picker = props => {

    const itemHeight = 40

    const { items, onIndexChange } = props;

    const renderItem = ({ item }) => {
        return (
            <Text style={[styles.pickerItem, { height: itemHeight }]}>{item.city}</Text>
        );
    };

    return (
        <View style={{ height: itemHeight * 3 }}>
            <FlatList
                data={items}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default Picker;

const styles = StyleSheet.create({
    pickerItem: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        color: '#000',
    },
});