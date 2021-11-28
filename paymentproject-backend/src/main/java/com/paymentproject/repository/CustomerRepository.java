package com.paymentproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.paymentproject.entities.customer;

@Repository
public interface CustomerRepository extends JpaRepository<customer,Long> {

}
