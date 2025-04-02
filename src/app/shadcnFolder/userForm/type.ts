
'use client';

// export interface database {
//     name: string;
//     type: string;
//     label: string;
//     placeholder: string;
//     required: boolean;
//     unique: boolean;
// }

// types.ts
export type FormValues = {
    address: string;
    email: string;
    firstname: string;
    lastname: string;
    phonenumber: string;
    database?: string; // Optional field
};

export type Field = {
    name: keyof FormValues;
    placeholder: string;
    type: string;
    label: string;
    required?: boolean;
    unique: boolean;
};