<script lang="ts">
	import cn from '$lib/util/classnames';
	import type { Invoice } from '.';

	const columns = ['Bill To', 'Amount', 'Payment', 'Date'];
	export let invoices: Invoice[];
</script>

<svelte:head>
	<title>My Invoices</title>
</svelte:head>

<div class="flex flex-col">
	<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
		<div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
			<div class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
				<table class="min-w-full divide-y divide-gray-200">
					<thead class="bg-gray-50">
						<tr>
							{#each columns as column}
								<th
									scope="col"
									class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
									>{column}</th
								>
							{/each}
							<th scope="col" class="relative px-6 py-3">
								<span class="sr-only">Edit</span>
							</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-gray-200 bg-white">
						{#each invoices as { billTo, amount, payment, date, uid }}
							<tr>
								<td class="whitespace-nowrap px-6 py-4">
									<div class="text-sm text-gray-900">{billTo.name}</div>
									<div class="text-sm text-gray-500">{billTo.company}</div>
								</td>
								<td class="whitespace-nowrap px-6 py-4">
									<span class="text-sm font-bold text-gray-900">{amount.value}</span>
									<span class="text-xs text-gray-500">{amount.currency}</span>
								</td>

								<td class="whitespace-nowrap px-6 py-4">
									<span
										class={cn(
											'inline-flex rounded-full  px-2 text-xs font-semibold leading-5',
											payment === 'done'
												? 'bg-green-100 text-green-800'
												: 'bg-gray-100 text-gray-800'
										)}
									>
										{payment}
									</span>
								</td>
								<td class="whitespace-nowrap px-6 py-4 text-sm text-gray-500">{date}</td>
								<td class="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
									<a href={`/invoice/${uid}`} class="text-pink-600 hover:text-pink-900">Edit</a>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
