const Employee = require("../Employee");

    describe("getName", () => {
      it("should return an object's 'name' from the 'getName' method that gather the user's input", () => {
        const name = "gathered user input from the terminal.";
        const result = new Employee(name);

        expect(result.name).toBe(name); 
      });
    });

    describe("getId", () => {    
      it("should return an object's 'id' from the 'getId' method that gather the user's input", () => {
        const id = 4;
        const result = new Employee("foo", id);

        expect(result.id).toBe(id);
       });
    });

    describe("getEmail", () => {   
      it("should return an object's 'email' from the 'getEmail' method that gather the user's input", () => {
        const email = "gathered user input from the prompt from the getEmail method.";
        const result = new Employee("foo", 1, email);

        expect(result.email).toBe(email);
       });     
    });

    describe("getRole", () => {   
      it("should return an object's 'role' from the 'getRole' method that gather the user's input which should equal 'Employee'.", () => {
        const role = "gathered user input from the prompt from the getEmail method.";
        const result = new Employee("foo", 1, "foo", role);

        expect(result.role).toBe(role);
       });     
    });

    

