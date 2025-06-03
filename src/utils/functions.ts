export function calculateBirthDate(age: number): string {
    const nowDate = new Date();
    const nowYear = nowDate.getFullYear();
    const nowMonth = nowDate.getMonth();
    const nowDay = nowDate.getDate();
    const birthYear = nowYear - age;
    return new Date(birthYear, nowMonth, nowDay).toISOString().split("T")[0];
}

export function calculateAge(birthDateStr: string): number {
    const birthDate = new Date(birthDateStr);
    const now = new Date();
    const birthDay = birthDate.getDay();
    const birthMonth = birthDate.getMonth();
    const birthYear = birthDate.getFullYear();
    const currentYear = now.getFullYear();
    const currentBirthDate = new Date(currentYear, birthMonth, birthDay);
    const age = currentYear - birthYear;
    return now.getTime() - currentBirthDate.getTime() > 0 ? age : age - 1;
}