import request from 'request';
import { Item, Details } from '../interfaces';
const details_url = process.env.DETAILS_URL ? `${process.env.DETAILS_URL}:3001` : 'localhost:3001';
const items_url = process.env.ITEMS_URL ? `${process.env.ITEMS_URL}:3000` : 'localhost:3000'
export class RequestWrapper {
    makeRequestForGetItems(): Promise<Item[]> {
        return new Promise((resolve, reject) => {
            this.makeRequest({
                url: `http://${items_url}/item`,
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }, (err, response) => {
                if (!err && response.body) {
                    resolve(JSON.parse(response.body));
                } else {
                    reject({ 'api-error': err });
                }
            });
        });
    }

    makeRequestForGetDetails(): Promise<Details[]> {
        return new Promise((resolve, reject) => {
            this.makeRequest({
                url: `http://${details_url}/details`,
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }, (err, response) => {
                if (!err && response.body) {
                    resolve(JSON.parse(response.body));
                } else {
                    reject({ 'api-error': err });
                }
            });
        });
    }

    makeRequestForGetItem(id): Promise<Item> {
        return new Promise((resolve, reject) => {
            this.makeRequest({
                url: `http://${items_url}/item/${id}`,
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }, (err, response) => {
                if (!err && response.body) {
                    resolve(JSON.parse(response.body));
                } else {
                    reject({ 'api-error': err });
                }
            });
        });
    }

    makeRequestForGetDetail(id): Promise<Details> {
        return new Promise((resolve, reject) => {
            this.makeRequest({
                url: `http://${details_url}/details/${id}`,
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }, (err, response) => {
                if (!err && response.body) {
                    resolve(JSON.parse(response.body));
                } else {
                    reject({ 'api-error': err });
                }
            });
        });
    }

    makeRequest(options, callback) {
        request(options, callback);
    }
}