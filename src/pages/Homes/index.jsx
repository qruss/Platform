import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import FilterPanel from "../../components/Home/FilterPanel";
import EmptyView from "../../components/common/EmptyView";
import SearchBar from "../../components/Home/SearchBar";
import List from "../../components/Home/List";
import Tags from "../../components/Home/Tags/index";
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

  const [prob, setprob] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [count, setcount] = useState(null);
  const [filter, setfilter] = useState({
    Type: ["code"],
    Technology: [],
    Level: [],
    Recommended_Time: [0, 600],
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
      temp_filter["page"] = 1;
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
    temp_filter["page"] = 1;
    setfilter(temp_filter);
  };

  const handleChange = (category, id) => {
    const temp_masterData = { ...masterData };
    category === "Type"
      ? (temp_masterData[category] = temp_masterData[category].map((item) =>
          item.id === id
            ? { ...item, selected: true }
            : { ...item, selected: false }
        ))
      : (temp_masterData[category] = temp_masterData[category].map((item) =>
          item.id === id ? { ...item, selected: !item.selected } : item
        ));

    setmasterData(temp_masterData);
  };
  const handleTag = (category, label) => {
    const temp_masterData = { ...masterData };
    temp_masterData[category] = temp_masterData[category].map((item) =>
      item.label === label ? { ...item, selected: false } : item
    );
    setmasterData(temp_masterData);
  };

  useEffect(() => {
    let url = `http://localhost:5000/get_questions_api?`;
    Object.keys(filter).map(
      (key) =>
        key !== "Search" &&
        key !== "Recommended_Time" &&
        key !== "page" &&
        filter[key].length &&
        ((url += "&" + key + "="),
        filter[key].map((item) => (url += item + ",")),
        (url = url.substring(0, url.length - 1)))
    );

    if (filter["Search"].length) {
      url += "&Name=";
      url += filter["Search"];
    }
    url += "&Recommended_Time=";
    url += filter["Recommended_Time"][0] + "," + filter["Recommended_Time"][1];

    filter["page"] > 1 &&
      (url += "&count=" + count) &&
      (url += "&page=" + filter["page"]);

    url = encodeURI(url);
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setprob(data));
    if (prob !== null) {
      setcount(prob["pagination"]["count"]);
    }
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [filter]);

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

          <Tags filter={filter} handleTag={handleTag} />
          {prob !== null && prob["questions"].length !== 0 ? (
            <List list={prob["questions"]} />
          ) : (
            <EmptyView />
          )}
          {prob !== null && prob["questions"].length !== 0 && (
            <div className="Pagination">
              <Pagination
                count={Math.ceil(prob["pagination"]["count"] / 30)}
                variant="outlined"
                color="secondary"
                size="large"
                page={filter["page"]}
                onChange={handlePageChange}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
