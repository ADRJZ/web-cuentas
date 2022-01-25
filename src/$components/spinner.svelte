<script>
	  
	export let loading = false
	  
</script>

<style>
	.loader,
	.loader:after {
		border-radius: 50%;
		width: 8em;
		height: 8em;
	}
	.loader {
		margin: 0px auto;
		font-size: 5px;
		position: relative;
		text-indent: -9999em;
		border-top: 1.1em solid rgba(88, 99, 223, 0.1);
		border-right: 1.1em solid rgba(88, 99, 223, 0.1);
		border-bottom: 1.1em solid rgba(88, 99, 223, 0.1);
		border-left: 1.1em solid #1d3557;
		-webkit-transform: translateZ(0);
		-ms-transform: translateZ(0);
		transform: translateZ(0);
		-webkit-animation: load8 1.1s infinite linear;
		animation: load8 1.1s infinite linear;
	}
	@-webkit-keyframes load8 {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
	@keyframes load8 {
		0% {
			-webkit-transform: rotate(0deg);
			transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
</style>

{#if loading}
	<div class="loader">Loading...</div>
{/if}