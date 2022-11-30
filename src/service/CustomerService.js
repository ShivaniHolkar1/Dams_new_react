import axios from "axios";


export class CustomerService {

    // getCustomersSmall() {
    //     return fetch('data/customers-small.json').then(res => res.json())
    //             .then(d => d.data);
    // }

    // getCustomersMedium() {
    //     return fetch('data/customers-medium.json').then(res => res.json())
    //             .then(d => d.data);
    // }

    getCustomersLarge() {
        return fetch('data/db.json').then(res => res.json())
                .then(d => d.data);
    }


    getCountries() {
        return fetch('data/db.json').then(res => res.json())
            .then(d => d.data1);
    }
    getSections() {
        return fetch('data/db.json').then(res => res.json())
            .then(d => d.user);
        // return axios.get('http://localhost:3000/Sections')
    }
    getProductsSmall() {
        return fetch('data/db.json').then(res => res.json()).then(d => d.data);
    }
}
    

    

    // getCustomers(params) {
    //     const queryParams = params ? Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&') : '';
    //     return fetch('https://www.primefaces.org/data/customers?' + queryParams).then(res => res.json())
    // }

    