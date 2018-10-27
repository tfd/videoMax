import {TestBed} from '@angular/core/testing';

import {ProjectStorageService} from './project-storage.service';
import {zip} from 'rxjs';
import {Project} from '../shared/models/Project';

describe('ProjectStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
    localStorage.clear();
  });

  it('should be created', () => {
    const service: ProjectStorageService = TestBed.get(ProjectStorageService);
    expect(service).toBeTruthy();
  });

  it('should save', (done) => {
    const service: ProjectStorageService = TestBed.get(ProjectStorageService);
    service.addProject({name: 'project', description: 'something', url: 'http://www.youtube.com '})
      .subscribe(p => {
        expect(p.id).toBe(1);
        done();
      });
  });

  it('should retrieve', (done) => {
    const service: ProjectStorageService = TestBed.get(ProjectStorageService);
    service.addProject({name: 'project', description: 'something', url: 'http://www.youtube.com '})
      .subscribe(p => {
        service.getProject(1).subscribe(r => {
          expect(r.id).toBe(1);
          expect(r.name).toBe('project');
          expect(r.description).toBe('something');
          expect(r.url).toBe('http://www.youtube.com ');
          done();
        });
      });
  });

  it('should update', (done) => {
    const service: ProjectStorageService = TestBed.get(ProjectStorageService);
    service.addProject({name: 'project', description: 'something', url: 'http://www.youtube.com '})
      .subscribe(p => {
        const proj = {...p, name: 'project bla bla'};
        service.updateProject(proj).subscribe(u => {
          expect(u.id).toBe(1);
          expect(u.name).toBe('project bla bla');
          done();
        });
      });
  });

  it('should list', (done) => {
    const service: ProjectStorageService = TestBed.get(ProjectStorageService);
    zip(
      service.addProject({name: 'project', description: 'something', url: 'http://www.youtube.com '}),
      service.addProject({name: 'project1', description: 'something', url: 'http://www.youtube.com '}),
      service.addProject({name: 'project2', description: 'something', url: 'http://www.youtube.com '}),
      service.addProject({name: 'project3', description: 'something', url: 'http://www.youtube.com '}),
      service.addProject({name: 'project4', description: 'something', url: 'http://www.youtube.com '}),
    )
      .subscribe(() => {
        service.getProjects('').subscribe((p: Project[]) => {
          expect(p.length).toBe(5);
          expect(p[0].id).toBe(1);
          expect(p[1].id).toBe(2);
          expect(p[2].id).toBe(3);
          expect(p[3].id).toBe(4);
          expect(p[4].id).toBe(5);
          done();
        });
      });
  });

  it('should list with text', (done) => {
    const service: ProjectStorageService = TestBed.get(ProjectStorageService);
    zip(
      service.addProject({name: 'project', description: 'something', url: 'http://www.youtube.com '}),
      service.addProject({name: 'project1', description: 'something', url: 'http://www.youtube.com '}),
      service.addProject({name: 'project2', description: 'something', url: 'http://www.youtube.com '}),
      service.addProject({name: 'project23', description: 'something', url: 'http://www.youtube.com '}),
      service.addProject({name: 'project4', description: 'something', url: 'http://www.youtube.com '}),
    )
      .subscribe(() => {
        service.getProjects('project2').subscribe((p: Project[]) => {
          expect(p.length).toBe(2);
          expect(p[0].name).toBe('project2');
          expect(p[1].name).toBe('project23');
          done();
        });
      });
  });

});
