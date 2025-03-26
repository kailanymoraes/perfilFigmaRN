import { Text, View, StyleSheet, Image} from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Image style={styles.imageIcon}
            source={require('./../../assets/noyaIcon.png')}
            />
            <View style={styles.nomeIdade}>
                <Text style={styles.nameText}>Matheus Ribeiro</Text>
                <Text style={styles.ageText}>20 anos</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({ 
    header: {
        width: '100%',
        height:170,
        backgroundColor: '#b9d1d1',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10
      },
      nomeIdade: {
        position: 'relative',
        top: '40%'
      },
      nameText: {
        color: '#000',
        fontSize: 24,
        position: 'relative',
        left: '10%'

      },
      imageIcon: {
        position: 'relative',
        right: '30%',
        top: '86%'
      },
      ageText: {
        color: '#000',
        fontSize: 20,
        position: 'relative',
        left: '10%'
      }
})