<script lang="ts">
  import type { PageData, ActionData } from "./$types";
  import { onMount } from "svelte";
  import { invalidateAll } from "$app/navigation";
  import { Turnstile } from "svelte-turnstile";
  import { page } from "$app/stores";

  export let form: ActionData;
  export let data: PageData;
</script>

<form method="POST">
  <button class="btn btn-lg bg-primary text-white shadow-md shadow-gray-400"
    >submit</button>
</form>
