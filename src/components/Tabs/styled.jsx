import styled, { css } from 'styled-components'

const TabContainer = styled.div`
  display: flex;
  position: relative;
`;

const Tab = styled.div`
  flex: 1;
  font-size: 16px;
  color: #A7A7A7;
  text-align: center;
  cursor: pointer;
  padding: 20px 0;
  border-bottom: 2px solid #D3D3D3;
  outline: none;

  &:hover, &:focus {
    color: #4A90E2;
    font-weight: bold;
  }

  ${props =>
    props.isActive &&
    css`
      color: #4A90E2;
      font-weight: bold;
    `};
`;

const TabIndicator = styled.div`
  position: absolute;
  width: ${props => `calc(100% / ${props.tabCount})`};
  height: 3px;
  left: ${props => `calc(100% / ${props.tabCount} * ${props.currentTab})`};
  bottom: 0;
  background: #4A90E2;
  transition: left 1s ease;
`;

export { TabContainer, Tab, TabIndicator };
