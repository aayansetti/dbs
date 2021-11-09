create DATABASE Banking;
use Banking;

create table internaldata(
    customerid bigint,
    bic varchar(255),
    Account_holder_name varchar(255),
    clear_balance int,
    transfer_type varchar(255),
    Overdraft boolean,
    primary key(customerid),
    foreign key(bic)
        reference externaldata(bic)

);

create table externaldata(
    bic varchar(255) primary key,
    customerid bigint,
    Rec_Institution_name varchar(255),
    Msg varchar(255)
    foreign key (customerid)
        reference internaldata(customerid)
);

