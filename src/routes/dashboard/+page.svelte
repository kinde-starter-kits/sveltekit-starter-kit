<script>
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	export let data;
</script>

<svelte:head>
	<title>Kinde Auth | SvelteKit Starter Kit</title>
</svelte:head>

<Header isAuthenticated={data.isAuthentication} user={data.userProfile} />

<main>
	<div class="container">
		<div class="card hero">
			<p class="text-display-1 hero-title">
				DashboardLet's start authenticating <br /> with KindeAuth
			</p>
			<p class="text-body-1 hero-tagline">Configure your app</p>

			<a
				class="btn btn-light btn-big"
				href="https://kinde.com/docs/developer-tools/sveltekit-sdk/"
				target="_blank"
			>
				Go to docs
			</a>
		</div>
	</div>
</main>
<Footer />
