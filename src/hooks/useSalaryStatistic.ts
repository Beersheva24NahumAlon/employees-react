import Employee from "../model/Employee";

const step = 5000;

export default function useSalaryStatistic(employees: Employee[]) {
        const statObj = employees.reduce((acc: Record<string, number>, current: Employee) => {
        const lower = Math.floor(current.salary / step) * step;
        const upper = lower + step - 1;
        const rangeKey = `${lower}-${upper}`;

        acc[rangeKey] = (acc[rangeKey] || 0) + 1;
        return acc;
    }, {});
    return Object.entries(statObj).map(([range, count]) => ({ range, count }))
            .sort((a, b) => +a.range.split("-")[0] - +b.range.split("-")[0]);
}
