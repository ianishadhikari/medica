import {View, Text, StyleSheet, Animated, Image} from 'react-native';
import { use, useEffect, useRef } from 'react';
import { useRouter } from 'expo-router';

export default function SplashScreen(){

    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0.5)).current;
    const router = useRouter();

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
        Animated.spring(scaleAnim, {
            toValue: 1,
            tension: 10,
            friction: 2,
            useNativeDriver: true,
    }),
    ]).start();
    const timer = setTimeout(() => {
        router.replace('/auth');
    },2000);
    
    return () => clearTimeout(timer);

}, []);

    return (
    <View style={styles.container}>
        <Animated.View style={[
            styles.iconContainer,
            {
                opacity: fadeAnim,
                transform: [{scale:scaleAnim}]
            }
        ]}>
<Image
  source={require('../assets/images/logo.png')}
  style={styles.logo}
/>
 <Text style={styles.appName}>Medica</Text>
        </Animated.View>

    </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#6ab7ff',
        alignItems: 'center',
        justifyContent: 'center'
    },

iconContainer: {
 alignItems: 'center',
 justifyContent: 'center',
},
appName: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10,
    letterSpacing: 1, 
    textAlign: 'center',
},
logo: {
    width: 200,  
    height: 200,
    resizeMode: 'contain',
    marginLeft: 75,
    
  },
});
