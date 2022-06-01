import { Image, ScrollView, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

import { Colors } from './Colors';
import { Data } from './Data';


export function Details({ id }) {
    const item = Data.find(item => item.id === id)!;

    return (
        <ScrollView
            style={{
                flex: 1,
                backgroundColor: Colors.backgroundColor,
            }}>
            <View style={{ flex: 1, padding: 20, maxWidth: 1040 }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Image
                        style={{
                            marginVertical: 32,
                            height: 288,
                            maxWidth: 288,
                            borderRadius: 10,
                            flex: 1,
                            aspectRatio: 1,
                        }}
                        source={{ uri: item.avatarUrl }}
                    />
                </View>
                <View style={{ padding: 12 }}>
                    <Animatable.Text
                        animation="fadeInUp"
                        style={{
                            color: Colors.text,
                            fontSize: 36,
                            paddingBottom: 8,
                            fontWeight: 'bold',
                        }}>
                        {item.name}
                        <Text style={{ fontSize: 18, color: Colors.secondaryLabel }}>
                            {'  ' + item.company}
                        </Text>
                    </Animatable.Text>

                    <Animatable.Text
                        animation="fadeInUp"
                        delay={50}
                        style={{ fontSize: 18, color: Colors.secondaryLabel }}>
                        {item.talk}
                    </Animatable.Text>
                </View>
                <View style={{ padding: 12 }}>
                    <Animatable.Text
                        animation="fadeInUp"
                        delay={100}
                        style={{
                            color: Colors.text,
                            fontSize: 24,
                            paddingBottom: 8,
                            fontWeight: 'bold',
                        }}>
                        About
                    </Animatable.Text>
                    <Animatable.Text
                        animation="fadeInUp"
                        delay={150}
                        style={{ color: Colors.secondaryLabel, fontSize: 18 }}>
                        {item.description}
                    </Animatable.Text>
                </View>
            </View>
        </ScrollView>
    );
}
