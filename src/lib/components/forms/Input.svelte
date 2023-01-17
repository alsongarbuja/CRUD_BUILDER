<script lang="ts">
    export let label: string, name: string, value: string;
    export let isRequired: boolean = false;

    function handleChange(e: Event) {
        value = (e.target as HTMLInputElement).value;
    }
</script>

<div>
    <label for="">{label}</label>
    <input type="text" required={isRequired} {name} {value} on:change={handleChange}>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
    }
    label {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
    }
    input {
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
        font-size: 1.2rem;
    }
</style>