// e2e tests
describe("Yeoman Sample App", function () {
	var instance = protractor.getInstance();
	describe("index", function() {
		it("Should go to the index of the website", function() {
			instance.get('/#');
			expect(instance.getTitle()).toBe('Angular Js Testing');
		});
	});
});