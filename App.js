import {
    Dimensions,
    Platform,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Image,
    useWindowDimensions, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, Button, Alert
} from 'react-native';
import {SafeAreaView as SafeAreaViewContext} from 'react-native-safe-area-context';
import {useState, useEffect, useMemo} from 'react';

// export default function App() {
//   return (
//     <View>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// export default function App() {
//   console.log(Platform.OS)
//   console.log(StatusBar.currentHeight)
//   return (
//       <SafeAreaView style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//       </SafeAreaView>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
//   }
// })

// export default function App() {
//     return (
//         <SafeAreaViewContext>
//             <Text>Open up App.js to start working on your app!</Text>
//         </SafeAreaViewContext>
//     );
// }

// export default function App() {
//     const window = Dimensions.get('window');
//     const screen = Dimensions.get('screen');
//
//     console.log('window: ', window);
//     console.log('screen: ', screen)
//     return (
//         <View>
//             <Text>Open up App.js to start working on your app!</Text>
//         </View>
//     );
// }

// export default function App() {
//     return (
//         <View style={styles.container}>
//             <Image
//                 source={{uri: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW5kcm9pZCUyMHBob25lfGVufDB8fDB8fHww'}}
//                 style={{
//                     width: '100%',
//                     height: '75%',//пропорції 4:3
//                     resizeMode: 'cover'// contain stretch
//                 }}
//             />
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     }
// })

// export default function App() {
//     const {width} = Dimensions.get('window');
//     return (
//         <View style={styles.container}>
//             <Image
//                 source={{uri: 'https://w0.peakpx.com/wallpaper/340/764/HD-wallpaper-android-today-black-green-logo-simple.jpg'}}
//                 style={{
//                     width: width * 0.9,
//                     height: (width * 0.9) * 0.75,//висота зберігає співвідношення 4:3
//                     resizeMode: 'cover'
//                 }}
//             />
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     }
// })

// export default function App() {
//     console.log('first render')
//     const {width, height} = Dimensions.get('window');
//     const isPortrait = height > width;
//     return (
//         <View style={styles.container}>
//             {isPortrait
//                 ? <Text>Портретна орієнтація</Text>
//                 : <Text>Ландшафтна орієнтація</Text>
//             }
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     }
// })

// export default function App() {
//     const [orientation, setOrientation] = useState('');
//
//     const handleOrientationChange = () => {
//         const {width, height} = Dimensions.get('window');
//         setOrientation(height >= width ? 'portrait' : 'landscape');
//     }
//
//     useEffect(() => {
//         const subscription = Dimensions.addEventListener('change', handleOrientationChange);
//         handleOrientationChange();
//         return () => subscription.remove();
//     }, []);
//
//     const styles = dynamicStyles(orientation);
//
//     return (
//         <View style={styles.container}>
//             <Text style={{fontSize: 30}}>{orientation}</Text>
//             <View style={styles.box}></View>
//         </View>
//     );
// }
// const dynamicStyles = (orientation) =>
//     StyleSheet.create({
//             container: {
//                 flex: 1,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 backgroundColor: orientation === 'portrait' ? 'white' : 'lightgrey'
//             },
//             box: {
//                 width: orientation === 'portrait' ? 100 : 200,
//                 height: orientation === 'portrait' ? 100 : 50,
//                 backgroundColor: orientation === 'portrait' ? 'blue' : 'red'
//             }
//         }
//     )

