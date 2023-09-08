import React, { useRef } from 'react';
import { StyleSheet, Text, View, Animated, TouchableOpacity, Modal } from 'react-native';

const Picker = props => {

    const itemHeight = 40

    const scrollY = useRef(new Animated.Value(0)).current;

    const { data, selectText, visible, setVisible, onIndexChange } = props;

    const renderItem = ({ item, index }) => {

        const inputRange = [
            (index - 2) * itemHeight,
            (index - 1) * itemHeight,
            index * itemHeight,
        ];

        const scale = scrollY.interpolate({
            inputRange,
            outputRange: [0.8, 1, 0.8],
        });

        return (
            <Animated.View
                style={[
                    { height: itemHeight, transform: [{ scale }] },
                    styles.animatedContainer,
                ]}>
                <Text style={styles.pickerItem}>{item[selectText]}</Text>
            </Animated.View>
        );
    };

    const modifiedItems = ['', ...data, ''];

    const momentumScrollEnd = (
        event,
    ) => {
        const y = event.nativeEvent.contentOffset.y;
        const index = Math.round(y / itemHeight);
        props.onIndexChange(index);
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
            <View style={{ backgroundColor: '#fff', height: 250, bottom: 0, position: 'absolute', width: '100%' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 18 }}>
                    <TouchableOpacity style={styles.button} onPress={() => { setVisible(false) }}>
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: itemHeight * 3, width: '100%' }}>
                    <Animated.FlatList
                        data={modifiedItems}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                        snapToInterval={itemHeight}
                        onMomentumScrollEnd={momentumScrollEnd}
                        scrollEventThrottle={16}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                            { useNativeDriver: true },
                        )}
                        getItemLayout={(_, index) => ({
                            length: itemHeight,
                            offset: itemHeight * index,
                            index,
                        })}
                    />
                    <View style={[styles.indicatorHolder, { top: itemHeight }]}>
                        <View style={[{ marginTop: itemHeight }]} />
                    </View>
                </View>
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
    indicatorHolder: {
        position: 'absolute',
        width: '90%',
        zIndex: -1,
        backgroundColor: '#e1e1e0d9',
        alignSelf: 'center',
        borderRadius: 10
    },
    animatedContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99
    },
    buttonText: {
        color: '#007AFF',
        fontWeight: '600',
        fontSize: 16
    }
});