package com.company.fullstack.helloworld;

public class HelloWorldBean {
	private String message;
	public HelloWorldBean(String message) {
		this.message = message;
	}
	///if we don't add getters setters there will be error
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	@Override
	public String toString() {
		return "HelloWorldBean [message=" + message + "]";
	}
	
	

}
