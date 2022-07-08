import React, { useEffect, useState } from "react";
import PaginationComp from "../../components/Question/Pagination/index";
import FilterPanel from "../../components/Question/FilterPanel";
import EmptyView from "../../components/common/EmptyView";
import SearchBar from "../../components/Question/SearchBar";
import List from "../../components/Question/List";
import Tags from "../../components/Question/Tags/index";
import "./styles.css";

const Question = () => {
  const [masterData, setmasterData] = useState({
    Technology: [],
    Level: [],
    Type: [],
    Recommended_Time: [],
    Languages: [],
  });

  useEffect(() => {
    const abortCont = new AbortController();

    fetch("http://localhost:5000/master_api/ ", { signal: abortCont.signal })
      .then((response) => response.json())
      .then((data) => setmasterData(data));
    return () => abortCont.abort();
  }, []);

  const [prob, setprob] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [filter, setfilter] = useState({
    Type: ["code"],
    Technology: [],
    Level: [],
    Recommended_Time: [0, 600],
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
  const handleRecommended_Time = (event, value) => {
    const temp_filter = { ...filter };
    temp_filter["Recommended_Time"] = value;
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
    let url = `http://localhost:5000/question?`;
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
            <PaginationComp
              count={Math.ceil(prob["pagination"]["count"] / 30)}
              page={filter["page"]}
              handlePageChange={handlePageChange}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Question;
