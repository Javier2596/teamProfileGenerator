const Intern = require("../Employee");

describe("getRole", () => {   
    it("should return an object's 'role' from the 'getRole' method that gather the user's input which should equal 'Manager'.", () => {
      const role = "gathered user input from the prompt from the 'getRole'.";
      const result = new Intern("foo", 1, "foo", role);

      expect(result.role).toBe(role);
     });     
  });