# Gruppe 9 Portfolio Website

A portfolio website originally developed by Group 9 at the University of Agder to present our team and selected student projects. It has later been maintained and improved as part of my development portfolio.

Instead of making a simple presentation page, we used the assignment as a chance to get practical experience with modern frontend development and to present our work in a more professional way.

## Live Demo

https://kristianmb13.github.io/gruppe9site/

## About The Project

The site presents team members and project work from our IT and Information Systems studies, including frontend development, UX design, universal design, security, mapping, mobile app prototyping and AI-assisted decision support.

This was primarily a learning and portfolio project, not a production product. Some pages document design and prototype work rather than shipped applications.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- GitHub Pages
- GitHub Actions

## My Contribution

I, Kristian Magnus Bergedalen, took primary responsibility for much of the frontend implementation and later polishing of the site.

My work included:

- Building and iterating on React/TypeScript pages and components
- Creating responsive layouts and visual presentation for project pages
- Setting up routing and GitHub Pages deployment
- Adding project documentation and media
- Debugging layout, asset paths and deployment issues
- Reviewing and testing changes before they were integrated

## Featured Projects

### Bachelor Project - Agentic Observability

Bachelor project with Knowit and Telenor Maritime exploring agent-based decision support for maritime operations. The work focuses on sensor data, AI agents, retrieval-augmented generation, explainability and how operators can understand system state and suggested actions.

### FINN.no Map Redesign

UX and accessibility project focused on evaluating and improving FINN.no's map experience. The work included automated accessibility checks, manual WCAG evaluation, user testing, Figma prototyping and a second test round to compare results.

### IK Start Food App Concept

Mobile app design concept for reducing food queues at IK Start match days. The work included idea development, navigation mapping, wireframes, Figma prototyping and a short presentation video.

### Kartverket Web App

Student web application project involving map functionality, authentication and security-focused design decisions.

## AI-Assisted Development

AI-assisted development tools have been used during parts of the project for code review, debugging, refactoring and documentation. I use tools such as Codex and Claude Code as development assistants, while reviewing, testing and understanding changes before they are integrated into the project.

## Running Locally

```bash
git clone https://github.com/KristianMB13/gruppe9site.git
cd gruppe9site
npm install
npm run dev
```

To create a production build:

```bash
npm run build
```

## Deployment

The project is deployed to GitHub Pages with GitHub Actions. The Vite build output is written to `out/`, which is uploaded as the Pages artifact.
