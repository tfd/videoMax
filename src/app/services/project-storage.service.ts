import {Injectable} from '@angular/core';
import {Project} from '../model/Project';
import {Observable, of} from 'rxjs';
import {delay, share} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectStorageService {

  projects: {}; // id: Project

  PROJECT_KEY = 'projects';

  constructor() {
    this.projects = JSON.parse(localStorage.getItem(this.PROJECT_KEY) || '{}');
  }

  public getProject(id: number): Observable<Project> {
    return of(this.projects[id]).pipe(delay(500));
  }

  public addProject(project: Project): Observable<Project> {
    const newKey = this.getNewKey();
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

  private getNewKey() {
    const keys: number[] = Object.keys(this.projects).map(n => parseInt(n, 10));
    if (!keys || keys.length === 0) {
      return 1;
    }

    const revertedKeys = keys.sort((a, b) => b - a);
    return revertedKeys[0] + 1;
  }

  private saveToLocalStorage() {
    localStorage.setItem(this.PROJECT_KEY, JSON.stringify(this.projects));
  }

  private containsString(text: string) {
    return (p: Project) => p.name.toLowerCase().indexOf(text.toLowerCase()) >= 0 ||
      p.description.toLowerCase().indexOf(text.toLowerCase()) >= 0;
  }
}
