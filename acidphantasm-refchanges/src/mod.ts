import { DependencyContainer } from "tsyringe";

import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { DatabaseService } from "@spt/services/DatabaseService";
import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";
import { ILogger } from "@spt/models/spt/utils/ILogger";

import customQuests from "../db/Ref_quests.json";

class RefSPTFriendlyQuests implements IPostDBLoadMod
{
    public postDBLoad(container: DependencyContainer): void
    {
        const databaseService = container.resolve<DatabaseService>("DatabaseService");
        const logger = container.resolve<ILogger>("WinstonLogger");
        const tables: IDatabaseTables = databaseService.getTables();
        const localeTable = tables.locales.global;
        const questTable = tables.templates.quests;
        const refTraderID = "6617beeaa9cfa777ca915b7c";
        const refAssort = tables.traders[refTraderID].assort;
        const refQuestAssort = tables.traders[refTraderID].questassort;
        
        //Update assort to have quest reward
        refQuestAssort["success"]["66c1beaefa6e5a0c120f0d08"] = "668caeedbdb70c05d702f1b6" ;

        questTable["66058cc1da30b620a34e6e86"] = customQuests["66058cc1da30b620a34e6e86"]; //tgh p1
        questTable["66058cc208308761cf390993"] = customQuests["66058cc208308761cf390993"]; //tgh p2
        questTable["66058cc5bb83da7ba474aba9"] = customQuests["66058cc5bb83da7ba474aba9"]; //tgh p3

        for (const language in localeTable)
        {
            localeTable[language]["668caeedbdb70c05d702f0fc"] = "Eliminate PMCs" // tgh p1
            localeTable[language]["662ba78e19c86d3199ae0a93"] = "Eliminate PMCs" // tgh p2
            localeTable[language]["662ba61d3ed61b6b78187b71"] = "Eliminate PMCs" // tgh p3
        }
    }
}

export const mod = new RefSPTFriendlyQuests();
