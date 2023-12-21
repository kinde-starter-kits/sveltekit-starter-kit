<script lang="ts">
	import type {UserType} from '@kinde-oss/kinde-sveltekit-sdk';

	export let user: UserType | null;
	export let isAuthenticated: boolean;
</script>

<header>
	<nav class="nav container">
		<h1 class="text-display-3">KindeAuth</h1>
		{#if isAuthenticated}
			<div class="profile-blob">
				<div class="avatar">
					{user?.given_name}
				</div>
				<div>
					<p class="text-heading-2 text-capitalize">
						{user?.given_name}
						{user?.family_name}
					</p>
					<a class="text-subtle" href="/api/auth/logout"> Sign out </a>
				</div>
			</div>
		{:else}
			<div>
				<a class="btn btn-ghost sign-in-btn" href="/api/auth/login"> Sign in </a>
				<a class="btn btn-dark" href="/api/auth/register"> Sign up </a>
			</div>
		{/if}
	</nav>
</header>
