<script lang="ts">
	const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
	const monthlyDateLength = 31;
	const columLength = days.length;
	const rowLength = Math.ceil(monthlyDateLength / columLength);
	console.log(columLength, rowLength)
</script>

<table class="calendar">
	<thead>
		<tr>
			{#each days as day}
				<th>{day}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each Array(rowLength) as _}
			<tr>
				{#each Array(columLength) as _}
				<td></td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style lang="scss" scoped>
	table.calendar {
		width: 100%;
		border-collapse: collapse;
		border-radius: 15px;
		border-style: hidden;
		box-shadow: 0 0 0 1px var(--color-gray-2);
		overflow: hidden;

		th, td {
			border: 1px solid var(--color-gray-2);
			width: calc(100% / 7);
		}

		th {
			font-size: 12px;
			font-weight: 400;
			padding: 6px 0;
			background-color: var(--color-gray-3);

			&:first-child {
				color: var(--color-red);
			}

			&:last-child {
				color: var(--color-blue);
			}
		}

		td {
			height: 150px;
			padding: 10px 0;
			background-color: var(--color-dark-2);
		}
	}
</style>
