
export function load({ fetch, params }) {

    const fetchDates = async () => {
        const response = await fetch(`https://jimmy-smith.gregross.host/api/dates/2023-${params.date}`)
        const api = await response.json()
        const data = api.data;
        return data;
    }


    return {
        api: fetchDates(),
    }

}