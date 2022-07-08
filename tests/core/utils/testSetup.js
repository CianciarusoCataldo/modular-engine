/* eslint-disable */
global.navigator.clipboard = {
  writeText: jest.fn(),
  readText: jest.fn(),
  read: undefined,
  write: undefined,
  addEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
  removeEventListener: jest.fn(),
};

let mockWindow = { ...global.window };

mockWindow.location.writable = true;

/* eslint-disable */
global.window = Object.create(mockWindow);
