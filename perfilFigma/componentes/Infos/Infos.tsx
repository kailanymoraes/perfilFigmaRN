import { Text, View, StyleSheet } from 'react-native';
import Button from '../Button/Button';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';

export default function Infos() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);
    return (
        <View style={styles.post}>
            <Text style={styles.title}>Informações do Perfil</Text>
            <View>
                <Text style={styles.information}>Email: rirebodev@gmail.com</Text>
                <Text style={styles.information}>Telefone: (13) 99576-0909 </Text>
                <Text style={styles.information}>Senioridade </Text>
                
                <DropDownPicker
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
    }
})