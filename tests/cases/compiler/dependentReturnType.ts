// @strict: true

interface F {
    "t": number,
    "f": boolean,
}

function depLikeFun1<T extends keyof F>(str: T): F[typeof str] {
    if (str === "t") { // Can never return anything because `F[T]` is treated as `never` when checking return type assignb.
        const y: "t" = str;
        return 1;
    } else {
        return true;
    }
}

const x = depLikeFun1("t"); // has type number
const y = depLikeFun1("f"); // has type boolean

function depLikeFun2(str: "number" | "string"): typeof str extends "number" ? number : string {
    if (str === "number") {
        return 3;
    }

    return "";
}

const zz = depLikeFun2(undefined as any as "number" | "string");
const zzz = depLikeFun2("number");

function depLikeFun3<T extends keyof F>(str: T): F[typeof str] {
    if (str === "t") {
        const y: "t" = str;
        return false;
    } else {
        return true;
    }
    return 0;
}