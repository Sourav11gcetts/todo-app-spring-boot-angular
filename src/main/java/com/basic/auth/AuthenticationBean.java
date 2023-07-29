package com.basic.auth;

public class AuthenticationBean {
	private String message;
	public AuthenticationBean(String message) {
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
		return "AuthenticationBean [message=" + message + "]";
	}
	
	

}
