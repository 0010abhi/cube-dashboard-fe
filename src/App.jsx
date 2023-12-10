import React, { useState } from 'react';
import './App.css'
import { Container, TabContent } from 'reactstrap';
import WorkforceByGender from './components/WorkforceByGender';
import ProductCategoryCount from './components/ProductCategoryCount';
import AppTabs from './components/common/Tabs';
import AppTabPane from './components/common/TabPane';
import APP_TABS from './config/tab';
import OrdersCount from './components/OrdersCount';

export default function App() {
  const [activeTab, setActiveTab] = useState("1");

  function renderTabPane(tab, index) {
    let ele;
    switch (activeTab) {
      case "1":
        console.log('>> render tab pane',)
        ele = <AppTabPane tabId={tab.id} key={index}>
          <WorkforceByGender />
        </AppTabPane>
        break;
      case "2":
        ele = <AppTabPane tabId={tab.id} key={index}>
          <ProductCategoryCount />
        </AppTabPane>
        break;
      case "3":
        ele = <AppTabPane tabId={tab.id} key={index}>
          <OrdersCount />
        </AppTabPane>
        break;
      default:
        break;
    }
    return ele;
  }

  return (
    <Container fluid>
      <h5>
        Demo Cube JS
      </h5>
      <AppTabs tabConfig={APP_TABS} activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabContent activeTab={activeTab}>
        {
          APP_TABS.map((tab, index) => renderTabPane(tab, index))
        }
      </TabContent>
    </Container>
  )
}
