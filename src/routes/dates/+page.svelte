<script>
	// export let data; 
	// const {api} = data;
	// console.log(api.map(d => d.date))

function getAllMonthsAndDays(year) {
    const months = [];
    for (let month = 0; month < 12; month++) {
        const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get the number of days in the month
        const monthData = {
            month: month + 1,
            days: []
        };
        for (let day = 1; day <= daysInMonth; day++) {
            monthData.days.push(day);
        }
        months.push(monthData);
    }
    return months;
}

// Example usage:
const year = 2023;
const allMonthsAndDays = getAllMonthsAndDays(year);
	
</script>

<svelte:head>
	<title>Dates</title>
	<meta name="description" content="Dates" />
</svelte:head>

<div class="flex-col flex-wrap">
	{#each allMonthsAndDays as { month, days }}
  <div>
    <h2>Month {month}</h2>
    <ul>
      <!-- Iterate over the days of the month -->
      {#each days as day}
        <li>
          <a href={`/dates/${day}`}>{day}</a>
        </li>
      {/each}
    </ul>
  </div>
{/each}
</div>
