
'use client'

import { database } from "../userForm/type"

const fields: database[] = [
    {
        name: 'firstname',
        type: 'text',
        label: 'Firstname',
        placeholder: 'Enter your firstname',
        required: true,
        unique: true
    },
    {
        name: 'lastname',
        type: 'text',
        label: 'Lastname',
        placeholder: 'Enter your lastname',
        required: true,
        unique: true
    },
    {
        name: 'phonenumber',
        type: 'number',
        label: 'Phone number',
        placeholder: 'Enter your phone number',
        required: true,
        unique: true
    },
    {
        name: 'email',
        type: 'email',
        label: 'Email address',
        placeholder: 'Enter your email address',
        required: true,
        unique: true
    },
    {
        name: 'address',
        type: 'text',
        label: 'Address',
        placeholder: 'Enter your address',
        required: true,
        unique: true
    }
];

export default fields;