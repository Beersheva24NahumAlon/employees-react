import { create } from "zustand";
import ranges from "../../config/ranges.json";
import Employee from "../model/Employee";

interface SearchQuery {
    filterType: "Age" | "Salary" | null;
    rangeAge: { min: number, max: number };
    rangeSalary: { min: number, max: number };
}

interface EmployeesQueryStore {
    searchQuery: SearchQuery;
    setFilterType: (filterType: "Age" | "Salary" | null) => void;
    setRangeAge: (range: { min: number, max: number }) => void;
    setRangeSalary: (range: { min: number, max: number }) => void;
}

export const useEmployeesQueryStore = create<EmployeesQueryStore>(set => ({
    searchQuery: {filterType: null, 
        rangeAge: { min: ranges.Age.min, max: ranges.Age.max }, 
        rangeSalary: { min: ranges.Salary.min, max: ranges.Salary.max }
    },
    setFilterType: (filterType) => set((prevState) => ({
        searchQuery: prevState.searchQuery.filterType != filterType 
            ? {...prevState.searchQuery, filterType} 
                : prevState.searchQuery
    })),
    setRangeAge: (rangeAge) => set((prevState) => ({
        searchQuery: prevState.searchQuery.rangeAge.min != rangeAge.min || prevState.searchQuery.rangeAge.max != rangeAge.max
            ? {...prevState.searchQuery, rangeAge}
                : prevState.searchQuery
    })),
    setRangeSalary: (rangeSalary) => set((prevState) => ({
        searchQuery: prevState.searchQuery.rangeSalary.min != rangeSalary.min || prevState.searchQuery.rangeSalary.max != rangeSalary.max
            ? {...prevState.searchQuery, rangeSalary}
                : prevState.searchQuery
    })),
}));

interface EmployeesStore {
    employees: Employee[];
    setEmployees: (employees: Employee[]) => void;
}

export const useEmployeesGlobal = create<EmployeesStore>(set => ({
    employees: [],
    setEmployees: (employees) => set(() => ({employees}))
}));