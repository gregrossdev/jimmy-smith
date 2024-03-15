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

function getMonthName(month) {
    const monthNames = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ];
    return monthNames[month - 1];
  }
	
</script>

<style>
  /* Style for the flex container */
  .flex-container {
    display: flex;
    flex-wrap: wrap; /* Allow items to wrap to the next row */
    list-style: none; /* Remove default list styles */
    padding: 0;
  }

  /* Style for each month */
  .month {
    margin: 10px; /* Add some spacing between months */
  }
</style>

<svelte:head>
	<title>Dates</title>
	<meta name="description" content="Dates" />
</svelte:head>

<div class="flex-col flex-wrap">
	{#each allMonthsAndDays as { month, days }}
  <div class="month">
    <h2>{getMonthName(month)}</h2>
    <ul class="flex-container">
      <!-- Iterate over the days of the month -->
      {#each days as day}
        <li>
          <a href={`/dates/2023-${month}-${day}`}>{day}</a>
        </li>
      {/each}
    </ul>
  </div>
{/each}
</div>
