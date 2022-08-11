import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import Papa from "papaparse";
import NavBar from "../../components/NavBar/NavBar";

const SheetsContainer= styled.div`
  text-align: center;  
  
  hr {
    width: 100%;
    height: 2px;
  }
  
  table {
    margin: auto;
    
    th {
      width: 200px;
    }
  }
`;

const Sheets = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    handleLoadFiles();
  }, []);

  const handleLoadFiles = () => {
    const items = Object.keys(localStorage);
    items.forEach(async item => {
      if (item.includes('File')) {
        const blob = await (await fetch(localStorage.getItem(item))).blob();
        const file = new File([blob], item, );
        const reader = new FileReader();
        reader.onload = async ({ target }) => {
          const csv = Papa.parse(target.result, { header: true });
          const parsedData = csv?.data;
          const totalAmount = Object.values(parsedData).reduce((acc, item) => parseFloat(acc) + parseFloat(item.Total), 0);
          setFiles([...files, {name: file.name, total: totalAmount}]);
        };
        reader.readAsText(file);
      }
    });
  };
  return  (
    <SheetsContainer>
      <NavBar />
      <h4>Sheets Page</h4>
      <hr />
      <table>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {files && files.map((file, index) => (
            <tr key={index}>
              <td>{file.name}</td>
              <td>{file.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </SheetsContainer>
  );
};

export default Sheets;
