import React from "react";
import DataTable from "react-data-table-component";
import { useQuery } from "react-query";
import Spinner from "./Spinner";
import getStockLive from "../services/apiStockLive";
import SearchStock from "./SearchStock";
import { useNavigate } from "react-router-dom";

function StockTable() {
  const navigate = useNavigate(); 
  const customStyles = {
    rows: {
      style: {
        borderBottomColor: "#444859 !important",
        background: "#293038",
        transition:"all 0.1s ease-in-out",
        cursor:"pointer",
        '&:hover': {
          backgroundColor: '#353e47 ; !important',
        } 
      },
    
    },
    headCells: {
      style: { background: "#293038", color: "#fff",fontSize:"13px" ,fontWeight:"500" },
    },
    cells: {
      style: { background: "transparent", color: "#fff",fontWeight:"100",fontSize:"14px" },
    },
    headRow: {
      style: {
        borderBottomWidth: '1px',
        borderBottomColor: "#444859 !important" 
      },
    },

    table: {
      style: {
        borderRadius:"0px",
        width:"100%"
      },
    },
    tableWrapper: {
      style: {
        borderRadius:"0px",
        width:"100%"
      },
    },
    pagination: {
      style: {
        color: "#fff",
        fontSize: '13px',
        minHeight: '56px',
        backgroundColor:'#293038',
        borderTopStyle: 'solid',
        borderTopWidth: '1px',
      },
      pageButtonsStyle: {
        borderRadius: '50%',
        height: '40px',
        width: '40px',
        padding: '8px',
        margin: 'px',
        cursor: 'pointer',
        transition: '0.4s',
        color: "#fff",
        // fill: theme.button.default,
        backgroundColor: 'transparent',
        '&:disabled': {
          cursor: 'unset',
        
        },
        '&:hover:not(:disabled)': {
          // backgroundColor: theme.button.hover,
        },
        '&:focus': {
          outline: 'none',
          // backgroundColor: theme.button.focus,
        },
      },
    },
    responsiveWrapper: {
      style: {
        borderRadius:"0px",
      },
    },
  };
  const columns = [
    {
      name: "Date",
      selector: (row) => row.AsOn,
    },
    {
      name: "Symbol",
      selector: (row) => row.Symbol,
    },
    {
      name: "Open",
      selector: (row) => row.Open,
    },
    {
      name: "High",
      selector: (row) => row.High,
    },
    {
      name: "Low",
      selector: (row) => row.Low,
    },
    {
      name: "Volume",
      selector: (row) => row.Volume,
    },
    {
      name: "Company Percent",
      selector: (row) => row.CompanyPercent,
      style: {
        color: '#92D97F',
      },
      conditionalCellStyles: [
      {
        when: (cellValue) => {
          return parseFloat(cellValue.CompanyPercent?.replace("%","")?.replace(/^\s+|\s+$/g, ''))<0
        },
        style: {
          color: '#FF4D4F',
        },
      },
      ],
    },
    {
      name: "Company Ratio",
      selector: (row) => row.CompanyRatio,
      style: {
        color: '#92D97F',
      },
      conditionalCellStyles: [
      {
        when: (cellValue) => {
          return parseFloat(cellValue?.CompanyRatio?.replace("%","")?.replace(/^\s+|\s+$/g, ''))<0
        },
        style: {
          color: '#FF4D4F',
        },
      },
      ],
    },
  ];

  const {
    data: stocks,
    isLoading,
    isError,
  } = useQuery("stockLiveList", () =>
    getStockLive({
      page: 1,
      limit: 1000,
    }),
    { refetchInterval: false}
  );


  const handleRowClick=(row)=>{
    navigate(`/company?Symbol=${row.Symbol}`);
  }
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  if (isError) {
    return false;
  }
  return (
    <DataTable
      pagination
      columns={columns}
      data={stocks}
      customStyles={customStyles}
      onRowClicked={handleRowClick}
    />
  );
}

export default StockTable;
