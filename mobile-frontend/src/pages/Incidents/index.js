import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents(){
    const [incidents, setIncdidents] = useState([]);
    const [total, setTotal] = useState(0);
    const navigation = useNavigation();

    function navigateToDetail(incident){
        navigation.navigate('Detail', { incident });
    }

    async function loadIncidents(){
        const resp = await api.get('/incidents');

        setIncdidents(resp.data);
        setTotal(resp.headers['x-total-count']);
    }

    useEffect(()=>{
        loadIncidents();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total of <Text style={styles.headerTextBold}>{total} cases</Text>.
                </Text>
            </View>

            <Text style={styles.title}>Welcome!</Text>
            <Text style={styles.description}>Choose one of those cases below and save the day.</Text>

            <FlatList
                style={styles.incidentList} 
                data={incidents}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: incident })=>(
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG: </Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>
                        <Text style={styles.incidentProperty}>CASE: </Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>
                        <Text style={styles.incidentProperty}>VALUE: </Text>
                        <Text style={styles.incidentValue}>
                            {Intl.NumberFormat('pt-BR', { 
                                style: 'currency', 
                                currency: 'BRL' 
                            }).format(incident.value)}
                        </Text>
                        <TouchableOpacity style={styles.detailsButton} onPress={()=> navigateToDetail(incident)}>
                            <Text style={styles.detailsButtonText}>See more details</Text>
                            <Feather name="arrow-right" sieze={16} color="#E02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}