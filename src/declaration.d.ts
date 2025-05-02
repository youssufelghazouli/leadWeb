// filepath: src/custom.d.ts
declare module '*.exe' {
    const value: string;
    export default value;
}

declare module '*.zip' {
    const value: string;
    export default value;
}