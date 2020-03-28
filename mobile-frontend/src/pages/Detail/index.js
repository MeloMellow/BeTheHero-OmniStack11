import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, TouchableOpacity, Text, Image } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Detail(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity>
                    <Feather name="arrow-left" size={28} color="#E82041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={styles.incidentProperty}>ONG: </Text>
                <Text style={styles.incidentValue}>APAD</Text>
                <Text style={styles.incidentProperty}>CASE: </Text>
                <Text style={styles.incidentValue}>Accident</Text>
                <Text style={styles.incidentProperty}>VALUE: </Text>
                <Text style={styles.incidentValue}>R$ 120,00</Text>
                <View style={styles.contactBox}>
                    <Text style={styles.heroTitle}>Save the day!</Text>
                    <Text style={styles.heroTitle}>Be the hero of this case.</Text>

                    <Text style={styles.heroDescription}>Contact:</Text>

                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.action} onPress={()=>{}} >
                            <Text style={styles.actionText}>WhatsApp</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.action} onPress={()=>{}} >
                            <Text style={styles.actionText}>E-mail</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}