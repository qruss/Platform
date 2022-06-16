import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import FilterPanel from "../../components/Home/FilterPanel";
import SearchBar from "../../components/Home/SearchBar";
import List from "../../components/Home/List";
import Tags from "../../components/Home/Tags/index";
import { dataList } from "../../Data/index";
import "./styles.css";

const Home = () => {
  const [masterData, setmasterData] = useState({
    Technology: [],
    Level: [],
    Type: [],
    Recommended_Time: [],
    Tags: [],
    Languages: [],
  });

  useEffect(() => {
    fetch("http://localhost:5000/master_api/ ")
      .then((response) => response.json())
      .then((data) => setmasterData(data));
  }, []);

  const [list, setlist] = useState(dataList);
  const [searchInput, setSearchInput] = useState("");
  const [filter, setfilter] = useState({
    Technology: [],
    Level: [],
    Type: ["code"],
    Recommended_Time: [0, 480],
    Tags: [],
    Languages: [],
    Search: "",
    page: 1,
  });

  useEffect(() => {
    const applyFilters = () => {
      const temp_filter = { ...filter };
      Object.keys(temp_filter).map(
        (key) =>
          (temp_filter[key] =
            key === "Search" || key === "Recommended_Time" || key === "page"
              ? temp_filter[key]
              : masterData[key]
                  .filter((item) => item.selected)
                  .map((item) => item.label))
      );
      temp_filter["Search"] = searchInput;

      setfilter(temp_filter);
    };
    applyFilters();
  }, [masterData, searchInput]);

  const handlePageChange = (event, value) => {
    const temp_filter = { ...filter };
    temp_filter.page = value;
    setfilter(temp_filter);
  };
  const handleRecommended_Time = (event, value) => {
    const temp_filter = { ...filter };
    temp_filter["Recommended_Time"] = value;
    setfilter(temp_filter);
    console.log(temp_filter);
  };

  const handleChange = (category, id) => {
    const temp_masterData1 = { ...masterData };
    category === "Type"
      ? (temp_masterData1[category] = temp_masterData1[category].map((item) =>
          item.id === id
            ? { ...item, selected: true }
            : { ...item, selected: false }
        ))
      : (temp_masterData1[category] = temp_masterData1[category].map((item) =>
          item.id === id ? { ...item, selected: !item.selected } : item
        ));
    setmasterData(temp_masterData1);
  };

  return (
    <div className="home">
      <div className="home_panelList-wrap">
        <div className="home_panel-wrap">
          <FilterPanel
            masterData={masterData}
            changeChecked={handleChange}
            value={filter["Recommended_Time"]}
            handleRecommended_Time={handleRecommended_Time}
          />
        </div>
        <div className="home_list-wrap">
          <SearchBar
            value={searchInput}
            changeInput={(e) => setSearchInput(e.target.value)}
          />
          <Tags filter={filter} />
          <List list={list} />
          <div className="Pagination">
            <Pagination
              count={25}
              variant="outlined"
              color="secondary"
              size="large"
              page={filter["page"]}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
