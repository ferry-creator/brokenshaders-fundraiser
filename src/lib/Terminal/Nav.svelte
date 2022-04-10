<script>
	import Webding from '$lib/IconWebding.svelte'
</script>

<nav>
	<ul>
		<li class="icon">
			<Webding>&#xe903;</Webding>
		</li>
		<li>
			<a href="/">{`<< `}ESC</a>
		</li>
		<li>
			<span style="display: inline-block; width: 55px" />
		</li>
		<li>BROKEN-OS ~ 0.1</li>
		<li>
			<span style="display: inline-block" />
		</li>
		<li>2038 NULL</li>
	</ul>
</nav>

<style>
	nav {
		/* color: var(--secondary-color);
		/* text-opacity: 0.75; */
		user-select: none;
		background: var(--accent-color-alt);
		color: var(--tertiary-color);
		margin-bottom: 10px;
		/* padding: 0 2px; */
	}

	ul,
	ul li,
	ul ul li {
		margin: 0;
		padding: 0;
		text-indent: 0;
		list-style: none;
		list-style-type: none;
	}

	li {
		display: inline;
	}

	a:hover {
		text-decoration: none;
	}

	a {
		color: white;
		background: var(--accent-color);
		display: inline-block;
	}

	:global(.icon span) {
		width: 19px !important;
		transform: translate(6px, 0);
	}
</style>
