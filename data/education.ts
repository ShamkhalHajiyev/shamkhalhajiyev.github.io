/**
 * Education data
 * Used for About page and CV
 */

export interface Education {
    degree: string;
    field: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    description?: string;
}

export const education: Education[] = [
    {
        degree: 'Master of Arts',
        field: 'Data Science and Business Analytics',
        institution: 'University of Warsaw',
        location: 'Warsaw, Poland',
        startDate: 'Oct 2019',
        endDate: 'Jul 2021',
    },
    {
        degree: 'Bachelor of Science',
        field: 'Economics',
        institution: 'ADA University',
        location: 'Baku, Azerbaijan',
        startDate: 'Sep 2014',
        endDate: 'Jul 2019',
    },
];
