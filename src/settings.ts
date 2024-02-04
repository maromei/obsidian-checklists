import Checklists from "./main";
import { App, PluginSettingTab, Setting } from "obsidian";

export interface ChecklistSettings {
    source_folder: string;
    destination_folder: string;
}

export const DEFAULT_SETTINGS: Partial<ChecklistSettings> = {
    source_folder: "/"
};

export class ChecklistsSettingsTab extends PluginSettingTab {
    plugin: Checklists;

    constructor(app: App, plugin: Checklists) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display(): void {
        let { containerEl } = this;

        console.log(containerEl);

        containerEl.empty();

        new Setting(containerEl)
            .setName("Source Folder")
            .setDesc("Add a Source Folder")
            .addText((text) =>
                text
                    .setPlaceholder("something")
                    .setValue(this.plugin.settings.source_folder)
                    .onChange(async (value) => {
                        this.plugin.settings.source_folder = value;
                        await this.plugin.save_settings();
                    })
            );
    }
}