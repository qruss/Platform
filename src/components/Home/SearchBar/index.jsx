import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import './styles.css'

const SearchBar = ({ value, changeInput }) => (
  <div className='searchBar-wrap'>
    <SearchIcon className='searchBar-icon' />
    <FormControl sx={{ backgroundColor: '#eee'}}>
        <OutlinedInput type="text" onChange={changeInput}  value={value} sx={{ height: '4ch', width: '25ch'}} placeholder="Search Problem" />
</FormControl>
  </div>
);

export default SearchBar;
