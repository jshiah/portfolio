<script>
    import { onMount } from 'svelte';
    import { page } from '$app/stores';

    let pages = [
        { url: './', title: 'Home' },
        // { url: './projects', title: 'Projects' },
        { url: './cv', title: 'CV' },
        // { url: './contact', title: 'Contact' },
        // { url: './meta', title: 'Meta' },
        { url: 'https://github.com/jshiah', title: 'GitHub' } 
    ];

    let colorScheme = 'automatic'; 
    let root = globalThis?.document?.documentElement; 

    // Function to handle theme change
    function handleThemeChange(event) {
        const scheme = event.target.value;
        colorScheme = scheme; 
        if (typeof localStorage !== 'undefined') {
            localStorage.colorScheme = scheme; 
        }
    }

    onMount(() => {
        if (typeof localStorage !== 'undefined' && "colorScheme" in localStorage) {
            colorScheme = localStorage.colorScheme;
        }
    });

    $: root?.style.setProperty('color-scheme', colorScheme);
</script>

<svelte:head>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
</svelte:head>

<style>
    body {
        font-family: 'Poppins', sans-serif; 
    }

    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 30px;
        background-color: rgba(255, 255, 255, 0.9);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;
        backdrop-filter: blur(10px);
        border-radius: 10px;
    }

    nav a {
        text-decoration: none;
        font-weight: 600;
        color: #333;
        padding: 10px 20px;
        border-radius: 8px;
        transition: background-color 0.3s, color 0.3s;
        margin: 0 10px;
        font-family: 'Poppins', sans-serif; 
    }

    nav a:hover {
        background-color: #4A90E2;
        color: white;
    }

    nav a.current {
        background-color: #4A90E2;
        color: white;
        font-weight: 700;
    }

    .color-scheme {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .color-scheme label {
        font-size: 14px;
        color: #333;
        font-family: 'Poppins', sans-serif; 
    }

    .color-scheme select {
        padding: 6px 12px;
        border-radius: 8px;
        background-color: #f0f0f0;
        border: 1px solid #ccc;
        transition: all 0.3s ease;
        font-family: 'Poppins', sans-serif; 
    }

    .color-scheme select:hover {
        background-color: #4A90E2;
        color: white;
        border-color: #4A90E2;
    }

    @media (max-width: 768px) {
        nav {
            flex-direction: column;
            align-items: flex-start;
        }

        .color-scheme {
            margin-top: 10px;
        }
    }
</style>

<nav>
    <div class="links">
        {#each pages as p}
            <a href={p.url} class:current={'.' + $page.route.id === p.url} target={ p.url.startsWith("http") ? "_blank" : null }>
                {p.title}
            </a>
        {/each}
    </div>

    <div class="color-scheme">
        <label for="theme">Theme:</label>
        <select id="theme" bind:value={colorScheme} on:change={handleThemeChange}>
            <option value="automatic">Automatic</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
    </div>
</nav>

<slot />
