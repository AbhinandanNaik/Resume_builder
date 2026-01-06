export class UIState {
    exportTrigger = $state(0);

    triggerExport() {
        this.exportTrigger++;
    }
}

export const uiStore = new UIState();
