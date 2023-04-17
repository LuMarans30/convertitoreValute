export default async function loadCurrencies() {

    let currencies = [];

    let data = await fetch("/monthly-rates", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "accept": "application/json"
        },
        mode: "cors",
        cache: "no-cache"
    })
        .then((response) => response.json());

    console.log('loadCurrencies', data);

    for (let i = 0; i < data.length; i++) {

        data[i].isoA2Code = data[i].isoA2Code.toLowerCase();

        currencies.push({
            country: data[i].country,
            isoA2Code: data[i].isoA2Code,
            label: data[i].isoA3Code,
            value: data[i].value
        });
    }

    return currencies;
}