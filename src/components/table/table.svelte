<script>
</script>

<table class="p-8 w-1/2">
	<thead>
		<tr class="">
			<th class="flex items-end ">
				<input type="checkbox" class=" mx-4 self-start checkbox checkbox-sm checkbox-accent" />
			</th>
			<th class="text-start cursor-pointer py-2 px-4 hover:bg-base-200 rounded  text-sm"
				>First Name</th
			>
			<th class="text-start cursor-pointer py-2 px-4 hover:bg-base-200 rounded  text-sm"
				>Last Name</th
			>
			<th class="text-start cursor-pointer py-2 px-4 hover:bg-base-200 rounded  text-sm">Age</th>
		</tr>
	</thead>
	<tbody>
		<tr class="hover:bg-base-200 cursor-pointer ">
			<td class="hover:bg-none flex items-center ">
				<input type="checkbox" class="checkbox checkbox-sm my-2 mx-4 checkbox-accent" />
			</td>
			<td class="py-2 px-4" contenteditable>John</td>
			<td class="py-2 px-4">John</td>
			<td class="py-2 px-4">John</td>
		</tr>
		<tr class="hover:bg-base-200 cursor-pointer ">
			<td class="hover:bg-none flex items-center ">
				<input type="checkbox" class="checkbox checkbox-sm my-2 mx-4 checkbox-accent" />
			</td>
			<td class="py-2 px-4">John</td>
			<td class="py-2 px-4">John</td>
			<td class="py-2 px-4">John</td>
		</tr>
		<tr class="hover:bg-base-200 cursor-pointer ">
			<td class="hover:bg-none flex items-center ">
				<input type="checkbox" class="checkbox checkbox-sm my-2 mx-4 checkbox-accent" />
			</td>
			<td class="py-2 px-4">John</td>
			<td class="py-2 px-4">John</td>
			<td class="py-2 px-4">John</td>
		</tr>
	</tbody>
</table>

<style>
	/* label.checkbox-label {
		padding: 8px;
		background-color: indigo;
		border-radius: 12%;
	} */
	label.checkbox-label:nth-child(2):checked {
		padding: 8px;
		background-color: indigo;
		border-radius: 12%;
	}
</style>
