import { ButtonGroup } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header() {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <img src='/img/Google_Drive.jpeg' alt='' />
          <span>Drive</span>
        </Logo>
        <InputContainer>
          <SearchContainer>
            <ButtonGroup>
              <SearchIcon />
            </ButtonGroup>
            <input type='text' placeholder='Search in Drive' />
          </SearchContainer>
        </InputContainer>
        <RightContainer>
          <LeftSection>
            <HelpOutlineIcon />
            <SettingsOutlinedIcon />
          </LeftSection>
          <RightSection>
            <AppsOutlinedIcon />
            <AccountCircleIcon />
          </RightSection>
        </RightContainer>
      </Wrapper>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #ffffff;
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 40px;
    margin-right: 10px;
  }

  span {
    font-size: 20px;
    font-weight: bold;
  }
`;

const InputContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  background-color: #f1f3f4;
  border-radius: 8px;
  padding: 5px 10px;

  input {
    border: none;
    outline: none;
    width: 100%;
    background-color: transparent;
    padding-left: 10px;
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 15px;
    cursor: pointer;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-left: 15px;
    cursor: pointer;
  }
`;
