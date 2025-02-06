import { Text, SafeAreaView, StyleSheet, Image, View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    
     <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
         <Text style={styles.paragraph}>
            5 книжных новинок октября
        </Text>
      </View>
      <View style={{flex: 2, backgroundColor: 'lightgreen', justifyContent: 'center'}}>
          <Text style={{fontSize: 14, textAlign: 'center'}}>
        Осенний лес был полон тишины и спокойствия. Листья, окрашенные в золотые и багряные оттенки, медленно кружились в воздухе, опускаясь на землю мягким ковром. Воздух был наполнен свежестью и легкой прохладой, а где-то вдалеке слышалось пение птиц, словно прощающихся с уходящим летом.
        </Text>
      </View>
      <View style={{flex: 3, backgroundColor: 'green', paddingTop: 40}}>
        <Text style={{fontSize: 14, textAlign: 'center'}}>
          Осенний лес был полон тишины и спокойствия. Листья, окрашенные в золотые и багряные оттенки, медленно кружились в воздухе, опускаясь на землю мягким ковром. Воздух был наполнен свежестью и легкой прохладой, а где-то вдалеке слышалось пение птиц, словно прощающихся с уходящим летом.
        </Text>
      </View>
    </View>

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
});