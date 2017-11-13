'use strict';

describe('Service: tellMe', function () {

  // load the service's module
  beforeEach(module('askAwayApp'));

  // instantiate service
  var tellMe;
  beforeEach(inject(function (_tellMe_) {
    tellMe = _tellMe_;
  }));

  it('should do something', function () {
    expect(!!tellMe).toBe(true);
  });

});
