<script lang="ts">
	import { goto } from '$app/navigation';

	const save = () => {
		goto('/invoices');
	};
	const cancel = () => {
		goto('/');
	};
</script>

<svelte:head>
	<title>Create Invoice</title>
</svelte:head>

<div class="space-y-6">
	<div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
		<h3 class="text-lg font-medium leading-6 text-gray-900">Payment Details</h3>
		<div class="mt-5">
			<form class="space-y-6" action="#" method="POST">
				<div class="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
					<div class="flex-grow">
						<label for="item" class="block text-sm font-medium text-gray-700">Item</label>
						<input
							type="text"
							name="item"
							id="item"
							autocomplete="given-name"
							placeholder="description of product or service"
							class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
						/>
					</div>

					<div>
						<label for="quantity" class="block text-sm font-medium text-gray-700">Quantity</label>
						<input
							type="text"
							name="quantity"
							id="quantity"
							autocomplete="given-name"
							class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
						/>
					</div>

					<div>
						<label for="price" class="block text-sm font-medium text-gray-700">Price</label>
						<input
							type="text"
							name="price"
							id="price"
							autocomplete="given-name"
							class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
						/>
					</div>

					<div>
						<label for="amount" class="block text-sm font-medium text-gray-700">Amount</label>
						<input
							type="text"
							name="amount"
							id="amount"
							autocomplete="given-name"
							class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
						/>
					</div>
				</div>

				<div>
					<label for="description" class="block text-sm font-medium text-gray-700">
						Description
					</label>
					<div class="mt-1">
						<textarea
							id="description"
							name="description"
							rows="3"
							class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
							placeholder="project description"
						/>
					</div>
				</div>

				<div class="flex items-start">
					<div class="flex h-5 items-center">
						<input
							id="addTax"
							name="addTax"
							type="checkbox"
							class="h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500"
						/>
					</div>
					<div class="ml-3 text-sm">
						<label for="addTax" class="font-medium text-gray-700">Add tax</label>
						<p class="text-gray-500">check this tickbox to include tax column.</p>
					</div>
				</div>
			</form>
		</div>
	</div>

	<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
		<div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
			<h3 class="text-lg font-medium leading-6 text-gray-900">From</h3>
			<p class="mt-1 text-sm text-gray-500">Invoice from the person/team providing services.</p>
			<div class="mt-5">
				<form action="#" method="POST">
					<div class="grid grid-cols-6 gap-6">
						<div class="col-span-6 sm:col-span-3">
							<label for="first-name" class="block text-sm font-medium text-gray-700"
								>First name</label
							>
							<input
								type="text"
								name="first-name"
								id="first-name"
								autocomplete="given-name"
								class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
							/>
						</div>

						<div class="col-span-6 sm:col-span-3">
							<label for="last-name" class="block text-sm font-medium text-gray-700"
								>Last name</label
							>
							<input
								type="text"
								name="last-name"
								id="last-name"
								autocomplete="family-name"
								class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
							/>
						</div>

						<div class="col-span-6 sm:col-span-4">
							<label for="email-address" class="block text-sm font-medium text-gray-700"
								>Email address</label
							>
							<input
								type="text"
								name="email-address"
								id="email-address"
								autocomplete="email"
								class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
							/>
						</div>

						<div class="col-span-6 sm:col-span-3">
							<label for="country" class="block text-sm font-medium text-gray-700">Country</label>
							<select
								id="country"
								name="country"
								autocomplete="country-name"
								class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"
							>
								<option>Netherlands</option>
								<option>United States</option>
								<option>Canada</option>
								<option>Mexico</option>
							</select>
						</div>

						<div class="col-span-6">
							<label for="street-address" class="block text-sm font-medium text-gray-700"
								>Street address</label
							>
							<input
								type="text"
								name="street-address"
								id="street-address"
								autocomplete="street-address"
								class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
							/>
						</div>

						<div class="col-span-6 sm:col-span-6 lg:col-span-2">
							<label for="city" class="block text-sm font-medium text-gray-700">City</label>
							<input
								type="text"
								name="city"
								id="city"
								autocomplete="address-level2"
								class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
							/>
						</div>

						<div class="col-span-6 sm:col-span-3 lg:col-span-2">
							<label for="region" class="block text-sm font-medium text-gray-700"
								>State / Province</label
							>
							<input
								type="text"
								name="region"
								id="region"
								autocomplete="address-level1"
								class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
							/>
						</div>

						<div class="col-span-6 sm:col-span-3 lg:col-span-2">
							<label for="postal-code" class="block text-sm font-medium text-gray-700"
								>ZIP / Postal code</label
							>
							<input
								type="text"
								name="postal-code"
								id="postal-code"
								autocomplete="postal-code"
								class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
		<div class="bg-white px-4 py-5 shadow sm:rounded-lg sm:p-6">
			<h3 class="text-lg font-medium leading-6 text-gray-900">Bill To</h3>
			<p class="mt-1 text-sm text-gray-500">Invoice to the person/team accepting services.</p>
			<div class="mt-5">
				<form action="#" method="POST">
					<div class="grid grid-cols-6 gap-6">
						<div class="col-span-6 sm:col-span-3">
							<label for="first-name" class="block text-sm font-medium text-gray-700"
								>First name</label
							>
							<input
								type="text"
								name="first-name"
								id="first-name"
								autocomplete="given-name"
								class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
							/>
						</div>

						<div class="col-span-6 sm:col-span-3">
							<label for="last-name" class="block text-sm font-medium text-gray-700"
								>Last name</label
							>
							<input
								type="text"
								name="last-name"
								id="last-name"
								autocomplete="family-name"
								class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
							/>
						</div>

						<div class="col-span-6 sm:col-span-4">
							<label for="email-address" class="block text-sm font-medium text-gray-700"
								>Email address</label
							>
							<input
								type="text"
								name="email-address"
								id="email-address"
								autocomplete="email"
								class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
							/>
						</div>

						<div class="col-span-6 sm:col-span-3">
							<label for="country" class="block text-sm font-medium text-gray-700">Country</label>
							<select
								id="country"
								name="country"
								autocomplete="country-name"
								class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"
							>
								<option>Netherlands</option>
								<option>United States</option>
								<option>Canada</option>
								<option>Mexico</option>
							</select>
						</div>

						<div class="col-span-6">
							<label for="street-address" class="block text-sm font-medium text-gray-700"
								>Street address</label
							>
							<input
								type="text"
								name="street-address"
								id="street-address"
								autocomplete="street-address"
								class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
							/>
						</div>

						<div class="col-span-6 sm:col-span-6 lg:col-span-2">
							<label for="city" class="block text-sm font-medium text-gray-700">City</label>
							<input
								type="text"
								name="city"
								id="city"
								autocomplete="address-level2"
								class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
							/>
						</div>

						<div class="col-span-6 sm:col-span-3 lg:col-span-2">
							<label for="region" class="block text-sm font-medium text-gray-700"
								>State / Province</label
							>
							<input
								type="text"
								name="region"
								id="region"
								autocomplete="address-level1"
								class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
							/>
						</div>

						<div class="col-span-6 sm:col-span-3 lg:col-span-2">
							<label for="postal-code" class="block text-sm font-medium text-gray-700"
								>ZIP / Postal code</label
							>
							<input
								type="text"
								name="postal-code"
								id="postal-code"
								autocomplete="postal-code"
								class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>

	<div class="flex justify-end p-4">
		<button
			on:click={cancel}
			type="button"
			class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
			>Cancel</button
		>
		<button
			on:click={save}
			type="submit"
			class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-pink-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
			>Save</button
		>
	</div>
</div>
