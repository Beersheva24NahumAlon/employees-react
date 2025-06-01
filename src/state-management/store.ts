import { create } from "zustand";
import filterTypes from "../../config/filter-types.json";

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

export const useEmployeesQuery = create<EmployeesQueryStore>(set => ({
    searchQuery: {filterType: null, 
        rangeAge: { min: filterTypes.Age.min, max: filterTypes.Age.max }, 
        rangeSalary: { min: filterTypes.Salary.min, max: filterTypes.Salary.max }
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