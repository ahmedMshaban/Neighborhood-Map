import React from 'react';
import { Route } from 'react-router-dom'
import GoogleMaps from './GoogleMaps'

class App extends React.Component {
  state = {
    locations: [
      { name: 'Üniversite Öğrenci Evi', location: {lat: 38.366343, lng: 27.197739} },
      { name: 'Bozuk Plak Cafe', location: {lat: 38.368959, lng: 27.190229} },
      { name: 'Kuruçeşme Cami', location: {lat: 38.369598, lng: 27.193019} },
      { name: 'Aybers Hikmet Karabacak Anadolu Lisesi', location: {lat: 38.368373, lng: 27.194559} },
      { name: 'Müşerref Mahmut Tınas İlkokulu', location: {lat: 38.369021 , lng: 27.194462} }
    ],
    filteredLocations: []
  }
  render() {
    return (
      <Route path='/' render={() => (
      <GoogleMaps
        locations={this.state.locations}
        myKey={'AIzaSyC_r0_qDaYvro9DxtX1xoNmZGs0HsQKLAs'}
        home={{
          lat: 38.367243,
          lng: 27.195143
        }}
      />
      )} />
    );
  }
}

export default App;



