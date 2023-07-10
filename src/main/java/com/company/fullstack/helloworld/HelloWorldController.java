package com.company.fullstack.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {
	
	@GetMapping("/hello-world")
	public String helloWorld() {
		return "Hello World!";
	}
	
	@GetMapping("/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Hii I am from Backend");
//		throw new RuntimeException("Some Error Has Happened! Contact Support at ********(Backend)");
	}
	
	@GetMapping("/hello-world/{str}")
	public HelloWorldBean helloWorld(@PathVariable String str) {
		return new HelloWorldBean("Hii I am from Backend" + str);
	}

}
