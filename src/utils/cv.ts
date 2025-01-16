import type { CV, BaseInfo } from './types';
import { micromark } from 'micromark';

export function extractBaseInfo(id: string, cv: CV): BaseInfo {
    return {
        name: cv.name,
        lang: cv.lang || id,
        info: cv.info,
    };
}

export function md2html(md: string): string {
    return micromark(md);
}