import React, { Component } from 'react';

class Search extends Component {

    render() {
        const {locations, filteredLocations, selectedLocation, selectLocation, queryUpdate} = this.props;
        let locs = filteredLocations === [] ? locations : filteredLocations;
        return (
            <div className='search-and-list'>
                <div>
                    <input type="text"
                        className='search-box'
                        placeholder='Enter Restaurant Name' 
                        aria-label='Search for Restaurant'
                        onChange={event => queryUpdate(event.target.value)}/>
                </div>
                <ul>
                    {
                        locs.map((location, index) => {
                            const isSelected = (location.id === selectedLocation.id ? 'row-selected' : '');
                            return (
                                <li
                                    key={index}
                                    onClick={ () => selectLocation(location)}
                                    onKeyDown={(event) => event.keyCode !== 13 || selectLocation(location)}
                                    className={isSelected}
                                    tabIndex={0}
                                >
                                    <span>{location.name}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Search;
