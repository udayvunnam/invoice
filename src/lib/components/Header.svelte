<script lang="ts">
	import { page } from '$app/stores';
	import cn from '$lib/util/classnames';

	let isMenuOpen = false;
</script>

<nav class="bg-white border-b border-gray-200">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between h-16">
			<div class="flex">
				<div class="flex-shrink-0 flex items-center">
					<img class="block h-8 w-auto" src="../../../static/TeamCoda_Logo.svg" alt="Invoice" />
				</div>

				<div class="hidden sm:-my-px sm:ml-20 sm:flex sm:space-x-8">
					<a
						sveltekit:prefetch
						href="/"
						class={cn(
							'border-transparent inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
							$page.url.pathname === '/'
								? 'border-pink-500 text-gray-900'
								: 'text-gray-500 hover:border-gray-300 hover:text-gray-700'
						)}
						aria-current={$page.url.pathname === '/' ? 'page' : false}
					>
						Create Invoice
					</a>

					<a
						sveltekit:prefetch
						href="/invoices"
						class={cn(
							'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium',
							$page.url.pathname === '/invoices'
								? 'border-pink-500 text-gray-900'
								: 'text-gray-500 hover:border-gray-300 hover:text-gray-700'
						)}
						aria-current={$page.url.pathname === '/invoices' ? 'page' : false}
					>
						My Invoices
					</a>
				</div>
			</div>

			<div class="-mr-2 flex items-center sm:hidden">
				<!-- Mobile menu button -->
				<button
					type="button"
					class="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
					aria-controls="mobile-menu"
					aria-expanded="false"
					on:click={() => {
						isMenuOpen = !isMenuOpen;
					}}
				>
					<span class="sr-only">Open main menu</span>
					<!--
              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
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

              Menu open: "block", Menu closed: "hidden"
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
			<div class="pt-2 pb-3 space-y-1">
				<a
					sveltekit:prefetch
					href="/"
					class={cn(
						'border-transparent  block pl-3 pr-4 py-2 border-l-4 text-base font-medium',
						$page.url.pathname === '/'
							? 'bg-pink-50 border-pink-500 text-pink-700'
							: 'text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
					)}
					aria-current={$page.url.pathname === '/' ? 'page' : false}
				>
					Create Invoice
				</a>

				<a
					sveltekit:prefetch
					href="/invoices"
					class={cn(
						'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium',
						$page.url.pathname === '/invoices'
							? 'bg-pink-50 border-pink-500 text-pink-700'
							: 'text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
					)}
					aria-current={$page.url.pathname === '/invoices' ? 'page' : false}
				>
					My Invoices
				</a>
			</div>
		</div>
	{/if}
</nav>
