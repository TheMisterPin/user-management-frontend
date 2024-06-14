
/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
 interface User{
    id : number
    username : string
    email? : string
    password: string
    friends : User[]
}
}
export {}
