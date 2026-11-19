package com.applytrack.backend.health;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/health")
@CrossOrigin(origins = "${app.cors.allowed-origins:http://localhost:5173}")
public class HealthController {

	@GetMapping
	public HealthResponse health() {
		return new HealthResponse("UP");
	}

	public record HealthResponse(String status) {
	}
}
