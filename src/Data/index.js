import React, {useState,useEffect} from 'react'

export const useEffectApi = ()=>{
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch('https://api.github.com/users');
    setUsers(await response.json());
  }
  useEffect(()=>{
    getUsers();
  },[]
  );
  return users;
}

 export const skillList = [
    { id: 1, checked: false, label: 'Algorithm' },
    { id: 2, checked: false, label: 'Data Structure' },
    { id: 3, checked: false, label: 'Basic Language' },
    { id: 4, checked: false, label: 'Mathematics' },
    { id: 5, checked: false, label: 'Development' },
    { id: 6, checked: false, label: 'Artificial Intelligence' },
    { id: 7, checked: false, label: 'Database' },
    { id: 8, checked: false, label: 'Linux' },
    { id: 9, checked: false, label: 'Networking' },
  ];

  export const languageList = [
    { id: 1, checked: false, label: 'Python' },
    { id: 2, checked: false, label: 'Java' },
    { id: 3, checked: false, label: 'C++' },
    { id: 4, checked: false, label: 'C#' },
    { id: 5, checked: false, label: 'JavaScript' },
    { id: 6, checked: false, label: 'Nodejs' },
    { id: 7, checked: false, label: 'C' },
    { id: 8, checked: false, label: 'PHP' },
    { id: 9, checked: false, label: 'Shell' },
    { id: 10, checked: false, label: 'Ruby' },
    { id: 11, checked: false, label: 'mySQL' },
  ];
  
  export const dataList = [
    {
      id: 1,
      title: 'Check For BSt',
      skill: 'Algorithm',
      language: 'C++',
    },
    {
      id: 2,
      title: 'Data Structure Problem 1',
      skill: 'Data Structure',
      language: 'C++',
    },
    {
      id: 3,
      title: 'Database Problem 1',
      skill: 'Database',
      language: 'mySQL',
    },
    {
      id: 4,
      title: 'Data Structure 2',
      skill: 'Data Structure',
      language: 'c',
    },
    {
      id: 5,
      title: 'Development Problem1',
      skill: 'Development',
      language: 'Javascript',
    },
    {
      id: 6,
      title: 'Development Problem 2',
      skill: 'Development',
      language: 'Nodejs',
    },
    {
      id: 7,
      title: 'Development Problem 3',
      skill: 'Development',
      language: 'Javascript',
    },
    {
      id: 8,
      title: 'Development Problem 4',
      skill: 'Development',
      language: 'PHP',
    },
  ];
  

  export const dataList1 = [
    {
      id: 1,
      title: 'lounge resort',
      serviceTime: '45-60min',
      deliveryFee: 3.44,
      category: 'place',
      cuisine: 'Development',
      rating: 5,
      price: 2500,
      coverSrc: '/images/places/ameri.jpg',
    },
  ];
  