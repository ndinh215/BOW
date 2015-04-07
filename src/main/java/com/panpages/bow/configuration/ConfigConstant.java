package com.panpages.bow.configuration;

public enum ConfigConstant {
	
	JDBC_DRIVER_CLASS_NAME("jdbc.driverClassName"),
	JDBC_URL("jdbc.url"),
	JDBC_USERNAME("jdbc.username"),
	JDBC_PASSWORD("jdbc.password"),
	HIBERNATE_DIALECT("hibernate.dialect"),
	HIBERNATE_SHOW_SQL("hibernate.show_sql"),
	HIBERNATE_FORMAT_SQL("hibernate.format_sql"),
	PREFIX_TEMPLATE_NAME("prefix_template_name"),
	TEMPLATE_PATH("template_path"),
	TEMPLATE_FOLDER_NAME_PREFIX("template_folder_name_prefix"),
	REPORT_OUTPUT_PREFIX_NAME("report_output_prefix_name"),
	REPORT_TEMPLATE_PATH("report_template_path"),
	REPORT_OUTPUT_PATH("report_output_path"),
	REPORT_OUTPUT_BASE_URL("report_output_base_url");
	
	private String name;

	ConfigConstant(String value) {
		this.name = value;
	}

	public String getName() {
		return name;
	}
	
}
