package com.paymentproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paymentproject.entities.customer;
import com.paymentproject.repository.CustomerRepository;

import com.paymentproject.exception.ResourceNotFoundException;




@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/customer")
public class CustomerController {

	@Autowired
	private CustomerRepository customerRepository;

	@GetMapping
	public List<customer> getAllCustomers(){
		return customerRepository.findAll();
	}

	@GetMapping("{customerid}")
	public ResponseEntity<customer> getEmployeeById(@PathVariable String customerid){
		long A=Long.parseLong(customerid);
	customer customer = customerRepository.findById(A)
				.orElseThrow(() -> new ResourceNotFoundException("Customer not exists with id: " + customerid));
		return ResponseEntity.ok(customer);
	}
	
	 @PutMapping("{customerid}")
	    public ResponseEntity<customer> updateCustomer(
	            @PathVariable String customerid,
	            @RequestBody customer customerDetails){
	    	long A=Long.parseLong(customerid);
	        customer updateCustomer = customerRepository.findById(A)
	                .orElseThrow(() -> new ResourceNotFoundException("customer not exists with id: " +  customerid));

	        // Read  from request and set data to employee
	        updateCustomer.setAccountholdername(customerDetails.getAccountholdername());
	        updateCustomer.setBalance(customerDetails.getBalance());
	        updateCustomer.setOverdraft(customerDetails.getOverdraft());
	        // Save into database
	        customerRepository.save(updateCustomer);

	        return ResponseEntity.ok(updateCustomer);
	    }

}
