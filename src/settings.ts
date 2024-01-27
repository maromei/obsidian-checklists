

export interface ChecklistSettings {
    source_folder: string;
    destination_folder: string;
}

export const DEFAULT_SETTINGS: Partial<ChecklistSettings> = {
    source_folder: "/"
};
