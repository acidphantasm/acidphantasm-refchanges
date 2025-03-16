import { DependencyContainer } from "tsyringe";

import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { DatabaseService } from "@spt/services/DatabaseService";
import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";
import { IQuest } from "@spt/models/eft/common/tables/IQuest";

class RefSPTFriendlyQuests implements IPostDBLoadMod
{
    private customQuestTable: Record<string, IQuest> = require("../db/Ref_quests.json")

    public postDBLoad(container: DependencyContainer): void
    {
        const databaseService = container.resolve<DatabaseService>("DatabaseService");
        const tables: IDatabaseTables = databaseService.getTables();
        const localeTable = tables.locales.global;
        const questTable = tables.templates.quests;
        const refTraderID = "6617beeaa9cfa777ca915b7c";
        const refBase = tables.traders[refTraderID].base;
        const refQuestAssort = tables.traders[refTraderID].questassort;
        
        //Update assort to have quest reward
        refQuestAssort["success"]["66c1beaefa6e5a0c120f0d08"] = "668caeedbdb70c05d702f1b6" ;

        questTable["66058cc1da30b620a34e6e86"] = this.customQuestTable["66058cc1da30b620a34e6e86"]; //tgh p1
        questTable["66058cc208308761cf390993"] = this.customQuestTable["66058cc208308761cf390993"]; //tgh p2
        questTable["66058cc5bb83da7ba474aba9"] = this.customQuestTable["66058cc5bb83da7ba474aba9"]; //tgh p3

        for (const language in localeTable)
        {
            localeTable[language]["668caeedbdb70c05d702f0fc"] = "Eliminate PMCs" // tgh p1
            localeTable[language]["662ba78e19c86d3199ae0a93"] = "Eliminate PMCs" // tgh p2
            localeTable[language]["662ba61d3ed61b6b78187b71"] = "Eliminate PMCs" // tgh p3
        }

        // Change LL4 requirements for Ref to be 1.00
        refBase.loyaltyLevels[3].minStanding = 1.0;
    }
}

export const mod = new RefSPTFriendlyQuests();
