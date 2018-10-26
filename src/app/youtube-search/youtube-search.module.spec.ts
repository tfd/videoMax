import { YoutubeSearchModule } from './youtube-search.module';

describe('YoutubeSearchModule', () => {
  let youtubeSearchModule: YoutubeSearchModule;

  beforeEach(() => {
    youtubeSearchModule = new YoutubeSearchModule();
  });

  it('should create an instance', () => {
    expect(youtubeSearchModule).toBeTruthy();
  });
});
