import { DependencyContainer } from "tsyringe";

import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { DatabaseService } from "@spt/services/DatabaseService";
import { IDatabaseTables } from "@spt/models/spt/server/IDatabaseTables";
import { ItemHelper } from "@spt/helpers/ItemHelper";
import { BaseClasses } from "@spt/models/enums/BaseClasses";

class RefChanges implements IPostDBLoadMod
{
    public postDBLoad(container: DependencyContainer): void
    {
        const databaseService = container.resolve<DatabaseService>("DatabaseService");
        const tables: IDatabaseTables = databaseService.getTables();
    }
}

export const mod = new RefChanges();
