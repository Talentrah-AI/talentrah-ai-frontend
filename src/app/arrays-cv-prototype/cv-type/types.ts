
'use client';

export interface TemplateItem {
    id: string;
    image: string;
    lock: string;
}

export interface TemplateSet {
    free: TemplateItem[]
    premium: TemplateItem[]
}