import { HttpTypes } from "@medusajs/types";
import { Client } from "../client";
import { ClientHeaders } from "../types";
export declare class User {
    /**
     * @ignore
     */
    private client;
    /**
     * @ignore
     */
    constructor(client: Client);
    create(body: HttpTypes.AdminCreateUser, query?: HttpTypes.AdminUserParams, headers?: ClientHeaders): Promise<HttpTypes.AdminUserResponse>;
    update(id: string, body: HttpTypes.AdminUpdateUser, query?: HttpTypes.AdminUserParams, headers?: ClientHeaders): Promise<HttpTypes.AdminUserResponse>;
    list(queryParams?: HttpTypes.AdminUserListParams, headers?: ClientHeaders): Promise<HttpTypes.AdminUserListResponse>;
    retrieve(id: string, query?: HttpTypes.AdminUserParams, headers?: ClientHeaders): Promise<HttpTypes.AdminUserResponse>;
    delete(id: string, headers?: ClientHeaders): Promise<HttpTypes.AdminUserDeleteResponse>;
    me(query?: HttpTypes.AdminUserParams, headers?: ClientHeaders): Promise<HttpTypes.AdminUserResponse>;
}
//# sourceMappingURL=user.d.ts.map