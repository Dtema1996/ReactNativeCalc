import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import Row from './components/Row';
import Button from './components/Button';


export default function App() {
    const [ currentVal, setCurrentVal ] = useState("0");
    const [ previousVal, setPreviousVal ] = useState(null);
    const [ operator, setOperator ] = useState(null);
    const [ memorisedNum, setMemorisedNum ] = useState('0');

    const handleTap = (type, value) => {
        switch (type) {
            case 'number':
                currentVal === '0' ? setCurrentVal(`${value}`) : setCurrentVal(`${currentVal}${value}`);
                break;
            case 'operator':
                setOperator(value);
                setPreviousVal(currentVal);
                setCurrentVal('0');
                break;
            case 'posNeg':
                setCurrentVal(`${parseFloat(currentVal) * -1}`);
                break;
            case 'percentage':
                setCurrentVal(`${parseFloat(currentVal) * 0.01}`);
                break;
            case 'clear':
                setCurrentVal('0');
                setOperator(null);
                setPreviousVal(null);
                break;
            case 'MC':
                setMemorisedNum('0');
                break;
            case 'MR':
                setCurrentVal(memorisedNum);
                break;
            case 'M+':
                setCurrentVal(eval(`${memorisedNum} + ${currentVal}`));
                break;
            case 'M-':
                setCurrentVal(eval(`${memorisedNum} - ${currentVal}`));
                break;
            case 'equal':
                const previous = parseFloat(previousVal);
                const current = parseFloat(currentVal);

                switch (operator) {
                    case '+':
                        setCurrentVal(previous + current);
                        setOperator(null);
                        setPreviousVal(null);
                        break;
                    case '-':
                        setCurrentVal(previous - current);
                        setOperator(null);
                        setPreviousVal(null);
                        break;
                    case '*':
                        setCurrentVal(previous * current);
                        setOperator(null);
                        setPreviousVal(null);
                        break;
                    case '/':
                        setCurrentVal(previous / current);
                        setOperator(null);
                        setPreviousVal(null);
                        break;
                    default:
                }
            default:
        }


    }

    return (
        <View style={styles.container}>
            <StatusBar style="light-content" />
            <SafeAreaView>
                <Text style={styles.value}>{currentVal}</Text>
                <Row>
                    <Button text='AC' colour='accent' onPress={() => handleTap('clear')} />
                    <Button text='+/-' colour='accent' onPress={() => handleTap('posNeg')} />
                    <Button text='%' colour='accent' onPress={() => handleTap('percentage')} />
                    <Button text='÷' colour='accent' onPress={() => handleTap('operator', '/')} />
                </Row>
                <Row>
                    <Button text='mc' colour='accent' onPress={() => handleTap('MC')} />
                    <Button text='mr' colour='accent' onPress={() => handleTap('MR')} />
                    <Button text='m-' colour='accent' onPress={() => handleTap('M-')} />
                    <Button text='m+' colour='accent' onPress={() => handleTap('M+')} />
                </Row>
                <Row>
                    <Button text='7' onPress={() => handleTap('number', 7)} />
                    <Button text='8' onPress={() => handleTap('number', 8)} />
                    <Button text='9' onPress={() => handleTap('number', 9)} />
                    <Button text='×' colour='accent' onPress={() => handleTap('operator', '*')} />
                </Row>
                <Row>
                    <Button text='4' onPress={() => handleTap('number', 4)} />
                    <Button text='5' onPress={() => handleTap('number', 5)} />
                    <Button text='6' onPress={() => handleTap('number', 6)} />
                    <Button text='-' colour='accent' onPress={() => handleTap('operator', '-')} />
                </Row>
                <Row>
                    <Button text='1' onPress={() => handleTap('number', 1)} />
                    <Button text='2' onPress={() => handleTap('number', 2)} />
                    <Button text='3' onPress={() => handleTap('number', 3)} />
                    <Button text='+' colour='accent' onPress={() => handleTap('operator', '+')} />
                </Row>
                <Row>
                    <Button text='0' size='double' onPress={() => handleTap('number', 0)} />
                    <Button text=',' onPress={() => handleTap('number', '.')} />
                    <Button text='=' colour='accent' onPress={() => handleTap('equal')} />
                </Row>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202020',
        justifyContent: 'flex-end',
    },
    value: {
        marginRight: 20,
        fontSize: 80,
        textAlign: "right",
        color: "#fff",
    },
});
