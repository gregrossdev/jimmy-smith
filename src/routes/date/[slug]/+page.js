import { error } from '@sveltejs/kit';

export function load({ fetch, params }) {
    const today = new Date().toLocaleDateString("en-us", {
        month: "2-digit",
        day: "2-digit"
    }).replace('/', '-'); 

    console.log(today);

    const fetchDates = async () => {
        const response = await fetch(`https://jimmy-smith.gregross.host/api/dates/${today}`)
        const api = await response.json()
        const data = api.data;
        return data;
    }

    if (params.slug === `${today}`) {
        return {
            api: fetchDates(),
        }
    }

    

    

    throw error(404, 'Not found');
}