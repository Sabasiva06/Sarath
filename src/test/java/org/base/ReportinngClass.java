package org.base;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class ReportinngClass {
	
	
	public static void generateJVMReport(String json) {
		
		File file = new File("D:\\7pmFasttrackCucumberClass\\target");
		Configuration configuration = new Configuration(file, "Fasttrack batch report");
		configuration.addClassifications("Browser type", "chrome browser");
		configuration.addClassifications("platform","Win-10");
		configuration.addClassifications("Sprint No", "32");
		
		List<String> li =new ArrayList<String>();
		li.add(json);
		
		ReportBuilder builder= new ReportBuilder(li, configuration);
		builder.generateReports();
		
	}

}
