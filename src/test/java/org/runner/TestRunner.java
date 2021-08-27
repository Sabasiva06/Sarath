package org.runner;

import org.base.ReportinngClass;
import org.junit.AfterClass;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = { "src\\test\\resources\\SampleLogin.feature" }, glue = {
		"org.stepdef" }, dryRun = false, monochrome = true, plugin = { "pretty",
				"html:D:\\7pmFasttrackCucumberClass\\target", "json:D:\\7pmFasttrackCucumberClass\\target\\fb.json",
				"junit:D:\\7pmFasttrackCucumberClass\\target\\fb.xml" }, 
				snippets = SnippetType.CAMELCASE, tags = {
						"~@smoke" })
public class TestRunner {

	
	@AfterClass
	public static void afterClass() {
	
ReportinngClass.generateJVMReport("D:\\7pmFasttrackCucumberClass\\target\\fb.json");
	}
}
