<svelte:head>
    <title>Curriculum Vitae - Joyce Shiah</title>
    <!-- Link to Google Fonts for Poppins -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
    <style>
        /* Apply Poppins font globally */
        body {
            font-family: 'Poppins', sans-serif;
            background-color: #f4f7f6;
            margin: 0;
            padding: 0;
            line-height: 1.6;
            color: #333; /* Default text color for light mode */
        }

        /* Light Mode Styles */
        body {
            background-color: #f4f7f6;
            color: #333;
        }

        header {
            background-color: #093b58;
            color: white;
            padding: 20px;
            text-align: center;
            border-bottom: 2px solid #ddd;
        }

        header h1 {
            margin: 0;
            font-size: 2.5em;
        }

        header p {
            margin: 10px 0;
            font-size: 1.2em;
        }

        header a {
            color: white;
            text-decoration: none;
            font-weight: bold;
        }

        header a:hover {
            text-decoration: underline;
        }

        section {
            padding: 20px;
            margin: 20px;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        section h2 {
            font-size: 1.8em;
            color: #333;
            margin-bottom: 15px;
            border-bottom: 2px solid #f0f0f0;
            padding-bottom: 5px;
        }

        section p {
            font-size: 1.1em;
            color: #666;
        }

        ul {
            list-style-type: none;
            padding: 0;
        }

        li {
            padding: 10px 0;
            font-size: 1.1em;
        }

        article {
            margin-bottom: 20px;
        }

        article h3 {
            font-size: 1.4em;
            color: #093b58;
            margin-bottom: 5px;
        }

        article time {
            font-style: italic;
            color: #999;
        }

        footer {
            text-align: center;
            padding: 20px;
            background-color: #f4f7f6;
            color: #555;
            margin-top: 20px;
            border-top: 2px solid #ddd;
        }

        footer p {
            margin: 0;
        }

        .skills-list {
            margin-top: 10px;
        }

        .skills-list li {
            font-size: 1.1em;
        }

        /* Dark Mode Styles */
        body.dark-mode {
            background-color: #1e1e1e; /* Dark background */
            color: #ddd; /* Light text for dark background */
        }

        header.dark-mode {
            background-color: #093b58;
            color: white;
        }

        section.dark-mode {
            background-color: #2c2c2c; /* Darker background for sections */
            color: #ddd; /* Light text for dark mode */
        }

        footer.dark-mode {
            background-color: #333; /* Dark footer */
            color: #bbb; /* Light text for footer */
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            header {
                padding: 15px;
            }

            header h1 {
                font-size: 2em;
            }

            section {
                margin: 10px;
            }

            section h2 {
                font-size: 1.5em;
            }
        }
    </style>
</svelte:head>

<header>
    <h1>Joyce Shiah</h1>
    <p>Email: <a href="mailto:jshiah@ucsd.edu">jshiah@ucsd.edu</a> | Phone: (408) 826-9652 | <a href="https://www.linkedin.com/in/joyceshiah">LinkedIn</a></p>
</header>

<section>
    <h2>Objective</h2>
    <p>[Current issue: this messes w/ theme switcher. Dark mode text turns white
        [rest is FIXED] when it goes to dark, some of the text (in education and Skills sections all become white. 
        that's not what dark mode should do..)]</p>
</section>

<section>
    <h2>Education</h2>
    <ul>
        <li>
            M.S. in Data Science - University of California, San Diego
            <time datetime="2025-05">May 2025</time> | GPA: 4.0
        </li>
        <li>
            B.S. in Cell & Molecular Biology - Baylor University
            <time datetime="2022-05">May 2022</time>
        </li>
    </ul>
</section>

<section>
    <h2>Experience</h2>
    <article>
        <h3>Data Analyst Corporate FP&A Intern</h3>
        <p><strong>Barracuda Networks</strong> <time datetime="2024-06">June 2024</time> - <time datetime="2024-08">August 2024</time></p>
        <p>
            Developed and presented an NLP BERT Name Entity Recognition model for competitive intelligence. 
            Built financial dashboards and worked with data engineers to improve data pipelines for FP&A analyses. 
            Collaborated on machine learning projects to analyze customer churn behavior.
        </p>
    </article>
    <article>
        <h3>Optometric Technician & Administrative Staff</h3>
        <p><strong>Dr. Kraig Abe, OD FAAO</strong> <time datetime="2022-08">August 2022</time> - <time datetime="2023-08">August 2023</time></p>
        <p>
            Managed patient flow, performed routine exams, and assisted with glaucoma-suspect patients. 
            Provided medical interpreting and handled administrative tasks.
        </p>
    </article>
    <article>
        <h3>President</h3>
        <p><strong>Baylor Undergraduate Research in Science and Technology</strong> <time datetime="2021-05">May 2021</time> - <time datetime="2022-05">May 2022</time></p>
        <p>
            Hosted the 2022 Heart of Texas Undergraduate Research Conference, coordinating keynote speeches, 
            presentations, and events. Managed executive board and curated workshops for promoting undergraduate research.
        </p>
    </article>
    <article>
        <h3>Undergraduate Data Science Researcher</h3>
        <p><strong>Baylor University</strong> <time datetime="2019-08">August 2019</time> - <time datetime="2021-05">May 2021</time></p>
        <p>
            Analyzed wastewater treatment data and conducted regression analyses to improve treatment system efficiency. 
            Led research projects and developed actionable insights with significant community impact.
        </p>
    </article>
</section>

<section>
    <h2>Publications</h2>
    <article>
        <p>Wu, G., & Shiah, J. (2019). Age-Related Macular Degeneration: Chinese Translation. San Jose, CA: Gratak Media.</p>
        <p>Wu, G., Lu, K., Luu, S., Brian, L., Jillian, S., & Joyce, S. (2019). Medical Adherence, Mobile Applications, and Telephone Reminders in Diabetes Management, 1–24.</p>
    </article>
</section>

<section>
    <h2>Skills</h2>
    <article>
        <h3>Languages</h3>
        <ul class="skills-list">
            <li>Python, JavaScript, SQL, PySpark, HTML/CSS, Svelte, R </li>
        </ul>
    </article>
    <article>
        <h3>Data Visualization</h3>
        <ul class="skills-list">
            <li>Tableau, Power BI</li>
        </ul>
    </article>
    <article>
        <h3>Data Engineering</h3>
        <ul class="skills-list">
            <li>Azure Databricks</li>
        </ul>
    </article>
    <article>
        <h3>CRM System Skills</h3>
        <p><strong>Salesforce:</strong> Intermediate proficiency</p>
    </article>
</section>

<footer>
    <p>References available upon request.</p>
</footer>
