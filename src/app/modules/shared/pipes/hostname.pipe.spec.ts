import { HostnamePipe } from './hostname.pipe';

describe('HostnamePipe', () => {
  it('create an instance', () => {
    const pipe = new HostnamePipe();
    expect(pipe).toBeTruthy();
  });
});
