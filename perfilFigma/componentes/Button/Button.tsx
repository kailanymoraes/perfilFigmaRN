import { Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Button() {
    return (
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Editar perfil</Text>
        </TouchableOpacity>
      
    );
}

const styles = StyleSheet.create({ 
    button: {
        width: 200,
        borderRadius: 8,
        padding: 8,
        backgroundColor: '#4070D9',
        alignSelf: 'center',
        marginHorizontal: 12,
        top: '30%'
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight:'bold',
        fontSize: 18
    }
})