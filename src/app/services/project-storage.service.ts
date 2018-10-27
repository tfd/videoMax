import {Injectable} from '@angular/core';
import {Project, Translation} from '../shared/models/Project';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectStorageService {

  projects: {};

  PROJECT_KEY = 'projects';
  YOUTUBE_URL = 'https://www.youtube.com/watch?v=';
  YOUTU_BE_URL = 'https://youtu.be/';

  constructor() {
    this.projects = JSON.parse(localStorage.getItem(this.PROJECT_KEY) || '{}');
  }

  public getProject(id: string): Observable<Project> {
    return of(this.projects[id]).pipe(delay(500));
  }

  public addProject(project: Project): Observable<Project> {
    const newKey = this.getNewKey(project);
    this.projects[newKey] = {...project, id: newKey};
    this.saveToLocalStorage();
    return of(this.projects[newKey]).pipe(delay(1000));
  }

  public updateProject(project: Project): Observable<Project> {
    if (this.projects[project.id]) {
      this.projects[project.id] = {...project};
      this.saveToLocalStorage();
      return of(this.projects[project.id]).pipe(delay(1000));
    }
    return of(undefined);
  }

  public removeProject(project: Project): Observable<boolean> {
    if (this.projects[project.id]) {
      const {[project.id]: removed, ...remaining} = this.projects;
      this.projects = remaining;
      this.saveToLocalStorage();
      return of(true).pipe(delay(1000));
    }
    return of(false);
  }

  public getProjects(text: string): Observable<Array<Project>> {
    return of((Object.values(this.projects) as Project[]).filter(this.containsString(text)));
  }

  private getNewKey(project: Project) {
    if (project.id) {
      return project.id;
    }

    if (project.url.startsWith(this.YOUTU_BE_URL)) {
      return 'youtube:' + this.getKeyFromUrl(project.url, this.YOUTU_BE_URL);
    }

    if (project.url.startsWith(this.YOUTUBE_URL)) {
      return 'youtube:' + this.getKeyFromUrl(project.url, this.YOUTUBE_URL);
    }

    return 'key:' + this.randomKey();
  }

  private getKeyFromUrl(url: string, server: string) {
    let key = url.substr(server.length);
    const lastPos = key.indexOf('&');
    if (lastPos >= 0) {
      key = key.substr(0, lastPos);
    }

    return key;
  }

  private saveToLocalStorage() {
    localStorage.setItem(this.PROJECT_KEY, JSON.stringify(this.projects));
  }

  private containsString(text: string) {
    return (p: Project) => p.name.toLowerCase().indexOf(text.toLowerCase()) >= 0 ||
      p.description.toLowerCase().indexOf(text.toLowerCase()) >= 0;
  }

  private randomKey() {
    let key = '';
    for (let i = 0; i < 10; i++) {
      key += String.fromCharCode('A'.charCodeAt(0) + this.random(26));
    }
    return key;
  }

  private random(max: number) {
    return Math.floor(Math.random() * (max + 1));
  }

  addTranslation(id: string, translation: Translation): Observable<Project> {
    let project = this.projects[id];
    if (!project) { return of({} as Project); }
    project = {...project};
    if (!project.translations) {project.translations = {}; }
    project.translations[translation.startTime] = {...translation};
    return this.updateProject(project);
  }

}
