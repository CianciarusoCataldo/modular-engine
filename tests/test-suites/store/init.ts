import initStore from "../../../src/api/store/init";

const runTest = () => {
  test("with redux.middleware field defined", () => {
    const middlewareStub = jest.fn();
    initStore({
      redux: {
        customize: {},
        middlewares: [middlewareStub],
        reduxMiddlewares: [],
      },
    });
    expect(middlewareStub).toBeCalled;
  });

  test("without customize field inside redux config", () => {
    const middlewareStub = jest.fn();
    initStore({
      redux: {
        middlewares: [middlewareStub],
        reduxMiddlewares: [],
      },
    });
    expect(middlewareStub).toBeCalled;
  });

  test("with redux.customize defined", () => {
    initStore({
      redux: {
        reducers: {},
        preload: {},
        reduxMiddlewares: [],
        middlewares: [],
        customize: {
          config: {
            test: "test",
          },
        },
      },
    });
  });
};

export default runTest;
