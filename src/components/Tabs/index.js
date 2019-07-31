import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TabContainer, Tab, TabIndicator } from './styled';

class Tabs extends Component {
  static propTypes = {
    tabs: PropTypes.array.isRequired
  };

  state = {
    currentTab: 0,
  };

  makeHandleTabClick = (currentTab) => () => this.setState({ currentTab });

  render () {
    const { currentTab } = this.state;
    const { tabs } = this.props;

    return (
      <TabContainer>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            isActive={currentTab === index}
            onClick={this.makeHandleTabClick(index)}
            tabIndex={0}
          >
            {tab}
          </Tab>
        ))}
        <TabIndicator
          tabCount={tabs.length}
          currentTab={currentTab}
        />
      </TabContainer>
    );
  }

};

export default Tabs;
