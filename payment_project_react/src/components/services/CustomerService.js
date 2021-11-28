import axios from "axios";
const CUSTOMER_BASE_REST_API_URL = "http://localhost:8094/api/v1/customer";

class CustomerService{

    getAllCustomer(){
        return axios.get(CUSTOMER_BASE_REST_API_URL)
    }

    getCustomerById(customerid){
        return axios.get(CUSTOMER_BASE_REST_API_URL + '/' + customerid)
    }
}
export default new CustomerService();