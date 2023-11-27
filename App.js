import React, { useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import RootNavigator from './navigators/myTab';

const DelayedNavigation = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Navigate to the FirstScreen after 5 seconds
      navigation.navigate('MyTabs');
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [navigation]);

  return null; 
};

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator.StackNavigation />
      <DelayedNavigation />
    </NavigationContainer>
  );
};

export default App;
