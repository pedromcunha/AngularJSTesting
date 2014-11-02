// e2e tests
describe("Yeoman Sample App", function () {
	var instance = protractor.getInstance();
	describe("index", function() {
		it("Should go to the index of the website", function() {
			instance.get('/#');
			expect(instance.getTitle()).toBe('Angular Js Testing');
		});
	});
	describe("inputs", function() {
		it("Should add the two numbers entered", function() {
			instance.get('/#');
			element(by.model('numberOne')).sendKeys(1);
			element(by.model('numberTwo')).sendKeys(2);

			element(by.id('addButton')).click();

			expect(element(by.binding('result')).getText()).toEqual('3');
		});
	});
});