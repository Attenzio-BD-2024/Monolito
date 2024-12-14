import {instance} from './base.api';

const endpoint = 'auth';

export const auth = {
    login: function({email, password}:{email:string, password:string}) {
        return instance.post(`${endpoint}/login`, {
            email,
            password
        });
    },
    register: function({email, password, name}:{email:string, password:string, name:string}) {
        return instance.post(`${endpoint}/register`, {
            email,
            password,
            name
        });
    }
};