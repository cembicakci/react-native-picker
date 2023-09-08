import React from 'react';
import {
    FlatList,
    ListRenderItemInfo,
    Modal,
    StyleSheet,
    Text,
    View,
} from 'react-native';

const Picker = props => {

    const itemHeight = 40

    const { data, selectText, visible, setVisible, onIndexChange } = props;

    const renderItem = ({ item }) => {
        return (
            <Text style={[styles.pickerItem, { height: itemHeight }]}>{item[selectText]}</Text>
        );
    };

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={() => {
                setVisible(!visible);
            }}
        >

            <View style={{ height: itemHeight * 3 }}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                />
            </View>

        </Modal>
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