import React, { useEffect, useState } from 'react';
import FilterPanel from '../../components/Home/FilterPanel';
import SearchBar from '../../components/Home/SearchBar';
import EmptyView from '../../components/common/EmptyView';
import List from '../../components/Home/List';
import  {useEffectApi,dataList,skillList,languageList}  from '../../Data/index';
import './styles.css';

const Home = () => {
  console.log(useEffectApi());
  const [skills, setskills] = useState(skillList);
  const [languages, setlanguages] = useState(languageList);

  const [list, setList] = useState(dataList);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');

  const handleChangeChecked1 = (id) => {
    const skillsStateList = [...skills];
    const changeCheckedskills = skillsStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    
    setskills(changeCheckedskills);
  };

  const handleChangeChecked2 = (id) => {
    const languagesStateList = languages;
    const changeCheckedlanguages = languagesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setlanguages(changeCheckedlanguages);
  };

  useEffect(() => {
    const applyFilters = () => {
      let updatedList = dataList;
      const skillChecked = skills
        .filter((item) => item.checked)
        .map((item) => item.label);
      
      if (skillChecked.length > 0 ) {
         console.log(skillChecked);
        updatedList = updatedList.filter((item) =>
          skillChecked.includes(item.skill)
        );
      }
      const languageChecked = languages
        .filter((item) => item.checked)
        .map((item) => item.label.toLowerCase());
        
      if (languageChecked.length > 0) {
        updatedList = updatedList.filter((item) =>
        languageChecked.includes((item.language.toLowerCase()))
        );
      }
      
      if (searchInput) {
        updatedList = updatedList.filter(
          (item) =>
            item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
            -1
        );
      }
      setList(updatedList);
      !updatedList.length ? setResultsFound(false) : setResultsFound(true);
      
    };
    applyFilters();
    
  }, [ skills, languages, searchInput]);



  return (
    <div className='home'>
      <div className='home_panelList-wrap'>
        <div className='home_panel-wrap'>
          <FilterPanel
            skills={skills}
            changeChecked1={handleChangeChecked1}
            languages={languages}
            changeChecked2={handleChangeChecked2}
          />
        </div>
        <div className='home_list-wrap'>
        <SearchBar value={searchInput}
        changeInput={(e) => setSearchInput(e.target.value)}/>
        {resultsFound ? <List list={list} /> : <EmptyView />}
        </div>
      </div>
    </div>
  )
}

export default Home