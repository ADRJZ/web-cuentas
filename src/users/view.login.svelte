<script>
	import ClientRegister from "./component.login.svelte";
</script>

<section class="hero is-fullheight">
	<div class="hero-body">
		<div class="container">
			<div class="columns">
				<div class="column login is-4">
					<div class="items-login">
						<p class="title">Evaluacion tecnica</p>
						<p class="subtitle">Registro de Clientes</p>
						<ClientRegister />
					</div>
				</div>
				<div class="column items-center">
					<img
						src="images/inventarios.png"
						alt="Inventarios"
						style="width:60%;"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		background: #000000;
	}
	.title,
	.subtitle,
	a {
		color: rgb(255, 255, 255);
		padding-left: 50px;
	}
	.login {
		padding: 5% 0;
	}
	.items-login {
		padding: 10% 0;
	}
</style>
