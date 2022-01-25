<script>
    import "./$styles/bulma.light.scss";
    import "./$styles/global.scss";

    import Router from "svelte-spa-router";
    import { routes } from "./routes";

</script>

<div class="app-size">
    <Router {routes} />
</div>

<style>
    .app-size {
        width: 100vw;
        height: 100vh;
        overflow: auto;
    }
</style>