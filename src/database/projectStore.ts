import { writable } from 'svelte/store';
import type { Project } from '../types/state';

const projects: Project[] = JSON.parse(localStorage.getItem('projects')) || [];
const selectedProject: Project = JSON.parse(localStorage.getItem('selectedProject')) || (projects.length > 0 ? projects[projects.length-1] : null);

export const projectStore = writable(projects);
export const selectedProjectStore = writable(selectedProject);