import { SvelteComponent } from "svelte";
import * as echarts from 'echarts';
export type EChartsOptions = echarts.EChartsOption;
export type EChartsTheme = string | object;
export type EChartsRenderer = 'canvas' | 'svg';
export type ChartOptions = {
    theme?: EChartsTheme;
    renderer?: EChartsRenderer;
    options: EChartsOptions;
};
export declare function chartable(element: HTMLElement, echartOptions: ChartOptions): {
    destroy(): void;
    update(newOptions: ChartOptions): void;
    getInstance(): echarts.EChartsType;
};
declare const __propDef: {
    props: {
        options: echarts.EChartsOption;
        theme?: EChartsTheme | undefined;
        renderer?: EChartsRenderer | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ChartProps = typeof __propDef.props;
export type ChartEvents = typeof __propDef.events;
export type ChartSlots = typeof __propDef.slots;
export default class Chart extends SvelteComponent<ChartProps, ChartEvents, ChartSlots> {
}
export {};
