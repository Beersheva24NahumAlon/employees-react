import { useQuery } from "@tanstack/react-query";
import apiClient, { calculateAge } from "../services/ApiClientJsonServer";
import Employee from "../model/Employee";
import { compareRanges, Statistic } from "../common/statistics";

const step = 10;

const ageStatistic = async () => {
    const statObj = (await apiClient.getAll()).reduce((acc: Record<string, number>, current: Employee) => {
        const lower = Math.floor(calculateAge(current.birthDate) / step) * step;
        const upper = lower + step - 1;
        const rangeKey = `${lower}-${upper}`;

        acc[rangeKey] = (acc[rangeKey] || 0) + 1;
        return acc;
    }, {});
    return Object.entries(statObj).map(([range, count]) => ({ range, count })).sort((a, b) => compareRanges(a.range, b.range));
}

export default function useAgeStatisic() {
    return useQuery<Statistic[], Error>({
        queryKey: ["AgeStatistic"],
        queryFn: ageStatistic,
        staleTime: 5_000,
    });
}
