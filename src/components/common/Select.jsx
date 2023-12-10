import React from 'react';
import { Label, Input } from 'reactstrap';


export default function AppSelect({ label, options, onSelect }) {
    return (<div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '15px' }}>
        <Label style={{ margin: "0px" }}>{label}&nbsp;</Label>
        <Input
            style={{ width: "300px" }}
            name="select"
            type="select"
            onChange={(e) => onSelect(e.target.value)}
        >
            {
                options.map((option, index) => (<option key={index} value={option.value}>
                    {option.value}
                </option>))
            }
        </Input>
    </div>)
}