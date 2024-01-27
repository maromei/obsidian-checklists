import { ChecklistSettings, DEFAULT_SETTINGS } from "./settings";
import { Plugin } from 'obsidian'

export default class Checklists extends Plugin {

    settings: ChecklistSettings;

    async onload(): Promise<void> {
        this.add_all_commands()
    }

    add_all_commands(): void {
        this.addCommand({
            id: "use-checklist",
            name: "Use a checklist",
            callback: () => {this.find_all_checklists()}
        });
    }

    find_all_checklists(): string[] {

        // TODO

        return ["TODO"]
    }

    async load_settings() {
        this.settings = Object.assign(
            {}, DEFAULT_SETTINGS, await this.loadData()
        );
    }

    async save_settings() {
        await this.saveData(this.settings);
    }
}
