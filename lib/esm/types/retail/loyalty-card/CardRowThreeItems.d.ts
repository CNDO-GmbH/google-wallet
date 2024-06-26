import { TemplateItem } from "./TemplateItem.js";
export type CardRowThreeItems = {
    /**
     * The item to be displayed at the start of the row. This item will be aligned to the left.
     */
    startItem?: TemplateItem;
    /**
     * The item to be displayed in the middle of the row. This item will be centered between the start and end items.
     */
    middleItem?: TemplateItem;
    /**
     * The item to be displayed at the end of the row. This item will be aligned to the right.
     */
    endItem?: TemplateItem;
};
