:root {
    --primary-color: #3498db;
    --secondary-color: #2c3e50;
    --text-color: #333;
    --background-color: #f4f4f4;
    --card-background: #ffffff;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--background-color);
}

a {
    text-decoration: none;
    color: var(--primary-color);
}

header {
    background-color: var(--secondary-color);
    color: #fff;
    padding: 1rem 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

nav ul {
    display: flex;
    justify-content: center;
    list-style: none;
}

nav ul li {
    margin: 0 1rem;
}

nav ul li a {
    color: #fff;
    transition: color 0.3s ease;
}

nav ul li a:hover {
    color: var(--primary-color);
}

main {
    margin-top: 60px;
}

section {
    padding: 4rem 2rem;
}

h1, h2 {
    margin-bottom: 1rem;
}

.hero {
    background-image: url('/placeholder.svg?height=600&width=1200');
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
}

.hero-content {
    background-color: rgba(0, 0, 0, 0.7);
    padding: 2rem;
    border-radius: 10px;
}

.hero h1 {
    font-size: 3rem;
    margin-bottom: 0.5rem;
}

.hero h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.cta-button {
    display: inline-block;
    background-color: var(--primary-color);
    color: #fff;
    padding: 0.8rem 1.5rem;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.cta-button:hover {
    background-color: #2980b9;
}

.about, .skills, .projects, .contact {
    max-width: 1200px;
    margin: 0 auto;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.skill-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.skill-item i {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    color: var(--primary-color);
}

.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.project-card {
    background-color: var(--card-background);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.project-card:hover {
    transform: translateY(-5px);
}

.project-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.project-card h3 {
    padding: 1rem;
}

.project-card p {
    padding: 0 1rem 1rem;
}

.project-link {
    display: inline-block;
    margin: 1rem;
    padding: 0.5rem 1rem;
    background-color: var(--primary-color);
    color: #fff;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.project-link:hover {
    background-color: #2980b9;
}

.contact form {
    display: grid;
    gap: 1rem;
    max-width: 600px;
    margin: 0 auto;
}

.contact input,
.contact textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.contact textarea {
    height: 150px;
}

.submit-button {
    background-color: var(--primary-color);
    color: #fff;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.submit-button:hover {
    background-color: #2980b9;
}

footer {
    background-color: var(--secondary-color);
    color: #fff;
    text-align: center;
    padding: 1rem 0;
}

.social-links {
    margin-top: 1rem;
}

.social-links a {
    color: #fff;
    margin: 0 0.5rem;
    font-size: 1.5rem;
}

@media (max-width: 768px) {
    nav ul {
        flex-direction: column;
        align-items: center;
    }

    nav ul li {
        margin: 0.5rem 0;
    }

    .hero h1 {
        font-size: 2.5rem;
    }

    .hero h2 {
        font-size: 1.2rem;
    }
}
