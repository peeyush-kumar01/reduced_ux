import { UserType } from "./Objects";
export class User {

    usr: UserType;
    constructor(user: UserType) {
        this.usr = user
    }

    validateUserEntry(): boolean {
        if (this.usr.password!.length >= 8) {
            return true
        }
        return false;
    }

    validateOldAndNewPassword(old: string, newp: string): boolean {
        if (old != newp) {
            return true
        }
        return false
    }

    validateRePassword(rep: string, newp: string): boolean {
        if (rep == newp) {
            return true
        }
        return false
    }
}
