import Ionicons from '@expo/vector-icons/Ionicons';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import { Colors } from './Colors';

export function Item({ name, avatarUrl, talk, company, id, onPress }) {
    return (
        <View style={styles.container}>
            <TouchableHighlight
                underlayColor={Colors.touchableUnderlay}
                onPress={() => {
                    onPress(id);
                }}>
                <View style={styles.innerContainer}>
                    <Image style={styles.image} source={{ uri: avatarUrl }} />
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>
                            {name}
                        </Text>
                        <Text style={styles.subtitle}>{talk}</Text>
                        <Text style={{ color: Colors.secondaryLabel, }}>
                            {company}
                        </Text>
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Ionicons size={24} color={Colors.secondaryLabel} name="ios-chevron-forward" />
                    </View>
                </View>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 8,
        flex: 1,
        marginHorizontal: 8,
        borderRadius: 10,
        overflow: "hidden",
        alignItems: "stretch",
        backgroundColor: Colors.card,
    },
    innerContainer: {
        paddingHorizontal: 12,
        paddingVertical: 12,
        flex: 1,
        flexDirection: "row",
    },
    textContainer: {
        paddingHorizontal: 8,
        flex: 1,
    },
    image: {
        width: 100,
        borderRadius: 8,
        height: 100
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        paddingBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        paddingBottom: 8
    }
})
