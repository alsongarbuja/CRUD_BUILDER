import { writable } from 'svelte/store';

const projects = JSON.parse(localStorage.getItem('projects')) || [];
const selectedProject = JSON.parse(localStorage.getItem('selectedProject')) || projects.length > 0 ? projects[0] : null;

export const projectStore = writable(projects);
export const selectedProjectStore = writable(selectedProject);