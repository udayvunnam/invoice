<script lang="ts">
	import { page } from '$app/stores';
	import cn from '$lib/util/classnames';

	let isMenuOpen = false;

	const menuItems = [
		{ label: 'Dashboard', href: '/' },
		{ label: 'Create Invoice', href: '/invoice' },
		{ label: 'My Invoices', href: '/invoices' }
	];
</script>

<nav class="border-b border-gray-200 bg-white">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 justify-between">
			<div class="flex">
				<div class="flex flex-shrink-0 items-center">
					<img class="block h-8 w-auto" src="TeamCoda_Logo.svg" alt="Invoice" />
				</div>

				<div class="hidden sm:-my-px sm:ml-20 sm:flex sm:space-x-8">
					{#each menuItems as { href, label }}
						<a
							sveltekit:prefetch
							{href}
							class={cn(
								'border-transparent inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
								$page.url.pathname === href
									? 'border-pink-500 text-gray-900'
									: 'text-gray-500 hover:border-gray-300 hover:text-gray-700'
							)}
							aria-current={$page.url.pathname === href ? 'page' : false}
						>
							{label}
						</a>
					{/each}
				</div>
			</div>

			<div class="-mr-2 flex items-center sm:hidden">
				<!-- Mobile menu button -->
				<button
					type="button"
					class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
					aria-controls="mobile-menu"
					aria-expanded="false"
					on:click={() => {
						isMenuOpen = !isMenuOpen;
					}}
				>
					<span class="sr-only">Open main menu</span>
					<!--
              Heroicon name: outline/menu
            -->
					<svg
						class={cn('h-6 w-6', isMenuOpen ? 'hidden' : 'block')}
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
					<!--
              Heroicon name: outline/x
            -->
					<svg
						class={cn('h-6 w-6', isMenuOpen ? 'block' : 'hidden')}
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
		</div>
	</div>

	{#if isMenuOpen}
		<div class="sm:hidden" id="mobile-menu">
			<div class="space-y-1 pt-2 pb-3">
				{#each menuItems as { href, label }}
					<a
						sveltekit:prefetch
						{href}
						class={cn(
							'border-transparent block pl-3 pr-4 py-2 border-l-4 text-base font-medium',
							$page.url.pathname === href
								? 'bg-pink-50 border-pink-500 text-pink-700'
								: 'text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
						)}
						aria-current={$page.url.pathname === href ? 'page' : false}
					>
						{label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>
