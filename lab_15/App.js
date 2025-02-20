import React from 'react';
import { View, Text, Image, TextInput, ScrollView, StyleSheet, Button } from 'react-native';

const JobVacancy = () => {
  const jobImageUrl = 'https://t3.ftcdn.net/jpg/03/35/34/80/360_F_335348056_yY8QyHP966KePjyutnns1Puwt2bnngZc.jpg';

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Вакансия: Программист</Text>
        <Image source={{ uri: jobImageUrl }} style={styles.image} />
        <View style={styles.description}>
          <Text>
            Мы приглашаем опытного программиста присоединиться к нашей команде.
          </Text>
          <Text>
            От вас требуется:
          </Text>
          <Text>
            - Знание JavaScript, React Native, Redux
          </Text>
          <Text>
            - Опыт работы с RESTful API
          </Text>
          <Text>
            - Умение писать чистый и эффективный код
          </Text>
          <Text>
            - Опыт работы с базами данных (SQL, NoSQL)
          </Text>
          <Text>
            - Знание принципов SOLID и паттернов проектирования
          </Text>
          <Text>
            - Опыт работы с системами контроля версий (Git)
          </Text>
          <Text>
            - Навыки анализа и оптимизации производительности приложений
          </Text>
          <Text>
            - Умение эффективно коммуницировать и работать в команде
          </Text>
          <Text>
            - Желание развиваться и изучать новые технологии
          </Text>
          <Text>
            Мы предлагаем конкурентную зарплату, интересные проекты и дружелюбный коллектив. Присоединяйтесь к нам!
          </Text>
        </View>
        <TextInput style={styles.input} placeholder="Ваше имя" />
        <TextInput style={styles.input} placeholder="Ваш email" />
        <TextInput style={styles.input} placeholder="Ваш номер телефона" />
        <Button title="Откликнуться" onPress={() => alert('Спасибо за отклик!')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBlockStart: 150,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  section: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default JobVacancy;