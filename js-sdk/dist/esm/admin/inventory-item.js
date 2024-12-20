var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class InventoryItem {
    /**
     * @ignore
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * This method creates an inventory item. It sends a request to the
     * [Create Inventory Item](https://docs.medusajs.com/api/admin#inventory-items_postinventoryitems)
     * API route.
     *
     * @param body - The inventory item's details.
     * @param query - Configure the fields to retrieve in the inventory item.
     * @param headers - Headers to pass in the request.
     * @returns The inventory item's details.
     *
     * @example
     * sdk.admin.inventoryItem.create({
     *   sku: "SHIRT"
     * })
     * .then(({ inventory_item }) => {
     *   console.log(inventory_item)
     * })
     */
    create(body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/inventory-items`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    /**
     * This method updates an inventory level. It sends a request to the
     * [Update Inventory Item](https://docs.medusajs.com/api/admin#inventory-items_postinventoryitemsid)
     * API route.
     *
     * @param id - The inventory item's ID.
     * @param body - The data to update.
     * @param query - Configure the fields to retrieve in the inventory item.
     * @param headers - Headers to pass in the request.
     * @returns The inventory item's details.
     *
     * @example
     * sdk.admin.inventoryItem.update("iitem_123", {
     *   sku: "SHIRT"
     * })
     * .then(({ inventory_item }) => {
     *   console.log(inventory_item)
     * })
     */
    update(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/inventory-items/${id}`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    /**
     * This method retrieves a paginated list of inventory items. It sends a request to the
     * [List Inventory Items](https://docs.medusajs.com/api/admin#inventory-items_getinventoryitems)
     * API route.
     *
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of inventory items.
     *
     * @example
     * To retrieve the list of inventory items:
     *
     * ```ts
     * sdk.admin.inventoryItem.list()
     * .then(({ inventory_items, count, limit, offset }) => {
     *   console.log(inventory_items)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.inventoryItem.list({
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ inventory_items, count, limit, offset }) => {
     *   console.log(inventory_items)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each inventory item:
     *
     * ```ts
     * sdk.admin.inventoryItem.list({
     *   fields: "id,*location_levels"
     * })
     * .then(({ inventory_items, count, limit, offset }) => {
     *   console.log(inventory_items)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */
    list(query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/inventory-items`, {
                query,
                headers,
            });
        });
    }
    /**
     * This method retrieves an inventory item by its ID. It sends a request to the
     * [Get Inventory Item](https://docs.medusajs.com/api/admin#inventory-items_getinventoryitemsid) API route.
     *
     * @param id - The inventory item's ID.
     * @param query - Configure the fields to retrieve in the inventory item.
     * @param headers - Headers to pass in the request
     * @returns The inventory item's details.
     *
     * @example
     * To retrieve an inventory item by its ID:
     *
     * ```ts
     * sdk.admin.inventoryItem.retrieve("iitem_123")
     * .then(({ inventory_item }) => {
     *   console.log(inventory_item)
     * })
     * ```
     *
     * To specify the fields and relations to retrieve:
     *
     * ```ts
     * sdk.admin.inventoryItem.retrieve("iitem_123", {
     *   fields: "id,*location_levels"
     * })
     * .then(({ inventory_item }) => {
     *   console.log(inventory_item)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */
    retrieve(id, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/inventory-items/${id}`, {
                query,
                headers,
            });
        });
    }
    /**
     * This method deletes an inventory item. This sends a request to the
     * [Delete Inventory Item](https://docs.medusajs.com/api/admin#inventory-items_deleteinventoryitemsid)
     * API route.
     *
     * @param id - The inventory item's ID.
     * @param headers - Headers to pass in the request
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.inventoryItem.delete("iitem_123")
     * .then(({ deleted }) => {
     *   console.log(deleted)
     * })
     */
    delete(id, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/inventory-items/${id}`, {
                method: "DELETE",
                headers,
            });
        });
    }
    /**
     * This method retrieves a paginated list of inventory levels that belong to an inventory item.
     * It sends a request to the [List Inventory Items](https://docs.medusajs.com/api/admin#inventory-items_getinventoryitems)
     * API route.
     *
     * @param id - The inventory item's ID.
     * @param query - Filters and pagination configurations.
     * @param headers - Headers to pass in the request.
     * @returns The paginated list of inventory levels.
     *
     * @example
     * To retrieve the list of inventory levels:
     *
     * ```ts
     * sdk.admin.inventoryItem.listLevels("iitem_123")
     * .then(({ inventory_levels, count, limit, offset }) => {
     *   console.log(inventory_levels)
     * })
     * ```
     *
     * To configure the pagination, pass the `limit` and `offset` query parameters.
     *
     * For example, to retrieve only 10 items and skip 10 items:
     *
     * ```ts
     * sdk.admin.inventoryItem.listLevels("iitem_123", {
     *   limit: 10,
     *   offset: 10
     * })
     * .then(({ inventory_levels, count, limit, offset }) => {
     *   console.log(inventory_levels)
     * })
     * ```
     *
     * Using the `fields` query parameter, you can specify the fields and relations to retrieve
     * in each inventory level:
     *
     * ```ts
     * sdk.admin.inventoryItem.listLevels("iitem_123", {
     *   fields: "id,*inventory_item"
     * })
     * .then(({ inventory_levels, count, limit, offset }) => {
     *   console.log(inventory_levels)
     * })
     * ```
     *
     * Learn more about the `fields` property in the [API reference](https://docs.medusajs.com/api/store#select-fields-and-relations).
     */
    listLevels(id, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/inventory-items/${id}/location-levels`, {
                query,
                headers,
            });
        });
    }
    /**
     * This method updates the inventory level of the specified inventory item and
     * stock location.
     *
     * This method sends a request to the
     * [Update Inventory Level](https://docs.medusajs.com/api/admin#inventory-items_postinventoryitemsidlocationlevelslocation_id)
     * API route.
     *
     * @param id - The inventory item's ID.
     * @param locationId - The stock location's ID.
     * @param body - The details to update.
     * @param query - Configure the fields to retrieve in the inventory item.
     * @param headers - Headers to pass in the request
     * @returns The inventory item's details.
     *
     * @example
     * sdk.admin.inventoryItem.updateLevel(
     *   "iitem_123",
     *   "sloc_123",
     *   {
     *     stocked_quantity: 10
     *   }
     * )
     * .then(({ inventory_item }) => {
     *   console.log(inventory_item)
     * })
     */
    updateLevel(id, locationId, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/inventory-items/${id}/location-levels/${locationId}`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
    /**
     * This method deletes an inventory level associated with an inventory item
     * and a stock location.
     *
     * This method sends a request to the
     * [Remove Inventory Level](https://docs.medusajs.com/api/admin#inventory-items_deleteinventoryitemsidlocationlevelslocation_id)
     * API route.
     *
     * @param id - The inventory item's ID.
     * @param locationId - The stock location's ID.
     * @param headers - Headers to pass in the request
     * @returns The deletion's details.
     *
     * @example
     * sdk.admin.inventoryItem.deleteLevel(
     *   "iitem_123",
     *   "sloc_123",
     * )
     * .then(({ deleted, parent: inventoryItem }) => {
     *   console.log(deleted, inventoryItem)
     * })
     */
    deleteLevel(id, locationId, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/inventory-items/${id}/location-levels/${locationId}`, {
                method: "DELETE",
                headers,
            });
        });
    }
    /**
     * This method manages the inventory levels of an inventory item. It sends a request to the
     * [Manage Inventory Levels](https://docs.medusajs.com/api/admin#inventory-items_postinventoryitemsidlocationlevelsbatch)
     * API route.
     *
     * @param id - The inventory item's ID.
     * @param body - The inventory levels to create or delete.
     * @param query - Configure the fields to retrieve in the inventory item.
     * @param headers - Headers to pass in the request
     * @returns The inventory item's details.
     *
     * @example
     * sdk.admin.inventoryItem.batchUpdateLevels("iitem_123", {
     *   create: [{
     *     location_id: "sloc_123",
     *     stocked_quantity: 10
     *   }],
     *   delete: ["sloc_123"]
     * })
     * .then(({ inventory_item }) => {
     *   console.log(inventory_item)
     * })
     */
    batchUpdateLevels(id, body, query, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.client.fetch(`/admin/inventory-items/${id}/location-levels/batch`, {
                method: "POST",
                headers,
                body,
                query,
            });
        });
    }
}
//# sourceMappingURL=inventory-item.js.map