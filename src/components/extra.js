/*
useEffect(() => {
    const applyFilters = () => {
      let updatedList = dataList;
      const skillChecked = skills
        .filter((item) => item.checked)
        .map((item) => item.label);
      
      if (skillChecked.length > 0 ) {
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

*/
