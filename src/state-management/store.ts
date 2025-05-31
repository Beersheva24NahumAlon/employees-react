import { create } from "zustand";

const MIN_AGE = 18;
const MAX_AGE = 80;
const MIN_SALARY = 5000;
const MAX_SALARY = 50000;

interface SearchStore {
    minAge: number;
    maxAge: number;
    minSalary: number;
    maxSalary: number;
    setSalaryRange: (minSalary: number, maxSalary: number) => void;
    setAgeRange: (minAge: number, maxAge: number) => void;
}
export const useSearch = create<SearchStore>(set => ({
    minAge: MIN_AGE,
    maxAge: MAX_AGE,
    minSalary: MIN_SALARY,
    maxSalary: MAX_SALARY,
    setSalaryRange: (minSalary, maxSalary) => set((prevState) => ({ ...prevState, minSalary, maxSalary })),
    setAgeRange: (minAge, maxAge) => set((prevState) => ({ ...prevState, minAge, maxAge })),
}));

interface EmployeesQueryStore {
    ageRange: { minAge: number, maxAge: number } | null
    salaryRange: { minSalay: number, maxSalary: number } | null
    setSalaryRange: (salaryRange: { minSalay: number, maxSalary: number } | null) => void;
    setAgeRange: (ageRange: { minAge: number, maxAge: number } | null) => void;
}

export const useEmployeesQuery = create<EmployeesQueryStore>(set => ({
    ageRange: null,
    salaryRange: null,
    setSalaryRange: (salaryRange) => set(() => ({ ageRange: null, salaryRange })),
    setAgeRange: (ageRange) => set(() => ({ salaryRange: null, ageRange })),
}));