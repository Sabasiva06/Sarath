package org.stepdef;

import org.base.BaseClass;
import org.locator.LoginPage;
import org.openqa.selenium.WebElement;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefenition extends BaseClass {
	LoginPage page;

	@Given("User is on facebook")
	public void user_is_on_facebook() {
		
	}

	@When("user need to enter {string} and {string}")
	public void user_need_to_enter_and(String string, String string2) {
		page = new LoginPage();
		WebElement txtUserName = page.getTxtUserName();
		typeText(txtUserName, string);
		WebElement txtPassword = page.getTxtPassword();
		typeText(txtPassword, string2);
	}

	@When("user should click login button")
	public void user_should_click_login_button() {
		WebElement btnLogin = page.getBtnLogin();
		btnClick(btnLogin);
	}
//	@When("user should click login button")
//	public void userShouldClickLoginButton() {
//	    // Write code here that turns the phrase above into concrete actions
//	    throw new cucumber.api.PendingException();
//	}

	@Then("user should validate error message.")
	public void user_should_validate_error_message() {
		System.out.println("Invalid User");
	}

}
