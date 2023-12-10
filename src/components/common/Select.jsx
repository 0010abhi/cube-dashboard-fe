import React from 'react';
import { Label, Input } from 'reactstrap';

export default function AppSelect({ label, options, onSelect }) {
    return (<div>
        <Label>{label}</Label>
        <Input
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