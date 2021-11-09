create or replace procedure bank_data(customer_id in number,Account_holder_name in varchar2,clear_balance in int,transfer_type in varchar2,Overdraft in boolean,)

is

Begin 
    Insert into internaldata values(customer_id,Account_holder_name,clear_balance,transfer_type,Overdraft)
end;
/



create or replace procedure receiver_data(bic in varchar2,Rec_Institution_name in varchar2,
    Msg in varchar)

is

Begin
    insert into externaldata values(bic,Rec_Institution_name,Msg)

End;
/

