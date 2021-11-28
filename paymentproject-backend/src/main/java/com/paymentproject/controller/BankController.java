package com.paymentproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paymentproject.entities.bank;
import com.paymentproject.exception.ResourceNotFoundException;
import com.paymentproject.repository.BankRepository;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/v1/bank")
public class BankController {
	
	@Autowired
	private BankRepository bankRepository;
	
	@GetMapping("{BIC}")
	public ResponseEntity<bank> getBankById(@PathVariable String BIC){
	bank bank = bankRepository.findById(BIC)
				.orElseThrow(() -> new ResourceNotFoundException("Customer not exists with id: " + BIC));
		return ResponseEntity.ok(bank);
	}


}
