import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Inicia un temporizador para aumentar el progreso cada medio segundo
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        // Detiene el progreso si ya ha llegado a 100
        if (prevProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Aumenta el progreso en un 10%
        return prevProgress + 10;
      });
    }, 500);

    // Limpia el temporizador cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []); // El array vacío asegura que el efecto solo se ejecute una vez al montar

  // Calcula el ancho de la barra de progreso
  const progressWidth = (progress / 100) * (Dimensions.get('window').width - 40);

  return (
    <View style={styles.container}>
      {/* Barra exterior */}
      <View style={styles.progressBarBackground}>
        {/* Barra de progreso interior */}
        <View style={[styles.progressBarFill, { width: progressWidth }]} />
      </View>
      {/* Muestra el porcentaje de progreso */}
      <Text style={styles.progressText}>{`${progress}%`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    marginTop: 50,
  },
  progressBarBackground: {
    height: 20,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#4caf50',
    borderRadius: 10,
  },
  progressText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProgressBar;