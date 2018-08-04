import React from 'react';
import { Route } from 'react-router-dom'
import GoogleMaps from './GoogleMaps'
import Search from './Search';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state.locations = [
      { name: 'Üniversite Öğrenci Evi', id: 'Uoe', location: {lat: 38.366343, lng: 27.197739} },
      { name: 'Bozuk Plak Cafe', id: 'Bpc',  location: {lat: 38.368959, lng: 27.190229} },
      { name: 'Kuruçeşme Cami', id: 'Kc',  location: {lat: 38.369598, lng: 27.193019} },
      { name: 'Aybers Hikmet Karabacak Anadolu Lisesi', id: 'Ahk',  location: {lat: 38.368373, lng: 27.194559} },
      { name: 'Müşerref Mahmut Tınas İlkokulu', id: 'Mht',  location: {lat: 38.369021 , lng: 27.194462} }
    ];
    //initializing the filtered locations to include all locations
    this.state.filteredLocations = this.state.locations;
  }

  state = {
    locations: [],
    filteredLocations: [],
    selectedLocation: ''
  }

  selectLocation = (location) => {
    if (location.id === this.state.selectedLocation.id) {
      this.setState({selectedLocation: ''});
    } else {
      this.setState({selectedLocation: location});
    }
  }

  queryUpdate = (value) => {
    this.setState(currentState => {
      let filteredLocations = [];
      const curLocations = currentState.locations;
      if(value !== '') {
        filteredLocations = curLocations.filter(loc => {
          return loc.name.toLowerCase().includes(value.toLowerCase());
        })
      } else {
        filteredLocations = curLocations;
      }
      return({filteredLocations});
    });
  }

  // Implement filtering of the markers alongside the text

  render() {
    return (
      <Route path='/' render={() => (
        <div>
          <GoogleMaps
            locations={this.state.locations}
            filteredLocations={this.state.filteredLocations}
            selectedLocation={this.state.selectedLocation}
            myKey={'AIzaSyBB3j35dbLFQFIqURXBo5X11-9b4MiLTe4'}
            home={{
              lat: 38.367243,
              lng: 27.195143
            }}
            />
          <Search 
            locations={this.state.locations}
            filteredLocations={this.state.filteredLocations}
            selectedLocation={this.state.selectedLocation}
            selectLocation={this.selectLocation}
            queryUpdate={this.queryUpdate}
          />
        </div>
      )} />
    );
  }
}

export default App;



