<script lang="ts">
	import cn from '$lib/util/classnames';
	import Header from '$lib/components/Header.svelte';
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="flex flex-col min-h-screen">
	<Header />

	<div class="py-10 flex-grow">
		<main>
			<div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
				<slot />
			</div>
		</main>
	</div>

	<Footer />
</div>
