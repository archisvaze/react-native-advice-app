MaterialCommunityIcon.loadFont();
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Advice({ advice, adviceId, handleGetAdvice }: { advice: string, adviceId: string, handleGetAdvice: () => void }): JSX.Element {
    return (
        <View style={styles.container}>

            <Text style={styles.number}>ADVICE #{adviceId}</Text>
            <Text style={styles.advice}>{advice}</Text>

            <Pressable style={styles.icon} onPress={() => {
                console.log('handlePress');
                handleGetAdvice();
            }}>
                <MaterialCommunityIcon name="dice-5" size={28} color='black' />
            </Pressable>
        </View >
    );
}

const styles = StyleSheet.create({
    advice: {
        color: '#cee3e9',
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 24,
        letterSpacing: 1,
        textAlign: 'center',
        marginBottom: 40,
        marginTop: 20,

    },
    number: {
        fontSize: 12,
        letterSpacing: 1,
        fontWeight: 'bold',
        color: '#52ffa8'
    },
    container: {
        gap: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    icon: {
        backgroundColor: '#52ffa8',
        paddingHorizontal: 12,
        paddingVertical: 12,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 1000,
        position: 'absolute',
        bottom: '-25%'
    }
})