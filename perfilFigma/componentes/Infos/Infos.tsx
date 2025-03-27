import { Text, View, StyleSheet } from 'react-native';
import Button from '../Button/Button';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';

export default function Infos() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Júnior', value: 'junior' },
        { label: 'Pleno', value: 'pleno' },
        { label: 'Sênior', value: 'senior' }
    ]);
    return (
        <View style={styles.post}>
            <Text style={styles.title}>Informações do Perfil</Text>
            <View>
                <Text style={styles.information}>Email: rirebodev@gmail.com</Text>
                <Text style={styles.information}>Telefone: (13) 99576-0909 </Text>

                
                <DropDownPicker style={styles.ddp} placeholder='Escolha sua senioridade'
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                />
                
                <Button />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    post: {
        position: 'relative',
        top: '20%',
    },
    title: {
        color: '#000',
        fontSize: 24,
        position: 'static',
        padding: 10
    },
    information: {
        top: 21,
        fontSize: 20,
        padding: 14,
        borderColor: '#6F9CFF',
        borderStyle: 'solid',
        borderWidth: 1.5
    },
    ddp: {
        borderColor: '#6F9CFF',
        borderStyle: 'solid',
        borderWidth: 1.5 ,
        top: 35,
        width: '90%',
        alignItems: 'center',
        left: 20
    }
})