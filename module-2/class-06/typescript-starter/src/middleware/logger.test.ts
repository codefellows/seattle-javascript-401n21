import { Request, Response } from 'express';
import loggerMiddleware from './logger';

// Tested middleware needs to either be exported from the server or a separate module
describe('logger middleware', () => {
  let consoleSpy: jest.SpyInstance;
  const req = {} as Request;
  const res = {} as Response;
  const next = jest.fn(); // spy on next method

  beforeEach(() => {
    // Attach to the console (take it over)
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    // Put the console back
    consoleSpy.mockRestore();
  });

  it('properly logs some output', () => {
    loggerMiddleware(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('properly moves to the next middleware', () => {
    loggerMiddleware(req, res, next);
    // toHaveBeenCalled() is not enough, we need to make sure it was called with no args
    expect(next).toHaveBeenCalledWith();
  });
});
