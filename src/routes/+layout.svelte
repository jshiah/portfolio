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

    // Initialize colorScheme with a default value
    let colorScheme = 'automatic'; // Default value
    let root = globalThis?.document?.documentElement; // Access the <html> element

    // Function to handle theme change
    function handleThemeChange(event) {
        const scheme = event.target.value;
        colorScheme = scheme; // Update the variable
        if (typeof localStorage !== 'undefined') {
            localStorage.colorScheme = scheme; // Save to localStorage
        }
    }

    // Set initial value based on localStorage or OS preference
    onMount(() => {
        if (typeof localStorage !== 'undefined' && "colorScheme" in localStorage) {
            colorScheme = localStorage.colorScheme;
        }
    });

    // Reactive statement to set the color scheme
    $: root?.style.setProperty('color-scheme', colorScheme);
</script>

<style>
    /* Global styles for the navbar */
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

    /* Styling for the links */
    nav a {
        text-decoration: none;
        font-weight: 600;
        color: #333;
        padding: 10px 20px;
        border-radius: 8px;
        transition: background-color 0.3s, color 0.3s;
        margin: 0 10px;
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

    /* Theme Switcher */
    .color-scheme {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .color-scheme label {
        font-size: 14px;
        color: #333;
    }

    .color-scheme select {
        padding: 6px 12px;
        border-radius: 8px;
        background-color: #f0f0f0;
        border: 1px solid #ccc;
        transition: all 0.3s ease;
    }

    .color-scheme select:hover {
        background-color: #4A90E2;
        color: white;
        border-color: #4A90E2;
    }

    /* Media Query for smaller screens */
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

    <!-- Modern Theme Switcher -->
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
