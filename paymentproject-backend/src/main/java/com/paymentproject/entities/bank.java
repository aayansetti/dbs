package com.paymentproject.entities;

import javax.persistence.*;

@Entity
@Table(name="bankdetails")
public class bank {
	
	@Id
	@Column(name = "BIC")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String BIC;

	@Column(name = "bankname")
	private String bankname;

	public String getBIC() {
		return BIC;
	}

	public void setBIC(String bIC) {
		BIC = bIC;
	}

	public String getBankname() {
		return bankname;
	}

	public void setBankname(String bankname) {
		this.bankname = bankname;
	}
	
	
	

}
