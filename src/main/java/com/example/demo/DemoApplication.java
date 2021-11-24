package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Collections;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {

	//	SpringApplication.run(DemoApplication.class, args);

		// Set dynamic port for Spring (easier with node)
		String PORT = System.getenv("PORT");

		SpringApplication app = new SpringApplication(DemoApplication.class);
		app.setDefaultProperties(Collections.singletonMap("server.port", PORT == null ? 4000 : PORT));
		app.run(args);
	}

}
