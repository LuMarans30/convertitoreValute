import React, { useEffect } from 'react';
import { TextField } from '@mui/material';

import { Button } from '@mui/material';

import '../css/convertitoreForm.css';
import CurrencyInput from './currencyinput';

import loadCurrencies from './helpers/sendrequest';

export default function ConvertitoreForm() {

    const [currencies, setCurrencies] = React.useState([]);

    const [source, setSource] = React.useState('');
    const [target, setTarget] = React.useState('');

    const [sourceCurrency, setSourceCurrency] = React.useState("EUR");
    const [targetCurrency, setTargetCurrency] = React.useState("USD");

    React.useEffect(() => {
        setTarget(calculateTarget());
    }, [source, sourceCurrency, targetCurrency]);

    const calculateTarget = () => {
        let sourceValue = parseFloat(source);
        let targetValue = 0;

        if (source > 0 && sourceCurrency !== "" && targetCurrency !== "") {
            let sourceRate = currencies.find(c => c.label === sourceCurrency).value;
            let targetRate = currencies.find(c => c.label === targetCurrency).value;

            targetValue = (sourceValue * targetRate) / sourceRate;
        }

        return targetValue.toFixed(2);
    }

    const swapCurrencies = () => {
        console.log('swapCurrencies', sourceCurrency, targetCurrency);
        let temp = sourceCurrency;
        setSourceCurrency(targetCurrency);
        setTargetCurrency(temp);
    }

    useEffect(async () => {
        setCurrencies(await loadCurrencies());
        console.log('useEffect', currencies);
    }, []);

    return (
        <>
            <form id='input-form'>
                <div className='currency-form'>
                    <TextField
                        label='Source currency amount'
                        error={source.length > 0 && parseInt(source) < 0}
                        value={source}
                        onChange={(e) => setSource(e.target.value)}
                        onKeyPress={(e) => !/[0-9.]/.test(e.key) && e.preventDefault()}
                        variant='outlined'
                    />
                    <CurrencyInput
                        currencies={currencies}
                        value={sourceCurrency}
                        onChange={(e) => setSourceCurrency(e.target.value)}
                    />
                </div>
                <div className='currency-form'>
                    <TextField
                        label="Target currency amount"
                        multiline
                        value={target}
                        maxRows={4}
                        variant="filled"
                        disabled
                    />
                    <CurrencyInput
                        currencies={currencies}
                        value={targetCurrency}
                        onChange={(e) => setTargetCurrency(e.target.value)}
                    />
                </div>
                <Button
                    variant='contained'
                    size='large'
                    sx={{ mt: 2 }}
                    onClick={() => swapCurrencies()}>
                    Swap
                </Button>
            </form>
        </>
    );
}