import React, { useEffect, useState } from "react";
import FilterPanel from "../../components/Test/FilterPanel";
import EmptyView from "../../components/common/EmptyView/index";
import SearchBar from "../../components/Question/SearchBar/index";
import List from "../../components/Test/List/index";
import PaginationComp from "../../components/Question/Pagination/index";
import Tags from "../../components/Test/Tags/index";

import "./styles.css";

const Test = () => {
  const [masterData, setmasterData] = useState({
    Test_Type: [],
    Module_Type: [],
    Technology: [],
    Test_Creation_Date: [],
  });

  useEffect(() => {
    const abortCont = new AbortController();

    fetch("http://localhost:5000/master_api/test/ ", {
      signal: abortCont.signal,
    })
      .then((response) => response.json())
      .then((data) => setmasterData(data));
    console.log(masterData);
    return () => abortCont.abort();
  }, []);

  const [prob, setprob] = useState(null);
  const [searchInput, setSearchInput] = useState(null);
  const [filter, setfilter] = useState({
    Test_Type: [],
    Module_Type: [],
    Technology: [],
    Test_Creation_Date: [null, null],
    Search: "",
    page: 1,
  });

  useEffect(() => {
    const applyFilters = () => {
      const temp_filter = { ...filter };
      Object.keys(temp_filter).map(
        (key) =>
          (temp_filter[key] =
            key === "Test_Creation_Date" || key === "Search" || key === "page"
              ? temp_filter[key]
              : masterData[key]
                  .filter((item) => item.selected)
                  .map((item) => item.label))
      );
      temp_filter["Search"] = searchInput;
      temp_filter["page"] = 1;
      console.log(temp_filter);
      if (prob != null) {
        const temp_prob = { ...prob };
        temp_prob.pagination.count = null;
        prob !== null && setprob(temp_prob);
      }
      setfilter(temp_filter);
    };
    applyFilters();
  }, [masterData, searchInput]);

  const handlePageChange = (event, value) => {
    const temp_filter = { ...filter };
    temp_filter.page = value;
    setfilter(temp_filter);
  };
  const handleTest_Creation_Date = (category, newValue) => {
    const temp_filter = { ...filter };
    temp_filter["Test_Creation_Date"][category] = newValue;
    temp_filter["page"] = 1;
    if (prob != null) {
      const temp_prob = { ...prob };
      temp_prob.pagination.count = null;
      prob !== null && setprob(temp_prob);
    }
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
    const abortCont = new AbortController();
    let url = `http://localhost:5000/test?`;
    Object.keys(filter).map(
      (key) =>
        key !== "Search" &&
        key !== "Test_Creation_Date" &&
        key !== "page" &&
        filter[key].length &&
        ((url += "&" + key + "="),
        filter[key].map((item) => (url += item + ",")),
        (url = url.substring(0, url.length - 1)))
    );
    if (filter["Search"] != null && filter["Search"].length) {
      url += "&Name=";
      url += filter["Search"];
    }
    url += "&Test_Creation_Date=";
    url +=
      (filter["Test_Creation_Date"][0] == null
        ? filter["Test_Creation_Date"][0]
        : filter["Test_Creation_Date"][0].toLocaleDateString()) +
      "," +
      (filter["Test_Creation_Date"][1] == null
        ? filter["Test_Creation_Date"][1]
        : filter["Test_Creation_Date"][1].toLocaleDateString());

    url += "&count=" + (!prob ? null : prob.pagination.count);
    url += "&page=" + filter["page"];

    url = encodeURI(url);
    console.log(url);
    fetch(url, { signal: abortCont.signal })
      .then((response) => response.json())
      .then((data) => setprob(data));

    return () => abortCont.abort();
  }, [filter]);
  return (
    <div className="home">
      <div className="home_panelList-wrap">
        <div className="home_panel-wrap">
          <FilterPanel
            masterData={masterData}
            changeChecked={handleChange}
            value={filter["Test_Creation_Date"]}
            handleTest_Creation_Date={handleTest_Creation_Date}
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
              <PaginationComp
                count={Math.ceil(prob["pagination"]["count"] / 30)}
                page={filter["page"]}
                handlePageChange={handlePageChange}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Test;
