import { Text, SafeAreaView, StyleSheet, Image } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    
      <Text style={styles.paragraph}>
        Журнал Bright
      </Text>

      

      <Card style={styles.Card}>

        <Text style={{marginBottom: 30, color: 'blue'}}
          onPress={() => Linking.openURL('http://google.com')}>
        Новости
        </Text>

        <Image style={styles.img} 
          source={{
            uri: 'https://avatars.mds.yandex.net/i?id=c6da7ee0a6a364283fca1b107f9555df36a5c769-9847423-images-thumbs&n=13',
          }}>
        </Image>

        <Text style={styles.title}>
          Превращаем стресс в твоего помощника
        </Text>


        <Text style={{fontSize: 16}}>
          Осенний лес был полон тишины и спокойствия. Листья, окрашенные в золотые и багряные оттенки, медленно кружились в воздухе, опускаясь на землю мягким ковром. Воздух был наполнен свежестью и легкой прохладой, а где-то вдалеке слышалось пение птиц, словно прощающихся с уходящим летом.


        </Text>

      </Card>

      

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  Card: {
    padding: 20,
    margin: 5,
    paddingBottom: 60,
  },
  img: {
    width: 300,
    height: 150,
    marginBottom: 30,
  },
});