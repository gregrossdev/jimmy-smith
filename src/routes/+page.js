import { today } from '$lib/today.js'; 

export const load = async ({fetch}) => {



    const fetchDates = async () => {
        const response2023 = await fetch(`https://jimmy-smith.gregross.host/api/dates/2023-${today}`)
        const response2024 = await fetch(`https://jimmy-smith.gregross.host/api/dates/2024-${today}`)
        const api = await response2023.json() || response2024.json();
        const data = api.data;
        return data;
    }

    return {
        api: fetchDates(),
    }
}

export const prerender = true;
