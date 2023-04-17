import React from 'react';

import { TextField, MenuItem, Typography } from '@mui/material';

import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function CurrencyInput(props) {

    return (
        <>
            <TextField
                select
                value={props.value}
                onChange={(e) => props.onChange(e)}
            >
                {
                    props.currencies.map((option) => (
                        <MenuItem
                            key={option.label}
                            value={option.label}
                        >
                            <Typography variant="body1" component="div">
                                <div className='country-info'>
                                    <span class={"fi fi-" + option.isoA2Code}></span>
                                    <span>{option.label} - {option.value}</span>
                                </div>
                            </Typography>
                        </MenuItem>
                    ))
                }
            </TextField>
        </>
    );
}