'use client';

import { endUser } from "../workForm/type";

export const workData: endUser[] = [
    {
        name: 'company',
        type: 'text',
        label: 'Company Name',
        placeholder: 'Enter your company name',
        required: true,
        unique: true
    },
    {
        name: 'jobtitle',
        type: 'text',
        label: 'Job Title',
        placeholder: 'Enter your job title',
        required: true,
        unique: true
    },
    {
        name: 'state',
        type: 'text',
        label: 'State',
        placeholder: 'Enter your state',
        required: true,
        unique: true
    },
    {
        name: 'country',
        type: 'text',
        label: 'Country',
        placeholder: 'Enter your country',
        required: true,
        unique: true
    },
    {
        name: 'start',
        type: 'date',
        label: 'From',
        placeholder: 'Enter your start date',
        required: true,
        unique: false
    },
    {
        name: 'end',
        type: 'date',
        label: 'To',
        placeholder: 'Enter your end date',
        required: true,
        unique: false
    },
    {
        name: 'description',
        type: 'textarea',
        label: 'Description',
        placeholder: 'Enter your job description',
        required: true,
        unique: false
    }
]

export default workData;