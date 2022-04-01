import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './Components/Splash';
import Home from './Components/Home';
import CovidUpdates from './Components/CovidUpdates';
import ContactDetails from './Components/ContactDetails';
import Profile from './Components/Profile';
import RoomBook from './Components/RoomBook';
import Help from './Components/Help';
import Invitees from './Components/Invitees';
import IncidentReport from './Components/IncidentReport';
import {Provider} from 'react-redux';
import store from './redux/store';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Splash"
            component={Splash}
          />
          <Stack.Screen
            options={{
              headerStyle: {
                backgroundColor: '#60c0ea',
              },
              headerTintColor: '#fff',
            }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{
              headerStyle: {
                backgroundColor: '#60c0ea',
              },
              headerTintColor: '#fff',
            }}
            name="Covid19 Updates"
            component={CovidUpdates}
          />
          <Stack.Screen
            options={{
              headerStyle: {
                backgroundColor: '#60c0ea',
              },
              headerTintColor: '#fff',
            }}
            name="Employee List"
            component={ContactDetails}
          />
          <Stack.Screen
            options={{
              headerStyle: {
                backgroundColor: '#60c0ea',
              },
              headerTintColor: '#fff',
            }}
            name="Profile"
            component={Profile}
          />
          <Stack.Screen
            options={{
              headerStyle: {
                backgroundColor: '#60c0ea',
              },
              headerTintColor: '#fff',
            }}
            name="Book Room"
            component={RoomBook}
          />
          <Stack.Screen
            options={{
              headerStyle: {
                backgroundColor: '#60c0ea',
              },
              headerTintColor: '#fff',
            }}
            name="Help"
            component={Help}
          />
          <Stack.Screen
            options={{
              headerStyle: {
                backgroundColor: '#60c0ea',
              },
              headerTintColor: '#fff',
            }}
            name="Invitees"
            component={Invitees}
          />
          <Stack.Screen
            options={{
              headerStyle: {
                backgroundColor: '#60c0ea',
              },
              headerTintColor: '#fff',
            }}
            name="Incident Report"
            component={IncidentReport}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
