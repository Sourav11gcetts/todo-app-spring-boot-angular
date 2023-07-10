package com.company.fullstack;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TodoAppAngularApplication {

	public static void main(String[] args) {
		SpringApplication.run(TodoAppAngularApplication.class, args);
		System.err.println("This is a fullstack project");
	}

}
