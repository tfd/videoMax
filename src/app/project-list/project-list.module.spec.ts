import { ProjectListModule } from './project-list.module';

describe('ProjectListModule', () => {
  let projectListModule: ProjectListModule;

  beforeEach(() => {
    projectListModule = new ProjectListModule();
  });

  it('should create an instance', () => {
    expect(projectListModule).toBeTruthy();
  });
});
