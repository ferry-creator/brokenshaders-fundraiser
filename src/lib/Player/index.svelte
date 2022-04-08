<script>
	export let src, cover
	import Cover from './Cover.svelte'
</script>

<Cover {cover} />

<div class="transport">
	<audio controls>
		<source {src} type="audio/mpeg" preload="metadata" />
		Your browser does not support the audio player.
	</audio>
</div>

<style lang="scss">
	.transport {
		margin-top: 20px;
	}
</style>