// export default function App() {
//     console.log('render')
//     const {width, height} = useWindowDimensions();
//     return (
//         <View style={styles.container}>
//             <Text style={styles.text}>Width: {Math.round(width)}</Text>
//             <Text style={styles.text}>Height: {Math.round(height)}</Text>
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     text: {
//         fontSize: 30,
//     }
// })


// export default function App() {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.text}>Hello World</Text>
//             <Text style={styles.text}>Hello World</Text>
//             <Text style={styles.text}>Hello World</Text>
//             <Text style={styles.text}>Hello World</Text>
//             <Text style={styles.text}>Hello World</Text>
//             <Text style={styles.text}>Hello World</Text>
//             <TextInput style={styles.input} placeholder="Username"/>
//             <TextInput style={styles.input} placeholder="Password"/>
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         padding: 20,
//     },
//     text: {
//         fontSize: 24,
//         marginBottom: 20,
//         textAlign: "center"
//     },
//     input: {
//         height: 40,
//         borderColor: '#ccc',
//         borderWidth: 1,
//         marginBottom: 20,
//         paddingHorizontal: 10,
//     }
// })

// export default function App() {
//     const handleClick = () => {
//         console.log('save');
//         Keyboard.dismiss();
//     }
//     return (
//         <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//             <KeyboardAvoidingView
//                 style={styles.container}
//                 behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//                 // keyboardVerticalOffset={100}
//             >
//                 <View style={styles.form}>
//                     <Text style={styles.text}>Hello World</Text>
//                     <Text style={styles.text}>Hello World</Text>
//                     <Text style={styles.text}>Hello World</Text>
//                     <Text style={styles.text}>Hello World</Text>
//                     <Text style={styles.text}>Hello World</Text>
//                     <Text style={styles.text}>Hello World</Text>
//                     <TextInput style={styles.input} placeholder="Username"/>
//                     <TextInput style={styles.input} placeholder="Password"/>
//                     <Button onPress={handleClick} title={"Save"}/>
//                 </View>
//             </KeyboardAvoidingView>
//         </TouchableWithoutFeedback>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         padding: 20,
//     },
//     text: {
//         fontSize: 24,
//         marginBottom: 20,
//         textAlign: "center"
//     },
//     input: {
//         height: 40,
//         borderColor: '#ccc',
//         borderWidth: 1,
//         marginBottom: 20,
//         paddingHorizontal: 10,
//     }
// })


export default function App() {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');
    const [isPortrait, setIsPortrait] = useState(isPortraitMode());

    function isPortraitMode() {
        const dim = Dimensions.get('window');
        return dim.height >= dim.width;
    }

    useEffect(() => {
        const subscription = Dimensions.addEventListener('change', () => {
            setIsPortrait(isPortraitMode());
        });

        return () => {
            subscription.remove();
        };
    }, []);

    const Forms = () => {
        if (email === '' || !email.includes('@') || !email.includes('.')) {
            Alert.alert('Помилка', 'Некоректний email');
            return;
        }
        if (password !== password1) {
            Alert.alert('Помилка', 'Паролі не співпадають');
            return;
        }
        if (phone.length < 10) {
            Alert.alert('Помилка', 'Некоректний номер телефону');
            return;
        }
        Alert.alert('Успіх', 'Дані відправлені!');
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <StatusBar />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView contentContainerStyle={isPortrait ? styles.container : styles.containerLandscape}>
                <Text style={styles.heading}>Форма реєстрації</Text>

                <View style={isPortrait ? styles.inputContainer : styles.inputContainerLandscape}>
                    <Text>Введіть Ваше ім'я</Text>
                    <TextInput style={styles.input} placeholder="ім'я" />
                </View>

                <View style={isPortrait ? styles.inputContainer : styles.inputContainerLandscape}>
                    <Text>Введіть Ваш пароль</Text>
                    <TextInput style={styles.input} placeholder="пароль"  secureTextEntry onChangeText={setPassword}/>
                </View>

                <View style={isPortrait ? styles.inputContainer : styles.inputContainerLandscape}>
                    <Text>Введіть Ваш email</Text>
                    <TextInput style={styles.input} placeholder="email" keyboardType="email-address" onChangeText={setEmail}/>
                </View>

                <View style={isPortrait ? styles.inputContainer : styles.inputContainerLandscape}>
                    <Text>Введіть Ваш пароль повторно</Text>
                    <TextInput style={styles.input} placeholder=" повторення пароля " secureTextEntry onChangeText={setPassword1}/>
                </View>

                <View style={isPortrait ? styles.inputContainer : styles.inputContainerLandscape}>
                    <Text>Введіть Ваше прізвище</Text>
                    <TextInput style={styles.input} placeholder="прізвище"/>
                </View>

                <View style={isPortrait ? styles.inputContainer : styles.inputContainerLandscape}>
                    <Text>Введіть Ваш номер телефону</Text>
                    <TextInput style={styles.input} placeholder="телефон" keyboardType="phone-pad" onChangeText={setPhone}/>
                </View>

                <View style={isPortrait ? styles.inputContainer : styles.inputContainerLandscape}>
                    <Text>Введіть Вашу адресу</Text>
                    <TextInput style={styles.input} placeholder="адреса" />
                </View>

                <View style={isPortrait ? styles.buttonContainer : styles.buttonContainerLandscape}>
                    <Button title="Відправити" onPress={Forms} />
                </View>
            </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexGrow: 1,
        backgroundColor: '#fff',
    },
    containerLandscape: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
        justifyContent: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        width: '100%',
    },
    inputContainer: {
        marginBottom: 15,
    },
    inputContainerLandscape: {
        width: '45%',
        margin: 10,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 5,
    },
    buttonContainer: {
        marginTop: 20,
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    buttonContainerLandscape: {
        width: '110',
        marginTop: 35,
    },
});

