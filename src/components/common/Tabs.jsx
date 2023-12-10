import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default function AppTabs({ tabConfig, activeTab, setActiveTab }) {
    return (<div style={{ marginTop: "25px" }}>
        <Nav tabs>
            {
                tabConfig.map((config, index) => (
                    <NavItem key={index}>
                        <NavLink
                            className={config.id === activeTab ? "active" : ""}
                            onClick={() => {
                                setActiveTab(config.id);
                            }}
                        >
                            {config.title}
                        </NavLink>
                    </NavItem>
                ))
            }
        </Nav>
    </div>)
}