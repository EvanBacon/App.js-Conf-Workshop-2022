import { FlatList, StyleSheet } from 'react-native';
import { Colors } from './Colors';

import { Data } from './Data';
import { Item } from './Item';


export function List({ onPress }) {
    return (
        <FlatList
            data={Data}
            renderItem={({ item }) => <Item {...item} onPress={onPress} />}
            style={styles.container}
            contentContainerStyle={{ paddingTop: 4 }}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundColor,
        padding: 8,
    }
});
