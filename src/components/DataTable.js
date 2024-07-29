import React from "react";
import EnhancedTable from "./Table";
import styled from "styled-components";
import dataImage from "../assets/data.jpg";
import SpaceDashboardRoundedIcon from "@mui/icons-material/SpaceDashboardRounded";
import HomeIcon from "@mui/icons-material/Home";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import Avatar from "@mui/material/Avatar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";

const Container = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.div`
  width: 100px;
  background-color: #254678;
  color: white;
  padding: 20px;
  height: 150vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    display: None;
    width: 60px;
    height: auto;
    padding: 10px;
  }
`;

const Logo = styled.img`
  width: 80%;
  border-radius: 50px;
  display: flex;
  padding: 10px;
  align-items: center;

  @media (max-width: 768px) {
    width: 60%;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const TopNavbar = styled.div`
  background-color: #254678;
  color: white;
  display: flex;
  border-radius: 0 0 5px 0px;
  justify-content: space-between;
  padding-right: 10px;
  padding-left: 10px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 10px;
  }
`;

const TableContainer = styled.div`
  margin-top: 20px;
  margin-left: 40px;
  margin-right: 30px;
  width: 80%;
  display: flex;
  padding: 30px;
  align-items: center;
  justify-content: center;
  background-color: #edf5ef;
  border-radius: 20px;
  box-shadow: 0 10px 10px 0;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const DataTable = () => {
  return (
    <Container>
      <Sidebar>
        <Logo src={dataImage} alt="Company Logo 1" className="logo" />
        <div className="icons">
          <SpaceDashboardRoundedIcon fontSize="large" />
          <HomeIcon fontSize="large" />
          <AdminPanelSettingsIcon fontSize="large" />
        </div>
      </Sidebar>
      <Content>
        <TopNavbar>
          <div>
            <h1 style={{ textAlign: "center", fontSize: "1.5rem" }}>
              User Data
            </h1>
          </div>
          <div className="right-navbar">
            <SearchIcon fontSize="large" />
            <NotificationsIcon fontSize="large" />
            <Avatar alt="Remy Sharp" src="" sx={{ width: 36, height: 36 }} />
          </div>
        </TopNavbar>
        <TableContainer>
          <EnhancedTable />
        </TableContainer>
      </Content>
    </Container>
  );
};

export default DataTable;
