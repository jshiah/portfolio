<script>
    import { onMount } from 'svelte';

    let username = 'jshiah'; 
</script>

<svelte:head>
    <title>Joyce Shiah's Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
</svelte:head>

<main>
    <section class="intro">
        <h1>Joyce Shiah</h1>
        <p><strong>MS in Data Science</strong> @ University of California - San Diego, Halıcıoğlu Data Science Institute <i>Sept 2023 - Mar 2025</i></p>
        <p><strong>BS in Biology</strong> @ Baylor University <i>Aug 2018 - May 2022</i></p>
        <img src="/js_colosseum.png" alt="Photo of Joyce Shiah" class="profile-image" />
    </section>

    <section class="github-stats">
        <h2>GitHub Profile Stats</h2>
        {#await fetch(`https://api.github.com/users/${username}`)}
            <p>Loading...</p>
        {:then response}
            {#await response.json()}
                <p>Decoding...</p>
            {:then data}
                <dl class="stats-grid">
                    <dt>Username:</dt>
                    <dd>{data.login}</dd>
                    <dt>Followers:</dt>
                    <dd>{data.followers}</dd>
                    <dt>Following:</dt>
                    <dd>{data.following}</dd>
                    <dt>Public Repos:</dt>
                    <dd>{data.public_repos}</dd>
                    <dt>Public Gists:</dt>
                    <dd>{data.public_gists}</dd>
                </dl>
            {:catch error}
                <p class="error">Something went wrong while decoding the response: {error.message}</p>
            {/await}
        {:catch error}
            <p class="error">Something went wrong while fetching the data: {error.message}</p>
        {/await}
    </section>
</main>

<style>
    /* Global Styles */
    body {
        font-family: 'Poppins', sans-serif;
        background-color: #f4f4f9;
        color: #333;
        margin: 0;
        padding: 0;
    }

    main {
        max-width: 1200px;
        margin: 40px auto;
        padding: 20px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    h1, h2 {
        font-weight: 600;
        color: #4A90E2;
        margin-bottom: 20px;
    }

    /* Styling for the intro section */
    .intro {
        text-align: center;
        margin-bottom: 40px;
    }

    .profile-image {
        border-radius: 8px;
        margin-top: 20px;
        width: 100%;
        max-width: 450px;
        height: auto;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    /* Stats section */
    .github-stats {
        margin-top: 40px;
    }

    .stats-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        font-size: 1.1em;
        margin-top: 20px;
    }

    .stats-grid dt {
        font-weight: bold;
        color: #555;
    }

    .stats-grid dd {
        font-style: italic;
        color: #666;
    }

    /* Error messages */
    .error {
        color: #e74c3c;
        font-weight: bold;
    }

    /* Styling for links or emphasized text */
    i {
        color: #4A90E2;
        font-style: italic;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .stats-grid {
            grid-template-columns: 1fr;
        }

        .intro {
            text-align: left;
        }

        .profile-image {
            max-width: 100%;
        }
    }
</style>
