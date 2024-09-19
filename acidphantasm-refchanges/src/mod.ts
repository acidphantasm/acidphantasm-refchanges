import { DependencyContainer } from "tsyringe";

import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { DatabaseService } from "@spt/services/DatabaseService";
import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";
import { ILogger } from "@spt/models/spt/utils/ILogger";

class RefSPTFriendlyQuests implements IPostDBLoadMod
{
    public postDBLoad(container: DependencyContainer): void
    {
        const databaseService = container.resolve<DatabaseService>("DatabaseService");
        const logger = container.resolve<ILogger>("WinstonLogger");
        const tables: IDatabaseTables = databaseService.getTables();
        const refTraderID = "6617beeaa9cfa777ca915b7c";

        //Update assort to have quest reward
        tables.traders[refTraderID].questassort["success"]["668caeedbdb70c05d702f1e5"]= "668caeedbdb70c05d702f1b6" ;
        tables.traders[refTraderID].assort.items.push(
            {
                "_id": "668caeedbdb70c05d702f1e5",
                "_tpl": "664a5428d5e33a713b622379",
                "parentId": "hideout",
                "slotId": "hideout",
                "upd": {
                    "UnlimitedCount": true,
                    "StackObjectsCount": 500,
                    "BuyRestrictionMax": 1,
                    "BuyRestrictionCurrent": 0
                }
            }
        );
        tables.traders[refTraderID].assort.items.push(
            {
                "_id": "66ebaaf831b3fbbb2f092258",
                "_tpl": "664d3dd590294949fe2d81b7",
                "parentId": "hideout",
                "slotId": "hideout",
                "upd": {
                    "UnlimitedCount": true,
                    "StackObjectsCount": 500,
                    "BuyRestrictionMax": 1,
                    "BuyRestrictionCurrent": 0
                }
            }
        );
        tables.traders[refTraderID].assort.items.push(
            {
                "_id": "66ebaaf831b3fbbb2f092259",
                "_tpl": "664d3ddfdda2e85aca370d75",
                "parentId": "hideout",
                "slotId": "hideout",
                "upd": {
                    "UnlimitedCount": true,
                    "StackObjectsCount": 500,
                    "BuyRestrictionMax": 1,
                    "BuyRestrictionCurrent": 0
                }
            }
        );
        tables.traders[refTraderID].assort.items.push(
            {
                "_id": "66ebaaf831b3fbbb2f092260",
                "_tpl": "664d3de85f2355673b09aed5",
                "parentId": "hideout",
                "slotId": "hideout",
                "upd": {
                    "UnlimitedCount": true,
                    "StackObjectsCount": 500,
                    "BuyRestrictionMax": 1,
                    "BuyRestrictionCurrent": 0
                }
            }
        );
        tables.traders[refTraderID].assort.items.push(
            {
                "_id": "66ebaaf831b3fbbb2f092261",
                "_tpl": "5b6d9ce188a4501afc1b2b25",
                "parentId": "hideout",
                "slotId": "hideout",
                "upd": {
                    "UnlimitedCount": true,
                    "StackObjectsCount": 500,
                    "BuyRestrictionMax": 1,
                    "BuyRestrictionCurrent": 0
                }
            }
        );
        tables.traders[refTraderID].assort.items.push(
            {
                "_id": "66ebaaf831b3fbbb2f092262",
                "_tpl": "5c0a840b86f7742ffa4f2482",
                "parentId": "hideout",
                "slotId": "hideout",
                "upd": {
                    "UnlimitedCount": true,
                    "StackObjectsCount": 500,
                    "BuyRestrictionMax": 1,
                    "BuyRestrictionCurrent": 0
                }
            }
        );
        tables.traders[refTraderID].assort.items.push(
            {
                "_id": "66ebaaf831b3fbbb2f092263",
                "_tpl": "59fb023c86f7746d0d4b423c",
                "parentId": "hideout",
                "slotId": "hideout",
                "upd": {
                    "UnlimitedCount": true,
                    "StackObjectsCount": 500,
                    "BuyRestrictionMax": 1,
                    "BuyRestrictionCurrent": 0
                }
            }
        );
        tables.traders[refTraderID].assort.items.push(
            {
                "_id": "66ebaaf831b3fbbb2f092264",
                "_tpl": "59fb042886f7746c5005a7b2",
                "parentId": "hideout",
                "slotId": "hideout",
                "upd": {
                    "UnlimitedCount": true,
                    "StackObjectsCount": 500,
                    "BuyRestrictionMax": 1,
                    "BuyRestrictionCurrent": 0
                }
            }
        );
        tables.traders[refTraderID].assort.items.push(
            {
                "_id": "66ebaaf831b3fbbb2f092265",
                "_tpl": "6357c98711fb55120211f7e1",
                "parentId": "hideout",
                "slotId": "hideout",
                "upd": {
                    "UnlimitedCount": true,
                    "StackObjectsCount": 500,
                    "BuyRestrictionMax": 1,
                    "BuyRestrictionCurrent": 0
                }
            }
        );
        tables.traders[refTraderID].assort.items.push(
            {
                "_id": "66ebaaf831b3fbbb2f092266",
                "_tpl": "62e7e7bbe6da9612f743f1e0",
                "parentId": "hideout",
                "slotId": "hideout",
                "upd": {
                    "UnlimitedCount": true,
                    "StackObjectsCount": 500,
                    "BuyRestrictionMax": 1,
                    "BuyRestrictionCurrent": 0
                }
            }
        );
        tables.traders[refTraderID].assort.barter_scheme["668caeedbdb70c05d702f1e5"] = 
        [
            [
                {
                    "count": 3,
                    "_tpl": "6656560053eaaa7a23349c86"
                }
            ]
        ];
        tables.traders[refTraderID].assort.barter_scheme["66ebaaf831b3fbbb2f092258"] = 
        [
            [
                {
                    "count": 1,
                    "_tpl": "6656560053eaaa7a23349c86"
                }
            ]
        ];
        tables.traders[refTraderID].assort.barter_scheme["66ebaaf831b3fbbb2f092259"] = 
        [
            [
                {
                    "count": 1,
                    "_tpl": "6656560053eaaa7a23349c86"
                }
            ]
        ];
        tables.traders[refTraderID].assort.barter_scheme["66ebaaf831b3fbbb2f092260"] = 
        [
            [
                {
                    "count": 1,
                    "_tpl": "6656560053eaaa7a23349c86"
                }
            ]
        ];
        tables.traders[refTraderID].assort.barter_scheme["66ebaaf831b3fbbb2f092261"] = 
        [
            [
                {
                    "count": 6,
                    "_tpl": "6656560053eaaa7a23349c86"
                }
            ]
        ];
        tables.traders[refTraderID].assort.barter_scheme["66ebaaf831b3fbbb2f092262"] = 
        [
            [
                {
                    "count": 16,
                    "_tpl": "6656560053eaaa7a23349c86"
                }
            ]
        ];
        tables.traders[refTraderID].assort.barter_scheme["66ebaaf831b3fbbb2f092263"] = 
        [
            [
                {
                    "count": 2,
                    "_tpl": "6656560053eaaa7a23349c86"
                }
            ]
        ];
        tables.traders[refTraderID].assort.barter_scheme["66ebaaf831b3fbbb2f092264"] = 
        [
            [
                {
                    "count": 2,
                    "_tpl": "6656560053eaaa7a23349c86"
                }
            ]
        ];
        tables.traders[refTraderID].assort.barter_scheme["66ebaaf831b3fbbb2f092265"] = 
        [
            [
                {
                    "count": 1,
                    "_tpl": "6656560053eaaa7a23349c86"
                }
            ]
        ];
        tables.traders[refTraderID].assort.barter_scheme["66ebaaf831b3fbbb2f092266"] = 
        [
            [
                {
                    "count": 1,
                    "_tpl": "6656560053eaaa7a23349c86"
                }
            ]
        ];
        tables.traders[refTraderID].assort.loyal_level_items["668caeedbdb70c05d702f1e5"] = 1;
        tables.traders[refTraderID].assort.loyal_level_items["66ebaaf831b3fbbb2f092258"] = 2;
        tables.traders[refTraderID].assort.loyal_level_items["66ebaaf831b3fbbb2f092259"] = 3;
        tables.traders[refTraderID].assort.loyal_level_items["66ebaaf831b3fbbb2f092260"] = 4;
        tables.traders[refTraderID].assort.loyal_level_items["66ebaaf831b3fbbb2f092261"] = 4;
        tables.traders[refTraderID].assort.loyal_level_items["66ebaaf831b3fbbb2f092262"] = 4;
        tables.traders[refTraderID].assort.loyal_level_items["66ebaaf831b3fbbb2f092263"] = 3;
        tables.traders[refTraderID].assort.loyal_level_items["66ebaaf831b3fbbb2f092264"] = 3;
        tables.traders[refTraderID].assort.loyal_level_items["66ebaaf831b3fbbb2f092265"] = 4;
        tables.traders[refTraderID].assort.loyal_level_items["66ebaaf831b3fbbb2f092266"] = 4;
    }
}

export const mod = new RefSPTFriendlyQuests();
