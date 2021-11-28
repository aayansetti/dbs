package com.paymentproject.entities;





import javax.persistence.*;



@Entity
@Table(name="userdetails")
public class customer {

//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private long id;
	@Id
	@Column(name = "customerid")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long customerid;

	@Column(name = "Accountholdername")
	private String Accountholdername;

	@Column(name = "balance")
	private float balance;

	@Column(name = "overdraft")
	private String overdraft;

	public long getCustomerid() {
		return customerid;
	}

	public void setCustomerid(long customerid) {
		this.customerid = customerid;
	}

	public String getAccountholdername() {
		return Accountholdername;
	}

	public void setAccountholdername(String accountholdername) {
		Accountholdername = accountholdername;
	}

	public float getBalance() {
		return balance;
	}

	public void setBalance(float balance) {
		this.balance = balance;
	}

	public String getOverdraft() {
		return overdraft;
	}

	public void setOverdraft(String overdraft) {
		this.overdraft = overdraft;
	}

		
	
}
