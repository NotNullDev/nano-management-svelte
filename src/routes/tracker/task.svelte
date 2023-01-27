<script lang="ts">
	const sampleTasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4'];
</script>

<div class="p-4  shadow rounded-xl shadow-primary flex gap-4 items-center">
	<label class="flex flex-col gap-1">
		<p>task name</p>
		<div class="dropdown">
			<input tabindex="0" class="input input-bordered input-sm w-[150px]" placeholder="name" />
			<ul class="dropdown-content menu p-2 shadow rounded-box w-52 mt-2 bg-base-200">
				{#each sampleTasks as task}
					<li class="menu-item">
						<a href="#" class="btn btn-ghost btn-sm">{task}</a>
					</li>
				{/each}
			</ul>
		</div>
	</label>
	<label class="flex flex-col w-[100px] gap-1">
		<p>task duration</p>
		<input class="input input-bordered input-sm" placeholder="duration" type="number" />
	</label>
	<label class="flex flex-col w-[200px] gap-1">
		<p>date</p>
		<input class="input input-bordered input-sm" placeholder="date" type="date" />
	</label>
	<button class="btn btn-ghost btn-sm">+ comment</button>
</div>
